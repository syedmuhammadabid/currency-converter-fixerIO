import { DataService } from "./../../data.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from "lodash";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  rate = {};
  rates = [];
  rateKeys = [];
  symbol = {};
  symbols = [];
  symbolKeys = [];
  newForm: FormGroup;
  message;
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.newForm = new FormGroup({
      from: new FormControl("", Validators.required),
      to: new FormControl("", Validators.required),
      amount: new FormControl("", Validators.required)
    });
    this.init();
  }

  init() {
    this.dataService.currencyRate().subscribe(
      data => {
        this.rate = data["rates"];
        this.rateKeys = Object.keys(this.rate);
        for (var i = 0; i < this.rateKeys.length; i++) {
          this.rates.push({
            code: this.rateKeys[i],
            text: this.rate[this.rateKeys[i]]
          });
        }
      },
      err => {}
    );

    this.dataService.currencySymbols().subscribe(
      data => {
        this.symbol = data["symbols"];
        this.symbolKeys = Object.keys(this.symbol);
        for (var i = 0; i < this.symbolKeys.length; i++) {
          this.symbols.push({
            code: this.symbolKeys[i],
            text: this.symbol[this.symbolKeys[i]]
          });
        }
      },
      err => {}
    );
  }
  convert() {
    let from = this.newForm.controls["from"].value;
    let to = this.newForm.controls["to"].value;
    let amount = this.newForm.controls["amount"].value;
    let toIndex = _.findIndex(this.rates, rate => {
      return rate.code == to;
    });
    let fromIndex = _.findIndex(this.rates, rate => {
      return rate.code == from;
    });
    let ratio = this.rates[toIndex].text / this.rates[fromIndex].text;
    let cal = ratio * amount;
    this.message =
      amount +
      " " +
      this.rates[fromIndex].code +
      " is equal to " +
      cal +
      " " +
      this.rates[toIndex].code;
  }
}
