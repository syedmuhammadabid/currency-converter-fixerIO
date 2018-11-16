import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(public http: HttpClient) {}

  // set endpoint and your API key
  endpoint = "convert";
  access_key = "9342f2fd9f2d9f9a34346c1c9e5f2917";
  baseURL = "http://data.fixer.io/api/";

  currencySymbols() {
    return this.http.get(
      this.baseURL + "symbols?access_key=" + this.access_key
    );
  }
  currencyRate() {
    return this.http.get(this.baseURL + "latest?access_key=" + this.access_key);
  }
}
