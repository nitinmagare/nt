(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1> \n  <app-record></app-record>\n</div>\n \n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Time Tracker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _record_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record/record.component */ "./src/app/record/record.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _record_record_component__WEBPACK_IMPORTED_MODULE_5__["RecordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/record/record.component.css":
/*!*********************************************!*\
  !*** ./src/app/record/record.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29yZC9yZWNvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/record/record.component.html":
/*!**********************************************!*\
  !*** ./src/app/record/record.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center m-3\">\n  <div>\n    <form [formGroup]=\"recordForm\" (ngSubmit)=\"addRecord(recordForm.value); recordform.resetForm()\"\n      #recordform=\"ngForm\">\n      <table align=\"center\">\n        <tr>\n          <th>Email</th>\n          <th>Start</th>\n          <th>End</th>\n          <th>Action</th>\n        </tr>\n        <tr>\n          <td><input type=\"text\" name=\"email\" formControlName=\"email\"></td>\n          <td><input type=\"datetime-local\" name=\"start\" formControlName=\"start\" required></td>\n          <td> <input type=\"datetime-local\" name=\"end\" formControlName=\"end\" required></td>\n          <td><input type=\"submit\" [disabled]=\"!recordForm.valid\" class=\"forsubmit\" value=\"Add\"></td>\n        </tr>\n      </table>\n    </form>\n  </div>\n  <br>\n  <div>\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchRecord(searchForm.value); searchform.resetForm()\"\n      #searchform=\"ngForm\">\n      <table align=\"center\">\n        <tr>\n          <th>Email</th>\n          <th>Action</th>\n        </tr>\n        <tr>\n          <td> <input type=\"text\" name=\"email\" formControlName=\"email\"></td>\n          <td><input type=\"submit\" [disabled]=\"!searchForm.valid\" class=\"forsubmit\" value=\"Search\"></td>\n        </tr>\n      </table>\n    </form>\n  </div>\n  <br>\n  <div *ngIf=\"items.length>0; else showNoRecords\">\n    <div class=\"card-body\">\n      <table align=\"center\">\n        <tr>\n          <th>Email</th>\n          <th>Start</th>\n          <th>End</th>\n        </tr>\n        <tr *ngFor=\"let item of items\">\n          <td>{{item.email}}</td>\n          <td>{{item.start}}</td>\n          <td>{{item.end}}</td>\n        </tr>\n      </table>\n    </div>\n    <br>\n    <div class=\"card-footer pb-0 pt-3\">\n      <table align=\"center\">\n        <tr>\n          <td><input type=\"button\" class=\"form-control\" [disabled]=\"currentPage<=0\" value=\"Previous\"\n              (click)=\"prevPage()\"></td>\n              <td><input type=\"button\" class=\"form-control\"  value=\"Home\"  (click)=\"home()\"></td>\n          <td><input type=\"button\" class=\"form-control\" [disabled]=\"items.length<paginationSize\" value=\"Next\"\n              (click)=\"nextPage()\"></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div align=\"center\">Current page:{{currentPage}}</div>\n  <ng-template #showNoRecords>\n    <div align=\"center\">No Records Found</div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/record/record.component.ts":
/*!********************************************!*\
  !*** ./src/app/record/record.component.ts ***!
  \********************************************/
/*! exports provided: RecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordComponent", function() { return RecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/record.service */ "./src/app/record/service/record.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var RecordComponent = /** @class */ (function () {
    function RecordComponent(recordService, datePipe) {
        this.recordService = recordService;
        this.datePipe = datePipe;
        this.disablePrevButton = true;
        this.disableNextButton = false;
        this.paginationSize = 10;
        this.currentPage = 0;
        this.items = [];
    }
    RecordComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.items = this.recordService.getRecords(0, this.paginationSize);
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[^ @]*@[^ @]*")
            ]))
        });
        this.recordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[^ @]*@[^ @]*")
            ])),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
        this.recordForm.patchValue({
            email: "nitinmagare@gmail.com",
            start: this.datePipe.transform(new Date(), "yyyy-MM-ddThh:mm:ss"),
            end: this.datePipe.transform(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0), "yyyy-MM-ddThh:mm:ss")
        });
    };
    RecordComponent.prototype.converToDisplayString = function (str) {
        return this.datePipe.transform(new Date(Date.parse(str)), "yyyy-MM-ddThh:mm:ss.sssZ");
    };
    RecordComponent.prototype.addRecord = function (data) {
        data.start = this.converToDisplayString(data.start);
        data.end = this.converToDisplayString(data.end);
        this.recordService.addRecord(data);
        this.currentPage = 0;
        this.items = this.recordService.getRecords(0, this.paginationSize);
    };
    RecordComponent.prototype.home = function () {
        this.currentPage = 0;
        this.items = this.recordService.getRecords(0, this.paginationSize);
    };
    RecordComponent.prototype.searchRecord = function (input) {
        this.currentPage = 0;
        this.recordService.searchRecords(input, this.paginationSize);
    };
    RecordComponent.prototype.nextPage = function () {
        this.currentPage++;
        var offset = this.currentPage * this.paginationSize;
        this.items = this.recordService.getRecords(offset, offset + this.paginationSize);
    };
    RecordComponent.prototype.prevPage = function () {
        if (this.currentPage > 0) {
            this.currentPage--;
            var offset = this.currentPage * this.paginationSize;
            this.items = this.recordService.getRecords(offset, offset + this.paginationSize);
        }
        else {
            this.disablePrevButton = true;
        }
    };
    RecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record',
            template: __webpack_require__(/*! ./record.component.html */ "./src/app/record/record.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
            styles: [__webpack_require__(/*! ./record.component.css */ "./src/app/record/record.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_record_service__WEBPACK_IMPORTED_MODULE_2__["RecordService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/record/service/record.service.ts":
/*!**************************************************!*\
  !*** ./src/app/record/service/record.service.ts ***!
  \**************************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RecordService = /** @class */ (function () {
    function RecordService(httpClient) {
        this.httpClient = httpClient;
        this.APP_FETCH_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
        this.records = [{
                "start": "2019-10-22T18:06:33.003+0000",
                "end": "2019-10-22T19:06:33.003+0000",
                "email": "aliriza_1.saral@gmail.com"
            }, {
                "start": "2019-10-22T21:06:33.003+0000",
                "end": "2019-10-22T22:06:33.003+0000",
                "email": "aliriza_2.saral@gmail.com"
            }, {
                "start": "2019-10-23T00:06:33.003+0000",
                "end": "2019-10-23T01:06:33.003+0000",
                "email": "aliriza_3.saral@gmail.com"
            }, {
                "start": "2019-10-23T03:06:33.003+0000",
                "end": "2019-10-23T04:06:33.003+0000",
                "email": "aliriza_4.saral@gmail.com"
            }, {
                "start": "2019-10-23T06:06:33.003+0000",
                "end": "2019-10-23T07:06:33.003+0000",
                "email": "aliriza_5.saral@gmail.com"
            }, {
                "start": "2019-10-23T09:06:33.003+0000",
                "end": "2019-10-23T10:06:33.003+0000",
                "email": "aliriza_6.saral@gmail.com"
            }, {
                "start": "2019-10-23T12:06:33.003+0000",
                "end": "2019-10-23T13:06:33.003+0000",
                "email": "aliriza_7.saral@gmail.com"
            }, {
                "start": "2019-10-23T15:06:33.003+0000",
                "end": "2019-10-23T16:06:33.003+0000",
                "email": "aliriza_8.saral@gmail.com"
            }, {
                "start": "2019-10-23T18:06:33.003+0000",
                "end": "2019-10-23T19:06:33.003+0000",
                "email": "aliriza_9.saral@gmail.com"
            }, {
                "start": "2019-10-23T21:06:33.003+0000",
                "end": "2019-10-23T22:06:33.003+0000",
                "email": "aliriza_10.saral@gmail.com"
            }, {
                "start": "2019-10-23T18:06:33.003+0000",
                "end": "2019-10-23T19:06:33.003+0000",
                "email": "aliriza_11.saral@gmail.com"
            }, {
                "start": "2019-10-23T21:06:33.003+0000",
                "end": "2019-10-23T22:06:33.003+0000",
                "email": "aliriza_12.saral@gmail.com"
            }, {
                "start": "2019-10-23T12:06:33.003+0000",
                "end": "2019-10-23T13:06:33.003+0000",
                "email": "aliriza_13.saral@gmail.com"
            }, {
                "start": "2019-10-23T15:06:33.003+0000",
                "end": "2019-10-23T16:06:33.003+0000",
                "email": "aliriza_14.saral@gmail.com"
            }, {
                "start": "2019-10-23T18:06:33.003+0000",
                "end": "2019-10-23T19:06:33.003+0000",
                "email": "aliriza_15.saral@gmail.com"
            }, {
                "start": "2019-10-23T21:06:33.003+0000",
                "end": "2019-10-23T22:06:33.003+0000",
                "email": "aliriza_16.saral@gmail.com"
            }, {
                "start": "2019-10-23T18:06:33.003+0000",
                "end": "2019-10-23T19:06:33.003+0000",
                "email": "aliriza_17.saral@gmail.com"
            }, {
                "start": "2019-10-23T21:06:33.003+0000",
                "end": "2019-10-23T22:06:33.003+0000",
                "email": "aliriza_18.saral@gmail.com"
            }];
    }
    RecordService.prototype.setRecords = function (data) {
        this.records = data;
    };
    RecordService.prototype.getRecords = function (offset, length) {
        var _this = this;
        var url = this.APP_FETCH_URL + "/records?offset=" + offset + "&length=" + length;
        console.log(url);
        this.httpClient.get(url).subscribe(function (data) { return _this.setRecords(data); });
        return this.records.slice(offset, length);
    };
    RecordService.prototype.addRecord = function (data) {
        this.records.push({
            email: data.email,
            start: data.start,
            end: data.end
        });
        // this.httpClient.post(this.APP_FETCH_URL,data);
    };
    // public searchRecords(data, length: number): Observable<RecordResponse[]> {
    //   let url = this.APP_FETCH_URL + "/records?email=" + data.email + "&length=" + length;
    //   console.log(url);
    //   return this.httpClient.get<RecordResponse>(url).pipe(res => res.items);
    // }
    RecordService.prototype.searchRecords = function (data, length) {
        var _this = this;
        var url = this.APP_FETCH_URL + "/records?email=" + data.email + "&length=" + length;
        this.httpClient.get(url).subscribe(function (data) { return _this.setRecords(data); });
        return this.records.filter(function (record) { return record.email == data.email; });
    };
    RecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\angular\Assigments\Allianz\temp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map