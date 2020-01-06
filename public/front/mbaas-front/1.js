(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/modules/cam/common/components/split-input/split-input.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/split-input/split-input.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Documento de Identidad -->\r\n<form\r\n  *ngIf=\"isTypeDocumento\"\r\n  class=\"formGroup__flexRow\"\r\n  [formGroup]=\"formDocumento\"\r\n>\r\n  <input\r\n    type=\"text\"\r\n    (input)=\"onChange('part1', $event)\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n    placeholder=\"\"\r\n    name=\"\"\r\n    formControlName=\"part1\"\r\n  />\r\n  <span class=\"formGroup__flexRow__separator\"> - </span>\r\n  <input\r\n    type=\"text\"\r\n    (input)=\"onChange('part2', $event)\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n    placeholder=\"\"\r\n    name=\"\"\r\n    formControlName=\"part2\"\r\n  />\r\n  <span class=\"formGroup__flexRow__separator\"> - </span>\r\n  <input\r\n    type=\"text\"\r\n    (input)=\"onChange('part3', $event)\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child formGroup__flexRow__child--idLast\"\r\n    placeholder=\"\"\r\n    name=\"\"\r\n    formControlName=\"part3\"\r\n  />\r\n</form>\r\n\r\n<!-- Dirección de domicilio -->\r\n<form\r\n  *ngIf=\"isTypeDomicilio\"\r\n  class=\"formGroup__flexRow\"\r\n  [formGroup]=\"formDomicilio\"\r\n>\r\n  <select\r\n    formControlName=\"provincia\"\r\n    (change)=\"onChange('part1', $event)\"\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Provincia </option>\r\n    <option\r\n      *ngFor=\"let provincia of domicilio.provincias\"\r\n      [ngValue]=\"provincia\"\r\n      >{{ provincia.valor }}</option\r\n    >\r\n  </select>\r\n  <select\r\n    formControlName=\"distrito\"\r\n    (change)=\"onChange('part2', $event)\"\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Distrito </option>\r\n    <option *ngFor=\"let distrito of domicilio.distritos\" [ngValue]=\"distrito\">{{\r\n      distrito.valor\r\n    }}</option>\r\n  </select>\r\n  <select\r\n    formControlName=\"corregimiento\"\r\n    (change)=\"onChange('part3', $event)\"\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Corregimiento </option>\r\n    <option\r\n      *ngFor=\"let corregimiento of domicilio.corregimientos\"\r\n      [ngValue]=\"corregimiento\"\r\n      >{{ corregimiento.valor }}</option\r\n    >\r\n  </select>\r\n</form>\r\n\r\n<!-- Fecha -->\r\n<form *ngIf=\"isTypeFecha\" class=\"formGroup__flexRow\" [formGroup]=\"formFecha\">\r\n  <input\r\n    (change)=\"onChange('part1', $event)\"\r\n    *ngIf=\"isTypeFecha\"\r\n    type=\"text\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n    placeholder=\"DD\"\r\n    maxlength=\"2\"\r\n    formControlName=\"dia\"\r\n  />\r\n  <input\r\n    (change)=\"onChange('part2', $event)\"\r\n    *ngIf=\"isTypeFecha\"\r\n    type=\"text\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n    placeholder=\"MM\"\r\n    maxlength=\"2\"\r\n    formControlName=\"mes\"\r\n  />\r\n  <input\r\n    (change)=\"onChange('part3', $event)\"\r\n    *ngIf=\"isTypeFecha\"\r\n    type=\"number\"\r\n    class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n    placeholder=\"AAAA\"\r\n    maxlength=\"4\"\r\n    formControlName=\"anio\"\r\n  />\r\n</form>\r\n\r\n<!-- Dirección de domicilio Panamá -->\r\n<form *ngIf=\"isTypeDomicilioPA\" class=\"formGroup__flexRow\" [formGroup]=\"formDomicilioPA\">\r\n  <select\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n    formControlName=\"barrio\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Colonia </option>\r\n    <option\r\n      *ngFor=\"let barrio of domicilioPA.barrios\"\r\n      [ngValue]=\"barrio\"\r\n      >{{ barrio.valor }}</option\r\n    >\r\n  </select>\r\n  <select\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n    formControlName=\"colonia\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Barrio </option>\r\n    <option\r\n      *ngFor=\"let colonia of domicilioPA.colonias\"\r\n      [ngValue]=\"colonia\"\r\n      >{{ colonia.valor }}</option\r\n    >\r\n  </select>\r\n  <select\r\n    name=\"\"\r\n    id=\"\"\r\n    class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n    name=\"\"\r\n    formControlName=\"municipio\"\r\n  >\r\n    <option disabled selected hidden value=\"0\"> Municipio </option>\r\n    <option\r\n      *ngFor=\"let municipio of domicilioPA.municipios\"\r\n      [ngValue]=\"municipio\"\r\n      >{{ municipio.valor }}</option\r\n    >\r\n  </select>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/split-input/split-input.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/split-input/split-input.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formGroup__flexRow {\n  margin-top: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vY29tbW9uL2NvbXBvbmVudHMvc3BsaXQtaW5wdXQvQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXBwXFxtb2R1bGVzXFxjYW1cXGNvbW1vblxcY29tcG9uZW50c1xcc3BsaXQtaW5wdXRcXHNwbGl0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhbS9jb21tb24vY29tcG9uZW50cy9zcGxpdC1pbnB1dC9zcGxpdC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtR3JvdXBfX2ZsZXhSb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/split-input/split-input.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/split-input/split-input.component.ts ***!
  \************************************************************************************/
/*! exports provided: SplitInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitInputComponent", function() { return SplitInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SplitInputComponent = class SplitInputComponent {
    constructor(fb) {
        this.fb = fb;
        this.idOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createForm();
    }
    onChange(i, event) {
        const valChanged = this.getValueByType;
        this.idOnChange.emit(valChanged);
        return valChanged;
    }
    get isTypeDocumento() {
        return this.type === 'documento';
    }
    get isTypeDomicilio() {
        return this.type === 'domicilio';
    }
    get isTypeFecha() {
        return this.type === 'fecha';
    }
    get isTypeDomicilioPA() {
        return this.type === 'domicilioPa';
    }
    get getValueByType() {
        if (this.isTypeDocumento) {
            return this.getValDocumento;
        }
        else if (this.isTypeDomicilio) {
            return this.getValDomicilio;
        }
        else if (this.isTypeFecha) {
            return this.getValFecha;
        }
        else if (this.isTypeDomicilioPA) {
            return this.getValDomicilioPA;
        }
    }
    get getValDocumento() {
        return {
            isValid: this.formDocumento.valid,
            value: this.formDocumento.value
        };
    }
    get getValDomicilio() {
        return {
            isValid: this.formDomicilio.valid,
            value: this.formDomicilio.value
        };
    }
    get getValDomicilioPA() {
        return {
            isValid: this.formDomicilioPA.valid,
            value: this.formDomicilioPA.value
        };
    }
    get getValFecha() {
        return {
            isValid: this.formFecha.valid,
            value: this.formFecha.value
        };
    }
    createForm() {
        if (this.isTypeFecha) {
            if (!this.fecha) {
                this.fecha = { dia: '', mes: '', anio: '' };
            }
            this.formFecha = this.fb.group({
                dia: [this.fecha.dia, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                mes: [this.fecha.mes, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                anio: [this.fecha.anio, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
        }
        else if (this.isTypeDomicilio) {
            if (!this.domicilio) {
                this.domicilio = { corregimientos: [], provincias: [], distritos: [] };
            }
            this.formDomicilio = this.fb.group({
                provincia: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                distrito: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                corregimiento: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else if (this.isTypeDocumento) {
            if (!this.documento) {
                this.documento = { parte1: '', parte2: '', parte3: '' };
            }
            this.formDocumento = this.fb.group({
                part1: [this.documento.parte1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                part2: [this.documento.parte2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                part3: [this.documento.parte3, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else if (this.isTypeDomicilioPA) {
            if (!this.domicilioPA) {
                this.domicilioPA = { barrios: [], colonias: [], municipios: [] };
            }
            this.formDomicilioPA = this.fb.group({
                colonia: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                barrio: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                municipio: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SplitInputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SplitInputComponent.prototype, "fecha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SplitInputComponent.prototype, "domicilio", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SplitInputComponent.prototype, "domicilioPA", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SplitInputComponent.prototype, "documento", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SplitInputComponent.prototype, "idOnChange", void 0);
SplitInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-split-input',
        template: __webpack_require__(/*! ./split-input.component.html */ "./src/app/modules/cam/common/components/split-input/split-input.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        // providers: [
        //   {
        //     provide: NG_VALUE_ACCESSOR,
        //     useExisting: forwardRef(() => SplitInputComponent),
        //     multi: true
        //   }
        // ]
        ,
        styles: [__webpack_require__(/*! ./split-input.component.scss */ "./src/app/modules/cam/common/components/split-input/split-input.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SplitInputComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/split-input/split-input.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/split-input/split-input.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SplitInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitInputModule", function() { return SplitInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _split_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./split-input.component */ "./src/app/modules/cam/common/components/split-input/split-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SplitInputModule = class SplitInputModule {
};
SplitInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _split_input_component__WEBPACK_IMPORTED_MODULE_3__["SplitInputComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        exports: [
            _split_input_component__WEBPACK_IMPORTED_MODULE_3__["SplitInputComponent"]
        ]
    })
], SplitInputModule);



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=1.js.map