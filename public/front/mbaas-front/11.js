(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/app/modules/common/base/base-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/common/base/base-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_initial_initial_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/initial/initial.module */ "./src/app/modules/initial/initial.module.ts");
/* harmony import */ var _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forbidden/forbidden.module */ "./src/app/modules/forbidden/forbidden.module.ts");
/* harmony import */ var src_app_modules_post_messages_post_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/post-messages/post-messages.component */ "./src/app/modules/post-messages/post-messages.component.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CONST */ "./src/app/modules/common/CONST.ts");







const routes = [
    {
        path: 'solicitudInicial',
        loadChildren: () => src_app_modules_initial_initial_module__WEBPACK_IMPORTED_MODULE_3__["InitialModule"]
    },
    {
        path: 'cam',
        loadChildren: () => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../cam/cam.module */ "./src/app/modules/cam/cam.module.ts")).then(mod => mod.CamModule),
        data: {
            producto: _CONST__WEBPACK_IMPORTED_MODULE_6__["MODULES_CAM"]
        }
    },
    {
        path: 'tma',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../../tma/tma.module */ "./src/app/modules/tma/tma.module.ts")).then(mod => mod.TmaModule),
        data: {
            producto: 'TMA'
        }
    },
    {
        path: 'forbidden',
        loadChildren: () => _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_4__["ForbiddenModule"]
    },
    {
        path: 'postMessages',
        component: src_app_modules_post_messages_post_messages_component__WEBPACK_IMPORTED_MODULE_5__["PostMessagesComponent"]
    },
    {
        path: '**',
        redirectTo: 'forbidden'
    }
];
let BaseRoutingModule = class BaseRoutingModule {
};
BaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaseRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/base/base.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/common/base/base.module.ts ***!
  \****************************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/modules/common/base/base-routing.module.ts");
/* harmony import */ var _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication/auth.service */ "./src/app/modules/common/service/authentication/auth.service.ts");
/* harmony import */ var _service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/encryption/cripto.service */ "./src/app/modules/common/service/encryption/cripto.service.ts");
/* harmony import */ var _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");
/* harmony import */ var src_app_modules_post_messages_post_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/post-messages/post-messages.component */ "./src/app/modules/post-messages/post-messages.component.ts");








let BaseModule = class BaseModule {
};
BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_modules_post_messages_post_messages_component__WEBPACK_IMPORTED_MODULE_7__["PostMessagesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _base_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaseRoutingModule"]
        ],
        exports: [],
        providers: [
            _service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_5__["CriptoService"],
            _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]
        ]
    })
], BaseModule);



/***/ }),

/***/ "./src/app/modules/forbidden/forbidden-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/forbidden/forbidden-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ForbiddenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenRoutingModule", function() { return ForbiddenRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/modules/forbidden/forbidden.component.ts");




const routes = [
    {
        path: '',
        component: _forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let ForbiddenRoutingModule = class ForbiddenRoutingModule {
};
ForbiddenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ForbiddenRoutingModule);



/***/ }),

/***/ "./src/app/modules/forbidden/forbidden.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/forbidden/forbidden.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n<!-- Content box -->\r\n<div class=\"contentBox contentBox__alignment--centerCenter\">\r\n    <!-- Error icon -->\r\n    <span class=\"contentBox__icon icon-forbiden text__color--primary text__align--center\"></span>\r\n    <!-- End -->\r\n    <!-- Welcome message -->\r\n    <h2 class=\"text__color--primary text__align--center\">\r\n        Acceso denegado\r\n    </h2>\r\n    <h4 class=\"text__align--center\"> \r\n    \tLo sentimos, esta página no se encuentra disponible.\r\n    </h4>\r\n    <!-- End -->\r\n</div>\r\n<!-- End -->\r\n"

/***/ }),

/***/ "./src/app/modules/forbidden/forbidden.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/forbidden/forbidden.component.ts ***!
  \**********************************************************/
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
        localStorage.clear();
        sessionStorage.clear();
    }
};
ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forbidden',
        template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/modules/forbidden/forbidden.component.html"),
        styles: [__webpack_require__(/*! ../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForbiddenComponent);



/***/ }),

/***/ "./src/app/modules/forbidden/forbidden.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/forbidden/forbidden.module.ts ***!
  \*******************************************************/
/*! exports provided: ForbiddenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function() { return ForbiddenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forbidden_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbidden-routing.module */ "./src/app/modules/forbidden/forbidden-routing.module.ts");
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/modules/forbidden/forbidden.component.ts");





let ForbiddenModule = class ForbiddenModule {
};
ForbiddenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _forbidden_component__WEBPACK_IMPORTED_MODULE_4__["ForbiddenComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _forbidden_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForbiddenRoutingModule"]
        ]
    })
], ForbiddenModule);



/***/ }),

/***/ "./src/app/modules/initial/initial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/initial/initial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InitialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialRoutingModule", function() { return InitialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _initial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial.component */ "./src/app/modules/initial/initial.component.ts");




const routes = [
    {
        path: ':otp',
        component: _initial_component__WEBPACK_IMPORTED_MODULE_3__["InitialComponent"]
    }
];
let InitialRoutingModule = class InitialRoutingModule {
};
InitialRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InitialRoutingModule);



/***/ }),

/***/ "./src/app/modules/initial/initial.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/initial/initial.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n<!-- Content box -->\r\n<div class=\"contentBox contentBox__alignment--centerCenter\">\r\n  <!-- Clock loader -->\r\n  <div class=\"clockLoader\">\r\n      <span class=\"clockLoader__center\"></span>\r\n      <span class=\"clockLoader__numeral\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--horizontal\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--lateralRight\"></span>\r\n      <span class=\"clockLoader__numeral clockLoader__numeral--lateralLeft\"></span>\r\n  </div>\r\n  <!-- End -->\r\n  <!-- Welcome message -->\r\n  <h2 class=\"text__color--primary text__align--center\">\r\n      Conectando\r\n  </h2>\r\n  <h3 class=\"text__align--center\">\r\n      Por favor espera\r\n      <br>\r\n      <br>\r\n  </h3>\r\n  <!-- End -->\r\n</div>\r\n<!-- End -->\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/initial/initial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/initial/initial.component.ts ***!
  \******************************************************/
/*! exports provided: InitialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialComponent", function() { return InitialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/service/authentication/auth.service */ "./src/app/modules/common/service/authentication/auth.service.ts");
/* harmony import */ var _common_service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/service/encryption/cripto.service */ "./src/app/modules/common/service/encryption/cripto.service.ts");
/* harmony import */ var _common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");
/* harmony import */ var _common_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _common_CONST__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/CONST */ "./src/app/modules/common/CONST.ts");









let InitialComponent = class InitialComponent {
    constructor(router, route, auth, cripto, workflow, guard, obser, translate) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.cripto = cripto;
        this.workflow = workflow;
        this.guard = guard;
        this.obser = obser;
        this.translate = translate;
        this.otp = this.route.snapshot.paramMap.get('otp');
        this.translate.setDefaultLang('es-CR');
    }
    ngOnInit() {
        this.auth.deleteAllTokenData();
        this.auth.authenticate(this.otp).subscribe(resauth => {
            if (resauth.state === _common_CONST__WEBPACK_IMPORTED_MODULE_8__["STATE_ERROR"]) {
                this.router.navigate(['/forbidden']);
                return;
            }
            else {
                const tokenDecoded = this.auth.decodeToken(resauth.access_token);
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
                this.cripto.getKeysRemote().then(mbassKey => {
                    this.cripto.keyCreator().then((respFront) => {
                        console.log(tokenDecoded);
                        const productId = tokenDecoded.product;
                        this.auth.saveTokenData(resauth, tokenDecoded.sub, this.saveLocalStorage(productId));
                        this.translate.use(tokenDecoded.lenguaje);
                        console.error('Hay comentarios que se deben revisar en este componente, no borrar hasta solucionar.');
                        this.guard.sendData(productId, _common_CONST__WEBPACK_IMPORTED_MODULE_8__["PRODUCTO"]);
                        this.workflow.workflow(_common_CONST__WEBPACK_IMPORTED_MODULE_8__["INITIAL"], {
                            llaveEncriptacion: JSON.stringify(respFront),
                        });
                    });
                });
            }
        });
    }
    saveLocalStorage(productId) {
        switch (productId) {
            case 'CAM_CO':
                return true;
            case 'TMA_CO':
                return true;
            case 'BIO_CO':
                return false;
            default:
                return true;
        }
    }
};
InitialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-initial',
        template: __webpack_require__(/*! ./initial.component.html */ "./src/app/modules/initial/initial.component.html"),
        styles: [__webpack_require__(/*! ../../../assets/tma/scss/style.scss */ "./src/assets/tma/scss/style.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _common_service_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _common_service_encryption_cripto_service__WEBPACK_IMPORTED_MODULE_4__["CriptoService"],
        _common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__["WorkflowService"],
        _common_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_6__["SendInformationService"],
        _common_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_6__["SendInformationService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], InitialComponent);



/***/ }),

/***/ "./src/app/modules/initial/initial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/initial/initial.module.ts ***!
  \***************************************************/
/*! exports provided: InitialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialModule", function() { return InitialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _initial_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-routing.module */ "./src/app/modules/initial/initial-routing.module.ts");
/* harmony import */ var _initial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial.component */ "./src/app/modules/initial/initial.component.ts");
/* harmony import */ var _common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");






let InitialModule = class InitialModule {
};
InitialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_initial_component__WEBPACK_IMPORTED_MODULE_4__["InitialComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _initial_routing_module__WEBPACK_IMPORTED_MODULE_3__["InitialRoutingModule"]
        ],
        providers: [
            _common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__["WorkflowService"]
        ]
    })
], InitialModule);



/***/ }),

/***/ "./src/app/modules/post-messages/post-messages.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/post-messages/post-messages.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr />\r\n<div id=\"botones\">\r\n  <button (click)=\"appReady()\">appReady</button>\r\n  <button (click)=\"setTitle()\">setTitle</button>\r\n  <button (click)=\"captureFrontDocument()\">Front</button>\r\n  <button (click)=\"captureBackdocument()\">Back</button>\r\n  <button (click)=\"captureFace()\">Face</button>\r\n  <button (click)=\"appFinish()\">Finish</button>\r\n</div>\r\n<div id=\"response\">\r\n  <hr />\r\n  <h2>{{title}}</h2>\r\n  <hr />\r\n  <div *ngFor=\"let item of response\">\r\n    <span>{{item.key}}</span> ::: <span>{{item.value}}</span>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/post-messages/post-messages.component.sass":
/*!********************************************************************!*\
  !*** ./src/app/modules/post-messages/post-messages.component.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC1tZXNzYWdlcy9wb3N0LW1lc3NhZ2VzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/post-messages/post-messages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/post-messages/post-messages.component.ts ***!
  \******************************************************************/
/*! exports provided: PostMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMessagesComponent", function() { return PostMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostMessagesComponent = class PostMessagesComponent {
    constructor() {
        this.response = [];
        window.addEventListener('message', event => {
            console.log(event.data);
            this.title = `Respuesta al postMessage:::::${event.data.event}`;
            if (event.data.response) {
                Object.keys(event.data.response).map((key) => {
                    this.response.push({
                        key,
                        value: event.data.response[key]
                    });
                });
            }
        });
    }
    ngOnInit() {
    }
    appReady() {
        window.parent.postMessage({
            event: 'appReady',
        }, '*');
    }
    setTitle() {
        const title = prompt('Ingrese el titulo');
        if (title) {
            window.parent.postMessage({
                event: 'setTitle',
                title
            }, '*');
        }
    }
    captureFrontDocument() {
        window.parent.postMessage({
            event: 'captureFrontDocument'
        }, '*');
    }
    captureBackdocument() {
        window.parent.postMessage({
            event: 'captureBackDocument'
        }, '*');
    }
    captureFace() {
        window.parent.postMessage({
            event: 'captureFace'
        }, '*');
    }
    appFinish() {
        window.parent.postMessage({
            event: 'appFinish'
        }, '*');
    }
};
PostMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-messages',
        template: __webpack_require__(/*! ./post-messages.component.html */ "./src/app/modules/post-messages/post-messages.component.html"),
        styles: [__webpack_require__(/*! ./post-messages.component.sass */ "./src/app/modules/post-messages/post-messages.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PostMessagesComponent);



/***/ })

}]);
//# sourceMappingURL=11.js.map