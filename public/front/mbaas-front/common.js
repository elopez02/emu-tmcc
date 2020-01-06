(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\" [(ngModel)]=\"value\" (ngModelChange)=\"onCheck($event)\" />\r\n<div class=\"checkmark\"></div>\r\n<span [innerHtml]=\"label\"></span>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.sass":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL2lucHV0LWNoZWNrYm94L2lucHV0LWNoZWNrYm94LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InputCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckboxComponent", function() { return InputCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var InputCheckboxComponent_1;


let InputCheckboxComponent = InputCheckboxComponent_1 = class InputCheckboxComponent {
    constructor() {
        this.check = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.label = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }
    writeValue(value) {
        this._value = value;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    onCheck(value) {
        this.check.emit(value);
        this._value = value;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputCheckboxComponent.prototype, "check", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], InputCheckboxComponent.prototype, "_value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputCheckboxComponent.prototype, "label", void 0);
InputCheckboxComponent = InputCheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-checkbox',
        template: __webpack_require__(/*! ./input-checkbox.component.html */ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputCheckboxComponent_1),
                multi: true
            }
        ],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./input-checkbox.component.sass */ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.sass")]
    })
], InputCheckboxComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-checkbox/input-checkbox.module.ts ***!
  \***************************************************************************************/
/*! exports provided: InputCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCheckboxModule", function() { return InputCheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-checkbox.component */ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.component.ts");





let InputCheckboxModule = class InputCheckboxModule {
};
InputCheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_input_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["InputCheckboxComponent"]]
    })
], InputCheckboxModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/input-switch/input-switch.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-switch/input-switch.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"\" class=\"formGroup__label formGroup__label--large\">\r\n  {{ label }}\r\n</label>\r\n<div class=\"contCheckboxSiNo contCheckboxSiNo--small\">\r\n  <label>\r\n    <input type=\"checkbox\" class=\"cambiar tamano\" [(ngModel)]=\"value\" (ngModelChange)=\"onSwitch($event)\" />\r\n    <div class=\"switch\">\r\n      <span></span>\r\n    </div>\r\n  </label>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-switch/input-switch.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-switch/input-switch.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host.text__weight--bold > label {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vY29tbW9uL2NvbXBvbmVudHMvaW5wdXQtc3dpdGNoL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFxjb21tb25cXGNvbXBvbmVudHNcXGlucHV0LXN3aXRjaFxcaW5wdXQtc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhbS9jb21tb24vY29tcG9uZW50cy9pbnB1dC1zd2l0Y2gvaW5wdXQtc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgJi50ZXh0X193ZWlnaHQtLWJvbGQge1xyXG4gICAgICAgID4gbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-switch/input-switch.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-switch/input-switch.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InputSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchComponent", function() { return InputSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var InputSwitchComponent_1;


let InputSwitchComponent = InputSwitchComponent_1 = class InputSwitchComponent {
    constructor() {
        this.switch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.label = '';
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
        this.onTouched();
    }
    writeValue(value) {
        this._value = value;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    onSwitch(value) {
        this.switch.emit(value);
        this._value = value;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputSwitchComponent.prototype, "switch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], InputSwitchComponent.prototype, "_value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputSwitchComponent.prototype, "label", void 0);
InputSwitchComponent = InputSwitchComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-switch',
        template: __webpack_require__(/*! ./input-switch.component.html */ "./src/app/modules/cam/common/components/input-switch/input-switch.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputSwitchComponent_1),
                multi: true
            }
        ],
        styles: [__webpack_require__(/*! ./input-switch.component.scss */ "./src/app/modules/cam/common/components/input-switch/input-switch.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputSwitchComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/input-switch/input-switch.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-switch/input-switch.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InputSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSwitchModule", function() { return InputSwitchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _input_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-switch.component */ "./src/app/modules/cam/common/components/input-switch/input-switch.component.ts");





let InputSwitchModule = class InputSwitchModule {
};
InputSwitchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_input_switch_component__WEBPACK_IMPORTED_MODULE_4__["InputSwitchComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_input_switch_component__WEBPACK_IMPORTED_MODULE_4__["InputSwitchComponent"]]
    })
], InputSwitchModule);



/***/ })

}]);
//# sourceMappingURL=common.js.map