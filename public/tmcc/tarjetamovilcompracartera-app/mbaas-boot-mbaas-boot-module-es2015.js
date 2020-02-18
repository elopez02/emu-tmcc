(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mbaas-boot-mbaas-boot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n<!-- Content box -->\r\n<div class=\"contentBox contentBox__alignment--centerCenter\">\r\n  <!-- Clock loader -->\r\n  <div class=\"clockLoader\">\r\n      <span class=\"clockLoader__center\"></span>\r\n      <span class=\"clockLoader__numeral\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--horizontal\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--lateralRight\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--lateralLeft\"></span>\r\n  </div>\r\n  <!-- End -->\r\n  <!-- Welcome message -->\r\n  <h1 class=\"text__color--primary text__align--center loaderTitle\">\r\n      {{ 'appBoot.pageTitle'  | translate}}\r\n  </h1>\r\n  <h1 class=\"text__align--center loaderSubTitle\">\r\n      {{ 'appBoot.pageMessage'  | translate}}\r\n  </h1>\r\n  <!-- End -->\r\n</div>\r\n<!-- End -->\r\n\r\n");

/***/ }),

/***/ "./src/mbaas/mbaas-boot/mbaas-boot-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/mbaas/mbaas-boot/mbaas-boot-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MbaasBootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbaasBootRoutingModule", function() { return MbaasBootRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mbaas_boot_mbaas_boot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mbaas-boot/mbaas-boot.component */ "./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.ts");




const routes = [
    {
        path: ':otp',
        component: _mbaas_boot_mbaas_boot_component__WEBPACK_IMPORTED_MODULE_3__["MbaasBootComponent"]
    }
];
let MbaasBootRoutingModule = class MbaasBootRoutingModule {
};
MbaasBootRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MbaasBootRoutingModule);



/***/ }),

/***/ "./src/mbaas/mbaas-boot/mbaas-boot.module.ts":
/*!***************************************************!*\
  !*** ./src/mbaas/mbaas-boot/mbaas-boot.module.ts ***!
  \***************************************************/
/*! exports provided: MbaasBootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbaasBootModule", function() { return MbaasBootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _mbaas_boot_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mbaas-boot-routing.module */ "./src/mbaas/mbaas-boot/mbaas-boot-routing.module.ts");
/* harmony import */ var _mbaas_boot_mbaas_boot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mbaas-boot/mbaas-boot.component */ "./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.ts");
/* harmony import */ var _core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/service/workflow/workflow.service */ "./src/mbaas/core/service/workflow/workflow.service.ts");







let MbaasBootModule = class MbaasBootModule {
};
MbaasBootModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _mbaas_boot_mbaas_boot_component__WEBPACK_IMPORTED_MODULE_5__["MbaasBootComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _mbaas_boot_routing_module__WEBPACK_IMPORTED_MODULE_4__["MbaasBootRoutingModule"]
        ],
        providers: [
            _core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]
        ]
    })
], MbaasBootModule);



/***/ }),

/***/ "./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.scss":
/*!*******************************************************************!*\
  !*** ./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loaderTitle {\n  font-size: 1.8em;\n  color: #ed1c27;\n  margin-bottom: em(70);\n}\n\n.loaderSubTitle {\n  font-size: 0.9em;\n  margin-top: em(50);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYmFhcy9tYmFhcy1ib290L21iYWFzLWJvb3QvQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIFRNQSBGYXNlIElJXFxNQmFhU1xcdGFyamV0YW1vdmlsY29tcHJhY2FydGVyYS1hcHAvc3JjXFxtYmFhc1xcbWJhYXMtYm9vdFxcbWJhYXMtYm9vdFxcbWJhYXMtYm9vdC5jb21wb25lbnQuc2NzcyIsInNyYy9tYmFhcy9tYmFhcy1ib290L21iYWFzLWJvb3QvbWJhYXMtYm9vdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL21iYWFzL21iYWFzLWJvb3QvbWJhYXMtYm9vdC9tYmFhcy1ib290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlclRpdGxlIHtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGNvbG9yOiAjZWQxYzI3O1xyXG4gIG1hcmdpbi1ib3R0b206IGVtKDcwKTtcclxufVxyXG5cclxuLmxvYWRlclN1YlRpdGxlIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIG1hcmdpbi10b3A6IGVtKDUwKTtcclxufSIsIi5sb2FkZXJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGNvbG9yOiAjZWQxYzI3O1xuICBtYXJnaW4tYm90dG9tOiBlbSg3MCk7XG59XG5cbi5sb2FkZXJTdWJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi10b3A6IGVtKDUwKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.ts":
/*!*****************************************************************!*\
  !*** ./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.ts ***!
  \*****************************************************************/
/*! exports provided: MbaasBootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbaasBootComponent", function() { return MbaasBootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_mbaas_core_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/mbaas/core/service/authentication/auth.service */ "./src/mbaas/core/service/authentication/auth.service.ts");
/* harmony import */ var src_mbaas_core_service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/mbaas/core/service/encryption/cripto.service */ "./src/mbaas/core/service/encryption/cripto.service.ts");
/* harmony import */ var src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/mbaas/core/service/SendInformation/send-information.service */ "./src/mbaas/core/service/SendInformation/send-information.service.ts");
/* harmony import */ var src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/mbaas/mbaas.const */ "./src/mbaas/mbaas.const.ts");
/* harmony import */ var src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/mbaas/core/service/workflow/workflow.service */ "./src/mbaas/core/service/workflow/workflow.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/mbaas/mbaas.route.const */ "./src/mbaas/mbaas.route.const.ts");
/* harmony import */ var src_mbaas_mbaas_kind_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/mbaas/mbaas.kind.const */ "./src/mbaas/mbaas.kind.const.ts");
/* harmony import */ var _core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/service/catalogo/catalogo.service */ "./src/mbaas/core/service/catalogo/catalogo.service.ts");












// {
//   "iss": "Online JWT Builder",
//   "iat": 1565906011,
//   "exp": 1597442011,
//   "aud": "www.example.com",
//   "sub": "jrocket@example.com",
//   "cliendtID": "0123456789",
//   "partner": "ML",
//   "product": "CAM",
//   "lenguaje": "es-CR",
//   "canal": "web",
//   "pais": "CR",
//   "modulo": "que???"
// }
let MbaasBootComponent = class MbaasBootComponent {
    constructor(router, route, auth, cripto, workflow, obser, translate, catalogService) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.cripto = cripto;
        this.workflow = workflow;
        this.obser = obser;
        this.translate = translate;
        this.catalogService = catalogService;
        this.translate.setDefaultLang(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["TRANSLATE"].LENGUAJE);
        this.otp = this.route.snapshot.paramMap.get('otp');
    }
    ngOnInit() {
        this.auth.deleteAllTokenData();
        this.auth.authenticate(this.otp).subscribe(this.successAuthenticate(), this.errorAuthenticate());
    }
    successAuthenticate() {
        return resauth => {
            if (resauth.state === src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["STATE_ERROR"]) {
                this.router.navigate(['/forbidden']);
                return;
            }
            const payload = {};
            const tokenDecoded = this.auth.decodeToken(resauth.access_token);
            console.log('tokenDecoded', tokenDecoded);
            this.cripto.getKeysRemote()
                .then(this.successGetKeyRemote(tokenDecoded, resauth, payload))
                .catch(this.errorAuthenticate());
        };
    }
    errorAuthenticate() {
        return err => {
            console.error('Authentication: ', err);
            this.router.navigate(['/forbidden']);
        };
    }
    successGetKeyRemote(tokenDecoded, resauth, payload) {
        return mbassKey => {
            this.cripto.keyCreator()
                .then(this.successKeyCreator(tokenDecoded, resauth, payload))
                .catch(this.errorAuthenticate());
        };
    }
    successKeyCreator(tokenDecoded, resauth, payload) {
        return (respFront) => {
            const productId = tokenDecoded.product;
            this.auth.saveTokenData(resauth, tokenDecoded.sub, this.saveLocalStorage(productId));
            payload.llaveEncriptacion = JSON.stringify(respFront);
            this.catalogService.data(src_mbaas_mbaas_kind_const__WEBPACK_IMPORTED_MODULE_10__["PARMS"]).subscribe(result => {
                payload.parms = result[0];
                this.obser.sendData(true, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["GUARD_PRODUCTO"]);
                this.obser.sendData(this.callBackRetoma(), src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["ACTION_FROM_RETOMA"]);
                this.workflow.workflow(src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_9__["MBAAS_STEPS"].APPBOOT, payload);
            });
        };
    }
    saveLocalStorage(productId) {
        const save = {
            Product_template: true
        }[productId];
        return (save === undefined) ? true : save;
    }
    callBackRetoma() {
        console.log('CLOSE: ', close);
        return (close, data) => {
            console.log('data: ', data);
            this.obser.sendData(data.pais, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["PAIS"]);
            this.obser.sendData(data.modulo, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["MODULO"]);
            this.obser.sendData(data.canal, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["CANAL"]);
            this.obser.sendData(data.lenguaje, src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["LENGUAJE"]);
            const opcionRetoma = close() === 'Aceptar' ? 1 : 2;
            this.workflow.workflow(src_mbaas_mbaas_route_const__WEBPACK_IMPORTED_MODULE_9__["MBAAS_STEPS"].APPBOOT, { opcionRetoma });
            close();
        };
    }
};
MbaasBootComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_mbaas_core_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_mbaas_core_service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_4__["CriptoService"] },
    { type: src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowService"] },
    { type: src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_5__["SendInformationService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_11__["CatalogoService"] }
];
MbaasBootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mbaas-mbaas-boot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mbaas-boot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.html")).default,
        providers: [_core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_11__["CatalogoService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mbaas-boot.component.scss */ "./src/mbaas/mbaas-boot/mbaas-boot/mbaas-boot.component.scss")).default]
    })
], MbaasBootComponent);



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


/***/ })

}]);
//# sourceMappingURL=mbaas-boot-mbaas-boot-module-es2015.js.map