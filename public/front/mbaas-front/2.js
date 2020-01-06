(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/modules/common/components/tool-tip/tool-tip.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/common/components/tool-tip/tool-tip.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong class=\"tooltip\">\r\n  <span class=\"tooltip__trigger\" *ngIf='word'>\r\n    <span>{{word}}</span>\r\n  </span>\r\n  <span class=\"tooltip__message\">\r\n      {{ message || '' }}\r\n  </span>\r\n</strong>\r\n"

/***/ }),

/***/ "./src/app/modules/common/components/tool-tip/tool-tip.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/common/components/tool-tip/tool-tip.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToolTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipComponent", function() { return ToolTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _encaptulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encaptulation */ "./src/app/modules/common/components/encaptulation.ts");



let ToolTipComponent = class ToolTipComponent {
    constructor() {
        // tslint:disable-next-line: no-input-rename no-inferrable-types
        this.word = '';
        // tslint:disable-next-line: no-input-rename no-inferrable-types
        this.message = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ccWord'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ToolTipComponent.prototype, "word", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ccMessage'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ToolTipComponent.prototype, "message", void 0);
ToolTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tool-tip',
        template: __webpack_require__(/*! ./tool-tip.component.html */ "./src/app/modules/common/components/tool-tip/tool-tip.component.html"),
        encapsulation: _encaptulation__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ToolTipComponent);



/***/ }),

/***/ "./src/app/modules/common/components/tool-tip/tool-tip.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/common/components/tool-tip/tool-tip.module.ts ***!
  \***********************************************************************/
/*! exports provided: ToolTipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipModule", function() { return ToolTipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tool_tip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-tip.component */ "./src/app/modules/common/components/tool-tip/tool-tip.component.ts");




let ToolTipModule = class ToolTipModule {
};
ToolTipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tool_tip_component__WEBPACK_IMPORTED_MODULE_3__["ToolTipComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _tool_tip_component__WEBPACK_IMPORTED_MODULE_3__["ToolTipComponent"]
        ]
    })
], ToolTipModule);



/***/ }),

/***/ "./src/app/modules/tma/auth/auth-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/tma/auth/auth-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tma001_tma001_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma001/tma001.component */ "./src/app/modules/tma/auth/tma001/tma001.component.ts");
/* harmony import */ var _tma014_tma014_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma014/tma014.component */ "./src/app/modules/tma/auth/tma014/tma014.component.ts");
/* harmony import */ var _tma015_tma015_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma015/tma015.component */ "./src/app/modules/tma/auth/tma015/tma015.component.ts");






const routes = [
    {
        path: 'TMA001',
        component: _tma001_tma001_component__WEBPACK_IMPORTED_MODULE_3__["Tma001Component"]
    },
    {
        path: 'TMA014',
        component: _tma014_tma014_component__WEBPACK_IMPORTED_MODULE_4__["Tma014Component"]
    },
    {
        path: 'TMA015',
        component: _tma015_tma015_component__WEBPACK_IMPORTED_MODULE_5__["Tma015Component"]
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/auth/auth.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/tma/auth/auth.module.ts ***!
  \*************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/tma/auth/auth-routing.module.ts");
/* harmony import */ var _tma001_tma001_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma001/tma001.component */ "./src/app/modules/tma/auth/tma001/tma001.component.ts");
/* harmony import */ var _tma014_tma014_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma014/tma014.component */ "./src/app/modules/tma/auth/tma014/tma014.component.ts");
/* harmony import */ var _tma015_tma015_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tma015/tma015.component */ "./src/app/modules/tma/auth/tma015/tma015.component.ts");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tma001_tma001_component__WEBPACK_IMPORTED_MODULE_4__["Tma001Component"], _tma014_tma014_component__WEBPACK_IMPORTED_MODULE_5__["Tma014Component"], _tma015_tma015_component__WEBPACK_IMPORTED_MODULE_6__["Tma015Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/tma/auth/tma001/tma001.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma001/tma001.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma001 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma001/tma001.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma001/tma001.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGgvdG1hMDAxL3RtYTAwMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma001/tma001.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma001/tma001.component.ts ***!
  \*************************************************************/
/*! exports provided: Tma001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma001Component", function() { return Tma001Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma001Component = class Tma001Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma001',
        template: __webpack_require__(/*! ./tma001.component.html */ "./src/app/modules/tma/auth/tma001/tma001.component.html"),
        styles: [__webpack_require__(/*! ./tma001.component.scss */ "./src/app/modules/tma/auth/tma001/tma001.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma001Component);



/***/ }),

/***/ "./src/app/modules/tma/auth/tma014/tma014.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma014/tma014.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma014 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma014/tma014.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma014/tma014.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGgvdG1hMDE0L3RtYTAxNC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma014/tma014.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma014/tma014.component.ts ***!
  \*************************************************************/
/*! exports provided: Tma014Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma014Component", function() { return Tma014Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma014Component = class Tma014Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma014Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma014',
        template: __webpack_require__(/*! ./tma014.component.html */ "./src/app/modules/tma/auth/tma014/tma014.component.html"),
        styles: [__webpack_require__(/*! ./tma014.component.scss */ "./src/app/modules/tma/auth/tma014/tma014.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma014Component);



/***/ }),

/***/ "./src/app/modules/tma/auth/tma015/tma015.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma015/tma015.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma015 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma015/tma015.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma015/tma015.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGgvdG1hMDE1L3RtYTAxNS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/auth/tma015/tma015.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/tma/auth/tma015/tma015.component.ts ***!
  \*************************************************************/
/*! exports provided: Tma015Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma015Component", function() { return Tma015Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma015Component = class Tma015Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma015Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma015',
        template: __webpack_require__(/*! ./tma015.component.html */ "./src/app/modules/tma/auth/tma015/tma015.component.html"),
        styles: [__webpack_require__(/*! ./tma015.component.scss */ "./src/app/modules/tma/auth/tma015/tma015.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma015Component);



/***/ }),

/***/ "./src/app/modules/tma/authorization/authorization-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/authorization-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AuthorizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationRoutingModule", function() { return AuthorizationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tma009_tma009_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma009/tma009.component */ "./src/app/modules/tma/authorization/tma009/tma009.component.ts");
/* harmony import */ var _tma010_tma010_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma010/tma010.component */ "./src/app/modules/tma/authorization/tma010/tma010.component.ts");
/* harmony import */ var _tma011_tma011_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma011/tma011.component */ "./src/app/modules/tma/authorization/tma011/tma011.component.ts");






const routes = [
    {
        path: 'TMA009',
        component: _tma009_tma009_component__WEBPACK_IMPORTED_MODULE_3__["Tma009Component"]
    },
    {
        path: 'TMA010',
        component: _tma010_tma010_component__WEBPACK_IMPORTED_MODULE_4__["Tma010Component"]
    },
    {
        path: 'TMA011',
        component: _tma011_tma011_component__WEBPACK_IMPORTED_MODULE_5__["Tma011Component"]
    }
];
let AuthorizationRoutingModule = class AuthorizationRoutingModule {
};
AuthorizationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthorizationRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/authorization/authorization.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/tma/authorization/authorization.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationModule", function() { return AuthorizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization-routing.module */ "./src/app/modules/tma/authorization/authorization-routing.module.ts");
/* harmony import */ var _tma009_tma009_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma009/tma009.component */ "./src/app/modules/tma/authorization/tma009/tma009.component.ts");
/* harmony import */ var _tma010_tma010_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma010/tma010.component */ "./src/app/modules/tma/authorization/tma010/tma010.component.ts");
/* harmony import */ var _tma011_tma011_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tma011/tma011.component */ "./src/app/modules/tma/authorization/tma011/tma011.component.ts");







let AuthorizationModule = class AuthorizationModule {
};
AuthorizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tma009_tma009_component__WEBPACK_IMPORTED_MODULE_4__["Tma009Component"], _tma010_tma010_component__WEBPACK_IMPORTED_MODULE_5__["Tma010Component"], _tma011_tma011_component__WEBPACK_IMPORTED_MODULE_6__["Tma011Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _authorization_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorizationRoutingModule"]
        ]
    })
], AuthorizationModule);



/***/ }),

/***/ "./src/app/modules/tma/authorization/tma009/tma009.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma009/tma009.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma009 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma009/tma009.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma009/tma009.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGhvcml6YXRpb24vdG1hMDA5L3RtYTAwOS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma009/tma009.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma009/tma009.component.ts ***!
  \**********************************************************************/
/*! exports provided: Tma009Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma009Component", function() { return Tma009Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma009Component = class Tma009Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma009Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma009',
        template: __webpack_require__(/*! ./tma009.component.html */ "./src/app/modules/tma/authorization/tma009/tma009.component.html"),
        styles: [__webpack_require__(/*! ./tma009.component.scss */ "./src/app/modules/tma/authorization/tma009/tma009.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma009Component);



/***/ }),

/***/ "./src/app/modules/tma/authorization/tma010/tma010.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma010/tma010.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma010 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma010/tma010.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma010/tma010.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGhvcml6YXRpb24vdG1hMDEwL3RtYTAxMC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma010/tma010.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma010/tma010.component.ts ***!
  \**********************************************************************/
/*! exports provided: Tma010Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma010Component", function() { return Tma010Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma010Component = class Tma010Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma010Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma010',
        template: __webpack_require__(/*! ./tma010.component.html */ "./src/app/modules/tma/authorization/tma010/tma010.component.html"),
        styles: [__webpack_require__(/*! ./tma010.component.scss */ "./src/app/modules/tma/authorization/tma010/tma010.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma010Component);



/***/ }),

/***/ "./src/app/modules/tma/authorization/tma011/tma011.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma011/tma011.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma011 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma011/tma011.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma011/tma011.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2F1dGhvcml6YXRpb24vdG1hMDExL3RtYTAxMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/tma/authorization/tma011/tma011.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/authorization/tma011/tma011.component.ts ***!
  \**********************************************************************/
/*! exports provided: Tma011Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma011Component", function() { return Tma011Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma011Component = class Tma011Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma011Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma011',
        template: __webpack_require__(/*! ./tma011.component.html */ "./src/app/modules/tma/authorization/tma011/tma011.component.html"),
        styles: [__webpack_require__(/*! ./tma011.component.scss */ "./src/app/modules/tma/authorization/tma011/tma011.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma011Component);



/***/ }),

/***/ "./src/app/modules/tma/forbidden/forbidden.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/tma/forbidden/forbidden.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  forbidden-TMA works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/forbidden/forbidden.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/tma/forbidden/forbidden.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/forbidden/forbidden.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/tma/forbidden/forbidden.component.ts ***!
  \**************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForbiddenComponent = class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forbidden',
        template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/modules/tma/forbidden/forbidden.component.html"),
        styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/modules/tma/forbidden/forbidden.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForbiddenComponent);



/***/ }),

/***/ "./src/app/modules/tma/noclients/noclients-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/tma/noclients/noclients-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NoclientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoclientsRoutingModule", function() { return NoclientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tma012_tma012_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma012/tma012.component */ "./src/app/modules/tma/noclients/tma012/tma012.component.ts");
/* harmony import */ var _tma013_tma013_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma013/tma013.component */ "./src/app/modules/tma/noclients/tma013/tma013.component.ts");





const routes = [
    {
        path: 'TMA012',
        component: _tma012_tma012_component__WEBPACK_IMPORTED_MODULE_3__["Tma012Component"]
    },
    {
        path: 'TMA013',
        component: _tma013_tma013_component__WEBPACK_IMPORTED_MODULE_4__["Tma013Component"]
    }
];
let NoclientsRoutingModule = class NoclientsRoutingModule {
};
NoclientsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NoclientsRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/noclients/noclients.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/tma/noclients/noclients.module.ts ***!
  \***********************************************************/
/*! exports provided: NoclientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoclientsModule", function() { return NoclientsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _noclients_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noclients-routing.module */ "./src/app/modules/tma/noclients/noclients-routing.module.ts");
/* harmony import */ var _tma012_tma012_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma012/tma012.component */ "./src/app/modules/tma/noclients/tma012/tma012.component.ts");
/* harmony import */ var _tma013_tma013_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma013/tma013.component */ "./src/app/modules/tma/noclients/tma013/tma013.component.ts");






let NoclientsModule = class NoclientsModule {
};
NoclientsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tma012_tma012_component__WEBPACK_IMPORTED_MODULE_4__["Tma012Component"], _tma013_tma013_component__WEBPACK_IMPORTED_MODULE_5__["Tma013Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _noclients_routing_module__WEBPACK_IMPORTED_MODULE_3__["NoclientsRoutingModule"]
        ]
    })
], NoclientsModule);



/***/ }),

/***/ "./src/app/modules/tma/noclients/tma012/tma012.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma012/tma012.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma012 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/noclients/tma012/tma012.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma012/tma012.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL25vY2xpZW50cy90bWEwMTIvdG1hMDEyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/tma/noclients/tma012/tma012.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma012/tma012.component.ts ***!
  \******************************************************************/
/*! exports provided: Tma012Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma012Component", function() { return Tma012Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma012Component = class Tma012Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma012Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma012',
        template: __webpack_require__(/*! ./tma012.component.html */ "./src/app/modules/tma/noclients/tma012/tma012.component.html"),
        styles: [__webpack_require__(/*! ./tma012.component.scss */ "./src/app/modules/tma/noclients/tma012/tma012.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma012Component);



/***/ }),

/***/ "./src/app/modules/tma/noclients/tma013/tma013.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma013/tma013.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma013 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/noclients/tma013/tma013.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma013/tma013.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL25vY2xpZW50cy90bWEwMTMvdG1hMDEzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/tma/noclients/tma013/tma013.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/tma/noclients/tma013/tma013.component.ts ***!
  \******************************************************************/
/*! exports provided: Tma013Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma013Component", function() { return Tma013Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma013Component = class Tma013Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma013Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma013',
        template: __webpack_require__(/*! ./tma013.component.html */ "./src/app/modules/tma/noclients/tma013/tma013.component.html"),
        styles: [__webpack_require__(/*! ./tma013.component.scss */ "./src/app/modules/tma/noclients/tma013/tma013.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma013Component);



/***/ }),

/***/ "./src/app/modules/tma/preanalisis/preanalisis-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/preanalisis-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PreanalisisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreanalisisRoutingModule", function() { return PreanalisisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tma008_tma008_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma008/tma008.component */ "./src/app/modules/tma/preanalisis/tma008/tma008.component.ts");
/* harmony import */ var _tma007_tma007_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma007/tma007.component */ "./src/app/modules/tma/preanalisis/tma007/tma007.component.ts");
/* harmony import */ var _tma005_tma005_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma005/tma005.component */ "./src/app/modules/tma/preanalisis/tma005/tma005.component.ts");






const routes = [
    {
        path: 'TMA005',
        component: _tma005_tma005_component__WEBPACK_IMPORTED_MODULE_5__["Tma005Component"]
    },
    {
        path: 'TMA007',
        component: _tma007_tma007_component__WEBPACK_IMPORTED_MODULE_4__["Tma007Component"]
    },
    {
        path: 'TMA008',
        component: _tma008_tma008_component__WEBPACK_IMPORTED_MODULE_3__["Tma008Component"]
    }
];
let PreanalisisRoutingModule = class PreanalisisRoutingModule {
};
PreanalisisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PreanalisisRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/preanalisis/preanalisis.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/preanalisis.module.ts ***!
  \***************************************************************/
/*! exports provided: PreanalisisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreanalisisModule", function() { return PreanalisisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _preanalisis_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preanalisis-routing.module */ "./src/app/modules/tma/preanalisis/preanalisis-routing.module.ts");
/* harmony import */ var _tma005_tma005_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma005/tma005.component */ "./src/app/modules/tma/preanalisis/tma005/tma005.component.ts");
/* harmony import */ var _tma007_tma007_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma007/tma007.component */ "./src/app/modules/tma/preanalisis/tma007/tma007.component.ts");
/* harmony import */ var _tma008_tma008_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tma008/tma008.component */ "./src/app/modules/tma/preanalisis/tma008/tma008.component.ts");
/* harmony import */ var _common_components_tool_tip_tool_tip_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/tool-tip/tool-tip.module */ "./src/app/modules/common/components/tool-tip/tool-tip.module.ts");








let PreanalisisModule = class PreanalisisModule {
};
PreanalisisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tma005_tma005_component__WEBPACK_IMPORTED_MODULE_4__["Tma005Component"], _tma007_tma007_component__WEBPACK_IMPORTED_MODULE_5__["Tma007Component"], _tma008_tma008_component__WEBPACK_IMPORTED_MODULE_6__["Tma008Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _preanalisis_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreanalisisRoutingModule"],
            _common_components_tool_tip_tool_tip_module__WEBPACK_IMPORTED_MODULE_7__["ToolTipModule"]
        ]
    })
], PreanalisisModule);



/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma005/tma005.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma005/tma005.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma005 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma005/tma005.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma005/tma005.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ByZWFuYWxpc2lzL3RtYTAwNS90bWEwMDUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma005/tma005.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma005/tma005.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma005Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma005Component", function() { return Tma005Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_components_encaptulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");



let Tma005Component = class Tma005Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma005Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma005',
        template: __webpack_require__(/*! ./tma005.component.html */ "./src/app/modules/tma/preanalisis/tma005/tma005.component.html"),
        encapsulation: _common_components_encaptulation__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./tma005.component.scss */ "./src/app/modules/tma/preanalisis/tma005/tma005.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma005Component);



/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma007/tma007.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma007/tma007.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma007 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma007/tma007.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma007/tma007.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ByZWFuYWxpc2lzL3RtYTAwNy90bWEwMDcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma007/tma007.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma007/tma007.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma007Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma007Component", function() { return Tma007Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma007Component = class Tma007Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma007Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma007',
        template: __webpack_require__(/*! ./tma007.component.html */ "./src/app/modules/tma/preanalisis/tma007/tma007.component.html"),
        styles: [__webpack_require__(/*! ./tma007.component.scss */ "./src/app/modules/tma/preanalisis/tma007/tma007.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma007Component);



/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma008/tma008.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma008/tma008.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma008 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma008/tma008.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma008/tma008.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ByZWFuYWxpc2lzL3RtYTAwOC90bWEwMDguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/preanalisis/tma008/tma008.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/preanalisis/tma008/tma008.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma008Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma008Component", function() { return Tma008Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma008Component = class Tma008Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma008Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma008',
        template: __webpack_require__(/*! ./tma008.component.html */ "./src/app/modules/tma/preanalisis/tma008/tma008.component.html"),
        styles: [__webpack_require__(/*! ./tma008.component.scss */ "./src/app/modules/tma/preanalisis/tma008/tma008.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma008Component);



/***/ }),

/***/ "./src/app/modules/tma/tma-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/tma/tma-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TmaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmaRoutingModule", function() { return TmaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/modules/tma/auth/auth.module.ts");
/* harmony import */ var _preanalisis_preanalisis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preanalisis/preanalisis.module */ "./src/app/modules/tma/preanalisis/preanalisis.module.ts");
/* harmony import */ var _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorization/authorization.module */ "./src/app/modules/tma/authorization/authorization.module.ts");
/* harmony import */ var _virtual_key_virtual_key_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virtual-key/virtual-key.module */ "./src/app/modules/tma/virtual-key/virtual-key.module.ts");
/* harmony import */ var _noclients_noclients_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noclients/noclients.module */ "./src/app/modules/tma/noclients/noclients.module.ts");
/* harmony import */ var _vinculation_vinculation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vinculation/vinculation.module */ "./src/app/modules/tma/vinculation/vinculation.module.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/tma/forbidden/forbidden.component.ts");










const routes = [
    {
        path: '',
        component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"]
    },
    {
        path: 'auth',
        loadChildren: () => _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]
    },
    {
        path: 'preanalisis',
        loadChildren: () => _preanalisis_preanalisis_module__WEBPACK_IMPORTED_MODULE_4__["PreanalisisModule"]
    },
    {
        path: 'authorization',
        loadChildren: () => _authorization_authorization_module__WEBPACK_IMPORTED_MODULE_5__["AuthorizationModule"]
    },
    {
        path: 'virtualKey',
        loadChildren: () => _virtual_key_virtual_key_module__WEBPACK_IMPORTED_MODULE_6__["VirtualKeyModule"]
    },
    {
        path: 'noclients',
        loadChildren: () => _noclients_noclients_module__WEBPACK_IMPORTED_MODULE_7__["NoclientsModule"]
    },
    {
        path: 'vinculation',
        loadChildren: () => _vinculation_vinculation_module__WEBPACK_IMPORTED_MODULE_8__["VinculationModule"]
    },
    {
        path: 'forbidden',
        component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"]
    },
    {
        path: '**',
        redirectTo: 'forbidden'
    }
];
let TmaRoutingModule = class TmaRoutingModule {
};
TmaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TmaRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/tma.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/tma/tma.module.ts ***!
  \*******************************************/
/*! exports provided: TmaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmaModule", function() { return TmaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tma_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma-routing.module */ "./src/app/modules/tma/tma-routing.module.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/tma/forbidden/forbidden.component.ts");





let TmaModule = class TmaModule {
};
TmaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__["ForbiddenComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tma_routing_module__WEBPACK_IMPORTED_MODULE_3__["TmaRoutingModule"]
        ]
    })
], TmaModule);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin001/vin001.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin001/vin001.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin001 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin001/vin001.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin001/vin001.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwMS92aW4wMDEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin001/vin001.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin001/vin001.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin001Component", function() { return Vin001Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin001Component = class Vin001Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin001',
        template: __webpack_require__(/*! ./vin001.component.html */ "./src/app/modules/tma/vinculation/vin001/vin001.component.html"),
        styles: [__webpack_require__(/*! ./vin001.component.scss */ "./src/app/modules/tma/vinculation/vin001/vin001.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin001Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin002/vin002.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin002/vin002.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin002 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin002/vin002.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin002/vin002.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwMi92aW4wMDIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin002/vin002.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin002/vin002.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin002Component", function() { return Vin002Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin002Component = class Vin002Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin002Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin002',
        template: __webpack_require__(/*! ./vin002.component.html */ "./src/app/modules/tma/vinculation/vin002/vin002.component.html"),
        styles: [__webpack_require__(/*! ./vin002.component.scss */ "./src/app/modules/tma/vinculation/vin002/vin002.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin002Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin003/vin003.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin003/vin003.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin003 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin003/vin003.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin003/vin003.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwMy92aW4wMDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin003/vin003.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin003/vin003.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin003Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin003Component", function() { return Vin003Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin003Component = class Vin003Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin003Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin003',
        template: __webpack_require__(/*! ./vin003.component.html */ "./src/app/modules/tma/vinculation/vin003/vin003.component.html"),
        styles: [__webpack_require__(/*! ./vin003.component.scss */ "./src/app/modules/tma/vinculation/vin003/vin003.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin003Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin004/vin004.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin004/vin004.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin004 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin004/vin004.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin004/vin004.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwNC92aW4wMDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin004/vin004.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin004/vin004.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin004Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin004Component", function() { return Vin004Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin004Component = class Vin004Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin004Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin004',
        template: __webpack_require__(/*! ./vin004.component.html */ "./src/app/modules/tma/vinculation/vin004/vin004.component.html"),
        styles: [__webpack_require__(/*! ./vin004.component.scss */ "./src/app/modules/tma/vinculation/vin004/vin004.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin004Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin005/vin005.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin005/vin005.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin005 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin005/vin005.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin005/vin005.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwNS92aW4wMDUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin005/vin005.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin005/vin005.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin005Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin005Component", function() { return Vin005Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin005Component = class Vin005Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin005Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin005',
        template: __webpack_require__(/*! ./vin005.component.html */ "./src/app/modules/tma/vinculation/vin005/vin005.component.html"),
        styles: [__webpack_require__(/*! ./vin005.component.scss */ "./src/app/modules/tma/vinculation/vin005/vin005.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin005Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin006/vin006.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin006/vin006.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin006 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin006/vin006.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin006/vin006.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwNi92aW4wMDYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin006/vin006.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin006/vin006.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin006Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin006Component", function() { return Vin006Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin006Component = class Vin006Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin006Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin006',
        template: __webpack_require__(/*! ./vin006.component.html */ "./src/app/modules/tma/vinculation/vin006/vin006.component.html"),
        styles: [__webpack_require__(/*! ./vin006.component.scss */ "./src/app/modules/tma/vinculation/vin006/vin006.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin006Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin007/vin007.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin007/vin007.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin007 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin007/vin007.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin007/vin007.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwNy92aW4wMDcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin007/vin007.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin007/vin007.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin007Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin007Component", function() { return Vin007Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin007Component = class Vin007Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin007Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin007',
        template: __webpack_require__(/*! ./vin007.component.html */ "./src/app/modules/tma/vinculation/vin007/vin007.component.html"),
        styles: [__webpack_require__(/*! ./vin007.component.scss */ "./src/app/modules/tma/vinculation/vin007/vin007.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin007Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin008/vin008.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin008/vin008.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin008 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin008/vin008.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin008/vin008.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwOC92aW4wMDguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin008/vin008.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin008/vin008.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin008Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin008Component", function() { return Vin008Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin008Component = class Vin008Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin008Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin008',
        template: __webpack_require__(/*! ./vin008.component.html */ "./src/app/modules/tma/vinculation/vin008/vin008.component.html"),
        styles: [__webpack_require__(/*! ./vin008.component.scss */ "./src/app/modules/tma/vinculation/vin008/vin008.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin008Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin009/vin009.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin009/vin009.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vin009 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin009/vin009.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin009/vin009.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpbmN1bGF0aW9uL3ZpbjAwOS92aW4wMDkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/vinculation/vin009/vin009.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vin009/vin009.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin009Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin009Component", function() { return Vin009Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Vin009Component = class Vin009Component {
    constructor() { }
    ngOnInit() {
    }
};
Vin009Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin009',
        template: __webpack_require__(/*! ./vin009.component.html */ "./src/app/modules/tma/vinculation/vin009/vin009.component.html"),
        styles: [__webpack_require__(/*! ./vin009.component.scss */ "./src/app/modules/tma/vinculation/vin009/vin009.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Vin009Component);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vinculation-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vinculation-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VinculationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculationRoutingModule", function() { return VinculationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vin001/vin001.component */ "./src/app/modules/tma/vinculation/vin001/vin001.component.ts");
/* harmony import */ var _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin002/vin002.component */ "./src/app/modules/tma/vinculation/vin002/vin002.component.ts");
/* harmony import */ var _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vin003/vin003.component */ "./src/app/modules/tma/vinculation/vin003/vin003.component.ts");
/* harmony import */ var _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vin004/vin004.component */ "./src/app/modules/tma/vinculation/vin004/vin004.component.ts");
/* harmony import */ var _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vin005/vin005.component */ "./src/app/modules/tma/vinculation/vin005/vin005.component.ts");
/* harmony import */ var _vin007_vin007_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vin007/vin007.component */ "./src/app/modules/tma/vinculation/vin007/vin007.component.ts");
/* harmony import */ var _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vin006/vin006.component */ "./src/app/modules/tma/vinculation/vin006/vin006.component.ts");
/* harmony import */ var _vin008_vin008_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vin008/vin008.component */ "./src/app/modules/tma/vinculation/vin008/vin008.component.ts");
/* harmony import */ var _vin009_vin009_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vin009/vin009.component */ "./src/app/modules/tma/vinculation/vin009/vin009.component.ts");












const routes = [
    {
        path: 'VIN001',
        component: _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__["Vin001Component"]
    },
    {
        path: 'VIN002',
        component: _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__["Vin002Component"]
    },
    {
        path: 'VIN003',
        component: _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__["Vin003Component"]
    },
    {
        path: 'VIN004',
        component: _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__["Vin004Component"]
    },
    {
        path: 'VIN005',
        component: _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__["Vin005Component"]
    },
    {
        path: 'VIN006',
        component: _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_9__["Vin006Component"]
    },
    {
        path: 'VIN007',
        component: _vin007_vin007_component__WEBPACK_IMPORTED_MODULE_8__["Vin007Component"]
    },
    {
        path: 'VIN008',
        component: _vin008_vin008_component__WEBPACK_IMPORTED_MODULE_10__["Vin008Component"]
    },
    {
        path: 'VIN009',
        component: _vin009_vin009_component__WEBPACK_IMPORTED_MODULE_11__["Vin009Component"]
    }
];
let VinculationRoutingModule = class VinculationRoutingModule {
};
VinculationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VinculationRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/vinculation/vinculation.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/vinculation/vinculation.module.ts ***!
  \***************************************************************/
/*! exports provided: VinculationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculationModule", function() { return VinculationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vinculation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vinculation-routing.module */ "./src/app/modules/tma/vinculation/vinculation-routing.module.ts");
/* harmony import */ var _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin001/vin001.component */ "./src/app/modules/tma/vinculation/vin001/vin001.component.ts");
/* harmony import */ var _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vin002/vin002.component */ "./src/app/modules/tma/vinculation/vin002/vin002.component.ts");
/* harmony import */ var _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vin003/vin003.component */ "./src/app/modules/tma/vinculation/vin003/vin003.component.ts");
/* harmony import */ var _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vin004/vin004.component */ "./src/app/modules/tma/vinculation/vin004/vin004.component.ts");
/* harmony import */ var _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vin005/vin005.component */ "./src/app/modules/tma/vinculation/vin005/vin005.component.ts");
/* harmony import */ var _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vin006/vin006.component */ "./src/app/modules/tma/vinculation/vin006/vin006.component.ts");
/* harmony import */ var _vin007_vin007_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vin007/vin007.component */ "./src/app/modules/tma/vinculation/vin007/vin007.component.ts");
/* harmony import */ var _vin008_vin008_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vin008/vin008.component */ "./src/app/modules/tma/vinculation/vin008/vin008.component.ts");
/* harmony import */ var _vin009_vin009_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vin009/vin009.component */ "./src/app/modules/tma/vinculation/vin009/vin009.component.ts");













let VinculationModule = class VinculationModule {
};
VinculationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_4__["Vin001Component"],
            _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_5__["Vin002Component"],
            _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_6__["Vin003Component"],
            _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_7__["Vin004Component"],
            _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_8__["Vin005Component"],
            _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_9__["Vin006Component"],
            _vin007_vin007_component__WEBPACK_IMPORTED_MODULE_10__["Vin007Component"],
            _vin008_vin008_component__WEBPACK_IMPORTED_MODULE_11__["Vin008Component"],
            _vin009_vin009_component__WEBPACK_IMPORTED_MODULE_12__["Vin009Component"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vinculation_routing_module__WEBPACK_IMPORTED_MODULE_3__["VinculationRoutingModule"]
        ]
    })
], VinculationModule);



/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma002/tma002.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma002/tma002.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma002 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma002/tma002.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma002/tma002.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpcnR1YWwta2V5L3RtYTAwMi90bWEwMDIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma002/tma002.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma002/tma002.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma002Component", function() { return Tma002Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma002Component = class Tma002Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma002Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma002',
        template: __webpack_require__(/*! ./tma002.component.html */ "./src/app/modules/tma/virtual-key/tma002/tma002.component.html"),
        styles: [__webpack_require__(/*! ./tma002.component.scss */ "./src/app/modules/tma/virtual-key/tma002/tma002.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma002Component);



/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma003/tma003.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma003/tma003.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma003 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma003/tma003.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma003/tma003.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpcnR1YWwta2V5L3RtYTAwMy90bWEwMDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma003/tma003.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma003/tma003.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma003Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma003Component", function() { return Tma003Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma003Component = class Tma003Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma003Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma003',
        template: __webpack_require__(/*! ./tma003.component.html */ "./src/app/modules/tma/virtual-key/tma003/tma003.component.html"),
        styles: [__webpack_require__(/*! ./tma003.component.scss */ "./src/app/modules/tma/virtual-key/tma003/tma003.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma003Component);



/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma004/tma004.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma004/tma004.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tma004 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma004/tma004.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma004/tma004.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG1hL3ZpcnR1YWwta2V5L3RtYTAwNC90bWEwMDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/tma/virtual-key/tma004/tma004.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/tma004/tma004.component.ts ***!
  \********************************************************************/
/*! exports provided: Tma004Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tma004Component", function() { return Tma004Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tma004Component = class Tma004Component {
    constructor() { }
    ngOnInit() {
    }
};
Tma004Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tma004',
        template: __webpack_require__(/*! ./tma004.component.html */ "./src/app/modules/tma/virtual-key/tma004/tma004.component.html"),
        styles: [__webpack_require__(/*! ./tma004.component.scss */ "./src/app/modules/tma/virtual-key/tma004/tma004.component.scss"), __webpack_require__(/*! ../../../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tma004Component);



/***/ }),

/***/ "./src/app/modules/tma/virtual-key/virtual-key-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/virtual-key-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VirtualKeyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualKeyRoutingModule", function() { return VirtualKeyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tma002_tma002_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tma002/tma002.component */ "./src/app/modules/tma/virtual-key/tma002/tma002.component.ts");
/* harmony import */ var _tma003_tma003_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma003/tma003.component */ "./src/app/modules/tma/virtual-key/tma003/tma003.component.ts");
/* harmony import */ var _tma004_tma004_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma004/tma004.component */ "./src/app/modules/tma/virtual-key/tma004/tma004.component.ts");






const routes = [
    {
        path: 'TMA002',
        component: _tma002_tma002_component__WEBPACK_IMPORTED_MODULE_3__["Tma002Component"]
    },
    {
        path: 'TMA003',
        component: _tma003_tma003_component__WEBPACK_IMPORTED_MODULE_4__["Tma003Component"]
    },
    {
        path: 'TMA004',
        component: _tma004_tma004_component__WEBPACK_IMPORTED_MODULE_5__["Tma004Component"]
    }
];
let VirtualKeyRoutingModule = class VirtualKeyRoutingModule {
};
VirtualKeyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VirtualKeyRoutingModule);



/***/ }),

/***/ "./src/app/modules/tma/virtual-key/virtual-key.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/tma/virtual-key/virtual-key.module.ts ***!
  \***************************************************************/
/*! exports provided: VirtualKeyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualKeyModule", function() { return VirtualKeyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _virtual_key_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-key-routing.module */ "./src/app/modules/tma/virtual-key/virtual-key-routing.module.ts");
/* harmony import */ var _tma002_tma002_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tma002/tma002.component */ "./src/app/modules/tma/virtual-key/tma002/tma002.component.ts");
/* harmony import */ var _tma003_tma003_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tma003/tma003.component */ "./src/app/modules/tma/virtual-key/tma003/tma003.component.ts");
/* harmony import */ var _tma004_tma004_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tma004/tma004.component */ "./src/app/modules/tma/virtual-key/tma004/tma004.component.ts");







let VirtualKeyModule = class VirtualKeyModule {
};
VirtualKeyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tma002_tma002_component__WEBPACK_IMPORTED_MODULE_4__["Tma002Component"], _tma003_tma003_component__WEBPACK_IMPORTED_MODULE_5__["Tma003Component"], _tma004_tma004_component__WEBPACK_IMPORTED_MODULE_6__["Tma004Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _virtual_key_routing_module__WEBPACK_IMPORTED_MODULE_3__["VirtualKeyRoutingModule"]
        ]
    })
], VirtualKeyModule);



/***/ })

}]);
//# sourceMappingURL=2.js.map