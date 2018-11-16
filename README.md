# Currency Conversion in Angular 6


This repository is about currency conversion using [fixer.io](https://fixer.io) implemented on [Angular 6](https://angular.io)


### Tech

This project uses a following libraries to work properly:

* [Angular 6](https://angular.io)
* [fixer.io](https://fixer.io)
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Lodash](https://lodash.com/)

And of course this itself is open source with a [public repository](https://github.com/syedmuhammadabid/currency-converter-fixerIO)
 on GitHub.

### Installation
This requires [Node.js](https://nodejs.org/) v4+ to run.

Install the prerequisites.
```sh
$ npm install -g @angular/cli
```
Once ionic framework is installed then,
```sh
$ git clone https://github.com/syedmuhammadabid/currency-converter-fixerIO
$ cd currency-converter-fixerIO
$ npm install
```
Open project folder and then `src/app/data.service.ts`, in data.service.ts provide [fixer.io](https://fixer.io) API [key](https://fixer.io/product),
```sh
  endpoint = "convert";
  access_key = "YOUR_FIXER.IO_API";
  baseURL = "http://data.fixer.io/api/";
```
and now just run,
```sh
$ ng serve
```
### Development

Want to contribute? Great!
