(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tmcc-tmcc-module"],{

/***/ "./src/mbaas/core/service/gtm/gtm.service.ts":
/*!***************************************************!*\
  !*** ./src/mbaas/core/service/gtm/gtm.service.ts ***!
  \***************************************************/
/*! exports provided: GtmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GtmService", function() { return GtmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GtmService = class GtmService {
    constructor() { }
    createGtm(window, eventCategory, eventAction, eventLabel, eventvalue = '', event = 'eventClick') {
        window.dataLayer.push({
            eventCategory,
            eventAction,
            eventLabel,
            eventvalue,
            event
        });
    }
};
GtmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GtmService);



/***/ }),

/***/ "./src/mbaas/tmcc/base/base.component.ts":
/*!***********************************************!*\
  !*** ./src/mbaas/tmcc/base/base.component.ts ***!
  \***********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/mbaas/core/service/workflow/workflow.service */ "./src/mbaas/core/service/workflow/workflow.service.ts");
/* harmony import */ var src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/mbaas/core/service/SendInformation/send-information.service */ "./src/mbaas/core/service/SendInformation/send-information.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/mbaas/mbaas.const */ "./src/mbaas/mbaas.const.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_mbaas_core_service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/mbaas/core/service/validationRules/validation-rules.service */ "./src/mbaas/core/service/validationRules/validation-rules.service.ts");
/* harmony import */ var src_mbaas_core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/mbaas/core/service/catalogo/catalogo.service */ "./src/mbaas/core/service/catalogo/catalogo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_mbaas_core_service_ModalBuilder_modal_builder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/mbaas/core/service/ModalBuilder/modal-builder.service */ "./src/mbaas/core/service/ModalBuilder/modal-builder.service.ts");
/* harmony import */ var src_mbaas_core_service_gtm_gtm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/mbaas/core/service/gtm/gtm.service */ "./src/mbaas/core/service/gtm/gtm.service.ts");














let BaseComponent = class BaseComponent {
    constructor(router, translate, workflow, obser, formBuilder, rules, catalogo, modalBuilder, gtmService) {
        this.router = router;
        this.translate = translate;
        this.workflow = workflow;
        this.obser = obser;
        this.formBuilder = formBuilder;
        this.rules = rules;
        this.catalogo = catalogo;
        this.modalBuilder = modalBuilder;
        this.gtmService = gtmService;
        this.scroll = 0;
        this.disableButton = false;
        this.stepId = '';
        this.formulario = this.formBuilder.group({});
        this.payloadSubscription = this.obser.getData(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["PAYLOAD"]).subscribe(this.responsePayload());
        this.router.data.subscribe(this.responseRouteData());
        this.obser.getData(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["ONCALL"]).subscribe(this.responseFinisOnCall());
        this.aliado = this.obser.lastValue(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["ALIADO"]);
        this.pais = this.obser.lastValue(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["PAIS"]);
        this.modulo = this.obser.lastValue(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["MODULO"]);
        this.canal = this.obser.lastValue(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["CANAL"]);
        this.lenguaje = this.obser.lastValue(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["LENGUAJE"]);
    }
    responsePayload() {
        return (response) => {
            if (response) {
                this.payload = response;
            }
        };
    }
    responseFinisOnCall() {
        return response => {
            this.disableButton = response ? true : false;
        };
    }
    responseRouteData() {
        return (data) => {
            this.stepId = data.stepId;
            // TODO: Descomentar cuando se habilite en catalogo
            // this.translate.use(`${this.stepId}?pais=${this.pais}&lenguaje=${this.lenguaje}`);
            this.translate.use(`${this.stepId}`);
        };
    }
    onBack(payload) {
        this.disableButton = true;
        this.workflow.workflow(this.stepId, payload());
    }
    onCall(payload) {
        this.disableButton = true;
        this.workflow.workflow(this.stepId, payload());
    }
    ngOnDestroy() {
        this.obser.unSubscribe(this.payloadSubscription);
    }
    setRules(rules, validators = {}) {
        this.formulario = this.formBuilder.group(rules, validators);
    }
    params(keys) {
        const params = {};
        keys.map(item => {
            const key = typeof item === 'object' ? Object.keys(item).toString() : item;
            params[key] = key === src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["PROPERTY"] ? item.property : this.obser.lastValue(item);
            return item;
        });
        if (!params.limit) {
            params.limit = Infinity;
        }
        return params;
    }
    /* Retorna un arreglo de observables de los catalogos que se envian. */
    catalogs(catalogs) {
        const observables = [];
        catalogs.map(item => {
            const obser = this.catalogo.data((item.kind), this.params(item.params), item.filter || null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([])));
            observables.push(obser);
        });
        return observables;
    }
    /* Mapea los catalogos y agrega las propiedades 'value' y 'label'. */
    mapperCatalog(data) {
        return data ? data.map((p) => Object.assign({
            mbaasCode: p.mbaasCode || p.mbassCode,
            value: p.value || p.codigo || p.valor || p.code,
            label: p.label || p.nombre || p.descripcion || p.texto
        }, p))
            : [];
    }
    /* Mapea el catalogo de ciudades y agrega en la propiedad 'value' el codigo concatenado. */
    mappperCatalogCity(data) {
        return data ? data.map((p) => Object.assign({
            mbaasCode: p.mbaasCode || p.mbassCode,
            value: `${src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["CODIGO_PAIS"]}:${p.codDepto}:${p.codigo}`,
            label: p.label || p.nombre || p.descripcion || p.texto
        }, p))
            : [];
    }
    /* Verifica si existe la propiedad enviada en cualquier nivel del objeto. */
    hasProperty(object, propertyName) {
        if (Object.keys(object).length === 0) {
            return false;
        }
        if (object.hasOwnProperty(propertyName)) {
            return true;
        }
        return Object.keys(object)
            .map(prop => {
            if (typeof object[prop] === 'object') {
                return this.hasProperty(object[prop], propertyName);
            }
            else {
                return (prop === propertyName);
            }
        })
            .reduce((previousValue, currentValue, index, array) => {
            return previousValue || currentValue;
        });
    }
    /* Revisa los campos 'DISABLED' del formulario y les setea un valor vacio. */
    formData(formulario = this.formulario) {
        const form = formulario.controls;
        Object.keys(form).forEach(key => {
            if (Array.isArray(form[key].controls)) {
                form[key].controls.forEach(formGroup => this.formData(formGroup));
            }
            else if (form[key].hasOwnProperty('controls')) {
                this.formData(form[key]);
            }
            if (form[key].status === 'DISABLED') {
                switch (typeof form[key].value) {
                    case 'string':
                        form[key].setValue('');
                        break;
                    case 'number':
                        form[key].setValue(0);
                        break;
                    case 'boolean':
                        form[key].setValue(false);
                        break;
                    default:
                        form[key].setValue('');
                        break;
                }
            }
        });
        return formulario.getRawValue();
    }
    sortArray(data, key) {
        return data.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
    }
};
BaseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"] },
    { type: src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__["SendInformationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_mbaas_core_service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_8__["ValidationRulesService"] },
    { type: src_mbaas_core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_9__["CatalogoService"] },
    { type: src_mbaas_core_service_ModalBuilder_modal_builder_service__WEBPACK_IMPORTED_MODULE_12__["ModalBuilderService"] },
    { type: src_mbaas_core_service_gtm_gtm_service__WEBPACK_IMPORTED_MODULE_13__["GtmService"] }
];
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ''
    })
], BaseComponent);



/***/ }),

/***/ "./src/mbaas/tmcc/tmcc-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/mbaas/tmcc/tmcc-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TmccRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmccRoutingModule", function() { return TmccRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mbaas.route.const */ "./src/mbaas/mbaas.route.const.ts");




const routes = [
    {
        path: 'beneficios',
        loadChildren: () => __webpack_require__.e(/*! import() | beneficios-beneficios-module */ "beneficios-beneficios-module").then(__webpack_require__.bind(null, /*! ./beneficios/beneficios.module */ "./src/mbaas/tmcc/beneficios/beneficios.module.ts")).then(mod => mod.BeneficiosModule),
        canLoad: [
        // AccessProcessGuard
        ],
        data: {
            child: [
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].BEN001.STEP
            ]
        }
    },
    {
        path: 'evaluador',
        loadChildren: () => Promise.all(/*! import() | evaluador-evaluador-module */[__webpack_require__.e("default~compra-cartera-compra-cartera-module~evaluador-evaluador-module"), __webpack_require__.e("evaluador-evaluador-module")]).then(__webpack_require__.bind(null, /*! ./evaluador/evaluador.module */ "./src/mbaas/tmcc/evaluador/evaluador.module.ts")).then(mod => mod.EvaluadorModule),
        canLoad: [
        // AccessProcessGuard
        ],
        data: {
            child: [
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].EVA001.STEP,
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].EVA002.STEP
            ]
        }
    },
    {
        path: 'compra-cartera',
        loadChildren: () => Promise.all(/*! import() | compra-cartera-compra-cartera-module */[__webpack_require__.e("default~compra-cartera-compra-cartera-module~evaluador-evaluador-module"), __webpack_require__.e("compra-cartera-compra-cartera-module")]).then(__webpack_require__.bind(null, /*! ./compra-cartera/compra-cartera.module */ "./src/mbaas/tmcc/compra-cartera/compra-cartera.module.ts")).then(mod => mod.CompraCarteraModule),
        canLoad: [
        // AccessProcessGuard
        ],
        data: {
            child: [
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC001.STEP,
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC002.STEP,
                _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC003.STEP
            ]
        }
    }
];
let TmccRoutingModule = class TmccRoutingModule {
};
TmccRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TmccRoutingModule);



/***/ }),

/***/ "./src/mbaas/tmcc/tmcc.module.ts":
/*!***************************************!*\
  !*** ./src/mbaas/tmcc/tmcc.module.ts ***!
  \***************************************/
/*! exports provided: TmccModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmccModule", function() { return TmccModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tmcc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tmcc-routing.module */ "./src/mbaas/tmcc/tmcc-routing.module.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base/base.component */ "./src/mbaas/tmcc/base/base.component.ts");





let TmccModule = class TmccModule {
};
TmccModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tmcc_routing_module__WEBPACK_IMPORTED_MODULE_3__["TmccRoutingModule"],
        ],
        providers: []
    })
], TmccModule);



/***/ })

}]);
//# sourceMappingURL=tmcc-tmcc-module-es2015.js.map