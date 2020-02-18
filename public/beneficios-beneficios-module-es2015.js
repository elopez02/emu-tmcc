(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["beneficios-beneficios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/benefit-list/benefit-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/benefit-list/benefit-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf='benefitList'>\r\n    <div class=\"icon\">\r\n      <img [src]=\"'/assets/img/icons/' + benefitList.icono + '.svg'\" alt=\"\" />\r\n    </div>\r\n    <span class=\"label\">\r\n      {{ benefitList.descripcion }}\r\n    </span>\r\n  </div>     -->\r\n\r\n<li class=\"benefitList__item\" *ngIf=\"benefitList\">\r\n  <div class=\"icon\">\r\n    <img [src]=\"'assets/img/icons/' + benefitList.icono + '.svg'\" alt=\"\" />\r\n  </div>\r\n  <span class=\"label\">\r\n    {{ benefitList.descripcion }}\r\n  </span>\r\n</li>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-back/button-back.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-back/button-back.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"javascript:void(0)\" class=\"backButton\">\r\n    <img src=\"assets/img/layout/icon-dv-btnback.svg\" [alt]=\"label\">\r\n    <span>{{ label }}</span>\r\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-continue/button-continue.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-continue/button-continue.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [ngClass]=\"buttonClass\" (click)=\"click()\" [disabled]='disableIf'>{{ label }}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/tmcc/beneficios/ben001/ben001.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/tmcc/beneficios/ben001/ben001.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<!-- Main container -->\r\n<section class=\"container\">\r\n  <!-- Button back -->\r\n  <mbaas-button-back\r\n    [label]=\"'backButton' | translate\"\r\n    class=\"backButton\"\r\n    (click)=\"onBack(getDataToBack())\"\r\n  ></mbaas-button-back>\r\n  <!-- End -->\r\n  <!-- Content Box -->\r\n  <div class=\"contentBox contentBox--naked\">\r\n    <!--------- Solo zona privada --------->\r\n    <h2 class=\"text__align--left\">\r\n      {{ 'pageTitle' | translate }}\r\n    </h2>\r\n    <!-- Benefist list -->\r\n    <ul class=\"benefitList\">\r\n      <li class=\"benefitList__item\" *ngFor=\"let item of beneficios\">\r\n        <mbaas-benefit-list [benefitList]=\"item\"></mbaas-benefit-list>\r\n      </li>\r\n    </ul>\r\n    <!-- End -->\r\n  </div>\r\n  <!-- End -->\r\n  <!-- Button container -->\r\n  <div class=\"buttonContainer\">\r\n    <!-- <button type=\"button\" class=\"button button--secondary button--mobileHidden\">Regresar</button> -->\r\n    <mbaas-button-continue\r\n      [label]=\"'principalButton' | translate\"\r\n      [disableIf]=\"disableButton\"\r\n      (call)=\"onCall(getDataToContinue())\"\r\n    ></mbaas-button-continue>\r\n    <!-- <button type=\"button\" class=\"button button--primary\">Continuar</button> -->\r\n  </div>\r\n  <!-- End\t -->\r\n</section>\r\n<!-- End -->\r\n");

/***/ }),

/***/ "./src/mbaas/core/components/benefit-list/benefit-list-module.ts":
/*!***********************************************************************!*\
  !*** ./src/mbaas/core/components/benefit-list/benefit-list-module.ts ***!
  \***********************************************************************/
/*! exports provided: BenefitListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitListModule", function() { return BenefitListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _benefit_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benefit-list.component */ "./src/mbaas/core/components/benefit-list/benefit-list.component.ts");




let BenefitListModule = class BenefitListModule {
};
BenefitListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _benefit_list_component__WEBPACK_IMPORTED_MODULE_3__["BenefitListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _benefit_list_component__WEBPACK_IMPORTED_MODULE_3__["BenefitListComponent"]
        ]
    })
], BenefitListModule);



/***/ }),

/***/ "./src/mbaas/core/components/benefit-list/benefit-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/mbaas/core/components/benefit-list/benefit-list.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWJhYXMvY29yZS9jb21wb25lbnRzL2JlbmVmaXQtbGlzdC9iZW5lZml0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/mbaas/core/components/benefit-list/benefit-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/mbaas/core/components/benefit-list/benefit-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: BenefitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitListComponent", function() { return BenefitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BenefitListComponent = class BenefitListComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenefitListComponent.prototype, "benefitList", void 0);
BenefitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mbaas-benefit-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benefit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/benefit-list/benefit-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./benefit-list.component.scss */ "./src/mbaas/core/components/benefit-list/benefit-list.component.scss")).default]
    })
], BenefitListComponent);



/***/ }),

/***/ "./src/mbaas/core/components/button-back/button-back.component.scss":
/*!**************************************************************************!*\
  !*** ./src/mbaas/core/components/button-back/button-back.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWJhYXMvY29yZS9jb21wb25lbnRzL2J1dHRvbi1iYWNrL2J1dHRvbi1iYWNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/mbaas/core/components/button-back/button-back.component.ts":
/*!************************************************************************!*\
  !*** ./src/mbaas/core/components/button-back/button-back.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBackComponent", function() { return ButtonBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonBackComponent = class ButtonBackComponent {
    constructor() {
        // tslint:disable-next-line: no-inferrable-types
        this.label = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonBackComponent.prototype, "label", void 0);
ButtonBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mbaas-button-back',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button-back.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-back/button-back.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button-back.component.scss */ "./src/mbaas/core/components/button-back/button-back.component.scss")).default]
    })
], ButtonBackComponent);



/***/ }),

/***/ "./src/mbaas/core/components/button-back/button-back.module.ts":
/*!*********************************************************************!*\
  !*** ./src/mbaas/core/components/button-back/button-back.module.ts ***!
  \*********************************************************************/
/*! exports provided: ButtonBackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBackModule", function() { return ButtonBackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _button_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-back.component */ "./src/mbaas/core/components/button-back/button-back.component.ts");




let ButtonBackModule = class ButtonBackModule {
};
ButtonBackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _button_back_component__WEBPACK_IMPORTED_MODULE_3__["ButtonBackComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _button_back_component__WEBPACK_IMPORTED_MODULE_3__["ButtonBackComponent"]
        ]
    })
], ButtonBackModule);



/***/ }),

/***/ "./src/mbaas/core/components/button-continue/button-continue.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/mbaas/core/components/button-continue/button-continue.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled], html input[disabled] {\n  cursor: not-allowed !important;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYmFhcy9jb3JlL2NvbXBvbmVudHMvYnV0dG9uLWNvbnRpbnVlL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBUTUEgRmFzZSBJSVxcTUJhYVNcXHRhcmpldGFtb3ZpbGNvbXByYWNhcnRlcmEtYXBwL3NyY1xcbWJhYXNcXGNvcmVcXGNvbXBvbmVudHNcXGJ1dHRvbi1jb250aW51ZVxcYnV0dG9uLWNvbnRpbnVlLmNvbXBvbmVudC5zY3NzIiwic3JjL21iYWFzL2NvcmUvY29tcG9uZW50cy9idXR0b24tY29udGludWUvYnV0dG9uLWNvbnRpbnVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL21iYWFzL2NvcmUvY29tcG9uZW50cy9idXR0b24tY29udGludWUvYnV0dG9uLWNvbnRpbnVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXSwgaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59IiwiYnV0dG9uW2Rpc2FibGVkXSwgaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/mbaas/core/components/button-continue/button-continue.component.ts":
/*!********************************************************************************!*\
  !*** ./src/mbaas/core/components/button-continue/button-continue.component.ts ***!
  \********************************************************************************/
/*! exports provided: ButtonContinueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContinueComponent", function() { return ButtonContinueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonContinueComponent = class ButtonContinueComponent {
    constructor() {
        // tslint:disable-next-line: no-inferrable-types
        this.disableIf = false;
        // tslint:disable-next-line: no-inferrable-types
        this.label = '';
        // tslint:disable-next-line: no-inferrable-types
        this.buttonClass = 'button button--primary';
        this.call = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    click() {
        this.call.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonContinueComponent.prototype, "disableIf", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonContinueComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonContinueComponent.prototype, "buttonClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ButtonContinueComponent.prototype, "call", void 0);
ButtonContinueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mbaas-button-continue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button-continue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/core/components/button-continue/button-continue.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button-continue.component.scss */ "./src/mbaas/core/components/button-continue/button-continue.component.scss")).default]
    })
], ButtonContinueComponent);



/***/ }),

/***/ "./src/mbaas/core/components/button-continue/button-continue.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/mbaas/core/components/button-continue/button-continue.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonContinueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContinueModule", function() { return ButtonContinueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _button_continue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-continue.component */ "./src/mbaas/core/components/button-continue/button-continue.component.ts");




let ButtonContinueModule = class ButtonContinueModule {
};
ButtonContinueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _button_continue_component__WEBPACK_IMPORTED_MODULE_3__["ButtonContinueComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _button_continue_component__WEBPACK_IMPORTED_MODULE_3__["ButtonContinueComponent"]
        ]
    })
], ButtonContinueModule);



/***/ }),

/***/ "./src/mbaas/mbaas.kind.const.ts":
/*!***************************************!*\
  !*** ./src/mbaas/mbaas.kind.const.ts ***!
  \***************************************/
/*! exports provided: ZONAS_GEOGRAFICAS, PARMS, LOG_JURIDICO, CAT_BEN001, MSG_BENEFICIOS_001, MSG_BENEFICIOS_002, MSG_BENEFICIOS_003, MSG_BENEFICIOS_004, MSG_BENEFICIOS_005, CAT_ACTIVIDAD_LABORAL, CAT_ACTIVIDAD_ECONOMICA, DATA_AUTORIZACIONES, CAT_NOMENCLATURA, MSG_EVALUADOR_001, CAT_TIPO_CONTRATO, CAT_BINES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZONAS_GEOGRAFICAS", function() { return ZONAS_GEOGRAFICAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARMS", function() { return PARMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_JURIDICO", function() { return LOG_JURIDICO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_BEN001", function() { return CAT_BEN001; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BENEFICIOS_001", function() { return MSG_BENEFICIOS_001; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BENEFICIOS_002", function() { return MSG_BENEFICIOS_002; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BENEFICIOS_003", function() { return MSG_BENEFICIOS_003; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BENEFICIOS_004", function() { return MSG_BENEFICIOS_004; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BENEFICIOS_005", function() { return MSG_BENEFICIOS_005; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_ACTIVIDAD_LABORAL", function() { return CAT_ACTIVIDAD_LABORAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_ACTIVIDAD_ECONOMICA", function() { return CAT_ACTIVIDAD_ECONOMICA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_AUTORIZACIONES", function() { return DATA_AUTORIZACIONES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_NOMENCLATURA", function() { return CAT_NOMENCLATURA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_EVALUADOR_001", function() { return MSG_EVALUADOR_001; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_TIPO_CONTRATO", function() { return CAT_TIPO_CONTRATO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_BINES", function() { return CAT_BINES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ZONAS_GEOGRAFICAS = {
    NIVEL1: 'catDepartamentos',
    NIVEL2: 'catTMCC_CIUDADES',
    NIVEL3: 'catMunicipios',
};
const PARMS = 'catTMCC_PARMS';
const LOG_JURIDICO = 'catTMCC_LOG_JURIDICO';
// CATALOGO BENEFICIOS
const CAT_BEN001 = 'catTMCC_DATA_BEN001';
const MSG_BENEFICIOS_001 = 'catTMCC_MSG_BENEFICIOS_001';
const MSG_BENEFICIOS_002 = 'catTMCC_MSG_BENEFICIOS_002';
const MSG_BENEFICIOS_003 = 'catTMCC_MSG_BENEFICIOS_003';
const MSG_BENEFICIOS_004 = 'catTMCC_MSG_BENEFICIOS_004';
const MSG_BENEFICIOS_005 = 'catTMCC_MSG_BENEFICIOS_005';
// CATALOGOS EVALUADOR
const CAT_ACTIVIDAD_LABORAL = 'catTMCC_ACTIVIDAD_LABORAL';
const CAT_ACTIVIDAD_ECONOMICA = 'catTMCC_ACTIVIDAD_ECONOMICA';
const DATA_AUTORIZACIONES = 'catTMCC_DATA_AUTORIZACIONES';
const CAT_NOMENCLATURA = 'catTMCC_NOMENCLATURA';
const MSG_EVALUADOR_001 = 'catTMCC_MSG_EVALUADOR_001';
const CAT_TIPO_CONTRATO = 'catTMCC_TIPO_CONTRATO';
const CAT_BINES = 'catTMCC_BINES';


/***/ }),

/***/ "./src/mbaas/tmcc/beneficios/ben001/ben001.component.scss":
/*!****************************************************************!*\
  !*** ./src/mbaas/tmcc/beneficios/ben001/ben001.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWJhYXMvdG1jYy9iZW5lZmljaW9zL2JlbjAwMS9iZW4wMDEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/mbaas/tmcc/beneficios/ben001/ben001.component.ts":
/*!**************************************************************!*\
  !*** ./src/mbaas/tmcc/beneficios/ben001/ben001.component.ts ***!
  \**************************************************************/
/*! exports provided: Ben001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ben001Component", function() { return Ben001Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.component */ "./src/mbaas/tmcc/base/base.component.ts");
/* harmony import */ var src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/mbaas/mbaas.const */ "./src/mbaas/mbaas.const.ts");
/* harmony import */ var src_mbaas_mbaas_kind_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/mbaas/mbaas.kind.const */ "./src/mbaas/mbaas.kind.const.ts");





let Ben001Component = class Ben001Component extends _base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    ngOnInit() {
        const P = this.payload;
        this.obser.sendData(P.pais, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["PAIS"]);
        this.obser.sendData(P.modulo, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["MODULO"]);
        this.obser.sendData(P.canal, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["CANAL"]);
        this.obser.sendData(P.lenguaje, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]);
        this.getBeneficios();
    }
    /* GTM */
    ngAfterViewInit() {
        this.gtmService.createGtm(window, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["CANALES"][this.payload.canal] + '-Tarjeta Móvil', src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["GTM"].PAGE_VIEW, '1. Beneficios y caracteristicas');
    }
    getDataToBack() {
        return () => ({
            atras: src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["BOTONES_FLUJO"].ATRAS
        });
    }
    getDataToContinue() {
        return () => ({
            atras: src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["BOTONES_FLUJO"].CONTINUAR
        });
    }
    getBeneficios() {
        this.catalogo.data(src_mbaas_mbaas_kind_const__WEBPACK_IMPORTED_MODULE_4__["CAT_BEN001"], this.params([src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"], src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["MODULO"]])).subscribe(response => {
            this.beneficios = response ? response : [];
        });
    }
};
Ben001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mbaas-ben001',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ben001.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/tmcc/beneficios/ben001/ben001.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ben001.component.scss */ "./src/mbaas/tmcc/beneficios/ben001/ben001.component.scss")).default]
    })
], Ben001Component);



/***/ }),

/***/ "./src/mbaas/tmcc/beneficios/beneficios-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/mbaas/tmcc/beneficios/beneficios-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BeneficiosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiosRoutingModule", function() { return BeneficiosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ben001_ben001_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ben001/ben001.component */ "./src/mbaas/tmcc/beneficios/ben001/ben001.component.ts");
/* harmony import */ var src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/mbaas/mbaas.route.const */ "./src/mbaas/mbaas.route.const.ts");





const routes = [
    {
        path: src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_4__["MBAAS_STEPS"].BEN001.ROUTE,
        component: _ben001_ben001_component__WEBPACK_IMPORTED_MODULE_3__["Ben001Component"],
        canActivate: [
        // AccessStepGuard
        ],
        canDeactivate: [
        // AccessStepGuard
        ],
        data: {
            stepId: src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_4__["MBAAS_STEPS"].BEN001.STEP
        }
    }
];
let BeneficiosRoutingModule = class BeneficiosRoutingModule {
};
BeneficiosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BeneficiosRoutingModule);



/***/ }),

/***/ "./src/mbaas/tmcc/beneficios/beneficios.module.ts":
/*!********************************************************!*\
  !*** ./src/mbaas/tmcc/beneficios/beneficios.module.ts ***!
  \********************************************************/
/*! exports provided: BeneficiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiosModule", function() { return BeneficiosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _beneficios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beneficios-routing.module */ "./src/mbaas/tmcc/beneficios/beneficios-routing.module.ts");
/* harmony import */ var _ben001_ben001_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ben001/ben001.component */ "./src/mbaas/tmcc/beneficios/ben001/ben001.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_mbaas_core_components_button_back_button_back_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/mbaas/core/components/button-back/button-back.module */ "./src/mbaas/core/components/button-back/button-back.module.ts");
/* harmony import */ var _core_components_button_continue_button_continue_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/button-continue/button-continue.module */ "./src/mbaas/core/components/button-continue/button-continue.module.ts");
/* harmony import */ var src_mbaas_core_components_benefit_list_benefit_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/mbaas/core/components/benefit-list/benefit-list-module */ "./src/mbaas/core/components/benefit-list/benefit-list-module.ts");










let BeneficiosModule = class BeneficiosModule {
};
BeneficiosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ben001_ben001_component__WEBPACK_IMPORTED_MODULE_4__["Ben001Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _beneficios_routing_module__WEBPACK_IMPORTED_MODULE_3__["BeneficiosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            src_mbaas_core_components_button_back_button_back_module__WEBPACK_IMPORTED_MODULE_7__["ButtonBackModule"],
            _core_components_button_continue_button_continue_module__WEBPACK_IMPORTED_MODULE_8__["ButtonContinueModule"],
            src_mbaas_core_components_benefit_list_benefit_list_module__WEBPACK_IMPORTED_MODULE_9__["BenefitListModule"]
        ]
    })
], BeneficiosModule);



/***/ })

}]);
//# sourceMappingURL=beneficios-beneficios-module-es2015.js.map