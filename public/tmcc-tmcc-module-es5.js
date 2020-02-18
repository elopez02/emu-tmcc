function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tmcc-tmcc-module"], {
  /***/
  "./src/mbaas/core/service/gtm/gtm.service.ts":
  /*!***************************************************!*\
    !*** ./src/mbaas/core/service/gtm/gtm.service.ts ***!
    \***************************************************/

  /*! exports provided: GtmService */

  /***/
  function srcMbaasCoreServiceGtmGtmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GtmService", function () {
      return GtmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GtmService =
    /*#__PURE__*/
    function () {
      function GtmService() {
        _classCallCheck(this, GtmService);
      }

      _createClass(GtmService, [{
        key: "createGtm",
        value: function createGtm(window, eventCategory, eventAction, eventLabel) {
          var eventvalue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var event = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'eventClick';
          window.dataLayer.push({
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
            eventvalue: eventvalue,
            event: event
          });
        }
      }]);

      return GtmService;
    }();

    GtmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GtmService);
    /***/
  },

  /***/
  "./src/mbaas/tmcc/base/base.component.ts":
  /*!***********************************************!*\
    !*** ./src/mbaas/tmcc/base/base.component.ts ***!
    \***********************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcMbaasTmccBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/mbaas/core/service/workflow/workflow.service */
    "./src/mbaas/core/service/workflow/workflow.service.ts");
    /* harmony import */


    var src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/mbaas/core/service/SendInformation/send-information.service */
    "./src/mbaas/core/service/SendInformation/send-information.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/mbaas/mbaas.const */
    "./src/mbaas/mbaas.const.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_mbaas_core_service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/mbaas/core/service/validationRules/validation-rules.service */
    "./src/mbaas/core/service/validationRules/validation-rules.service.ts");
    /* harmony import */


    var src_mbaas_core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/mbaas/core/service/catalogo/catalogo.service */
    "./src/mbaas/core/service/catalogo/catalogo.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_mbaas_core_service_ModalBuilder_modal_builder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/mbaas/core/service/ModalBuilder/modal-builder.service */
    "./src/mbaas/core/service/ModalBuilder/modal-builder.service.ts");
    /* harmony import */


    var src_mbaas_core_service_gtm_gtm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/mbaas/core/service/gtm/gtm.service */
    "./src/mbaas/core/service/gtm/gtm.service.ts");

    var BaseComponent =
    /*#__PURE__*/
    function () {
      function BaseComponent(router, translate, workflow, obser, formBuilder, rules, catalogo, modalBuilder, gtmService) {
        _classCallCheck(this, BaseComponent);

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

      _createClass(BaseComponent, [{
        key: "responsePayload",
        value: function responsePayload() {
          var _this = this;

          return function (response) {
            if (response) {
              _this.payload = response;
            }
          };
        }
      }, {
        key: "responseFinisOnCall",
        value: function responseFinisOnCall() {
          var _this2 = this;

          return function (response) {
            _this2.disableButton = response ? true : false;
          };
        }
      }, {
        key: "responseRouteData",
        value: function responseRouteData() {
          var _this3 = this;

          return function (data) {
            _this3.stepId = data.stepId; // TODO: Descomentar cuando se habilite en catalogo
            // this.translate.use(`${this.stepId}?pais=${this.pais}&lenguaje=${this.lenguaje}`);

            _this3.translate.use("".concat(_this3.stepId));
          };
        }
      }, {
        key: "onBack",
        value: function onBack(payload) {
          this.disableButton = true;
          this.workflow.workflow(this.stepId, payload());
        }
      }, {
        key: "onCall",
        value: function onCall(payload) {
          this.disableButton = true;
          this.workflow.workflow(this.stepId, payload());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.obser.unSubscribe(this.payloadSubscription);
        }
      }, {
        key: "setRules",
        value: function setRules(rules) {
          var validators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.formulario = this.formBuilder.group(rules, validators);
        }
      }, {
        key: "params",
        value: function params(keys) {
          var _this4 = this;

          var params = {};
          keys.map(function (item) {
            var key = typeof item === 'object' ? Object.keys(item).toString() : item;
            params[key] = key === src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["PROPERTY"] ? item.property : _this4.obser.lastValue(item);
            return item;
          });

          if (!params.limit) {
            params.limit = Infinity;
          }

          return params;
        }
        /* Retorna un arreglo de observables de los catalogos que se envian. */

      }, {
        key: "catalogs",
        value: function catalogs(_catalogs) {
          var _this5 = this;

          var observables = [];

          _catalogs.map(function (item) {
            var obser = _this5.catalogo.data(item.kind, _this5.params(item.params), item.filter || null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
            }));

            observables.push(obser);
          });

          return observables;
        }
        /* Mapea los catalogos y agrega las propiedades 'value' y 'label'. */

      }, {
        key: "mapperCatalog",
        value: function mapperCatalog(data) {
          return data ? data.map(function (p) {
            return Object.assign({
              mbaasCode: p.mbaasCode || p.mbassCode,
              value: p.value || p.codigo || p.valor || p.code,
              label: p.label || p.nombre || p.descripcion || p.texto
            }, p);
          }) : [];
        }
        /* Mapea el catalogo de ciudades y agrega en la propiedad 'value' el codigo concatenado. */

      }, {
        key: "mappperCatalogCity",
        value: function mappperCatalogCity(data) {
          return data ? data.map(function (p) {
            return Object.assign({
              mbaasCode: p.mbaasCode || p.mbassCode,
              value: "".concat(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_6__["CODIGO_PAIS"], ":").concat(p.codDepto, ":").concat(p.codigo),
              label: p.label || p.nombre || p.descripcion || p.texto
            }, p);
          }) : [];
        }
        /* Verifica si existe la propiedad enviada en cualquier nivel del objeto. */

      }, {
        key: "hasProperty",
        value: function hasProperty(object, propertyName) {
          var _this6 = this;

          if (Object.keys(object).length === 0) {
            return false;
          }

          if (object.hasOwnProperty(propertyName)) {
            return true;
          }

          return Object.keys(object).map(function (prop) {
            if (typeof object[prop] === 'object') {
              return _this6.hasProperty(object[prop], propertyName);
            } else {
              return prop === propertyName;
            }
          }).reduce(function (previousValue, currentValue, index, array) {
            return previousValue || currentValue;
          });
        }
        /* Revisa los campos 'DISABLED' del formulario y les setea un valor vacio. */

      }, {
        key: "formData",
        value: function formData() {
          var _this7 = this;

          var formulario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.formulario;
          var form = formulario.controls;
          Object.keys(form).forEach(function (key) {
            if (Array.isArray(form[key].controls)) {
              form[key].controls.forEach(function (formGroup) {
                return _this7.formData(formGroup);
              });
            } else if (form[key].hasOwnProperty('controls')) {
              _this7.formData(form[key]);
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
      }, {
        key: "sortArray",
        value: function sortArray(data, key) {
          return data.sort(function (a, b) {
            return a[key] > b[key] ? 1 : -1;
          });
        }
      }]);

      return BaseComponent;
    }();

    BaseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: src_mbaas_core_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"]
      }, {
        type: src_mbaas_core_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__["SendInformationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: src_mbaas_core_service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_8__["ValidationRulesService"]
      }, {
        type: src_mbaas_core_service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_9__["CatalogoService"]
      }, {
        type: src_mbaas_core_service_ModalBuilder_modal_builder_service__WEBPACK_IMPORTED_MODULE_12__["ModalBuilderService"]
      }, {
        type: src_mbaas_core_service_gtm_gtm_service__WEBPACK_IMPORTED_MODULE_13__["GtmService"]
      }];
    };

    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: ''
    })], BaseComponent);
    /***/
  },

  /***/
  "./src/mbaas/tmcc/tmcc-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/mbaas/tmcc/tmcc-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TmccRoutingModule */

  /***/
  function srcMbaasTmccTmccRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmccRoutingModule", function () {
      return TmccRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mbaas.route.const */
    "./src/mbaas/mbaas.route.const.ts");

    var routes = [{
      path: 'beneficios',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | beneficios-beneficios-module */
        "beneficios-beneficios-module").then(__webpack_require__.bind(null,
        /*! ./beneficios/beneficios.module */
        "./src/mbaas/tmcc/beneficios/beneficios.module.ts")).then(function (mod) {
          return mod.BeneficiosModule;
        });
      },
      canLoad: [// AccessProcessGuard
      ],
      data: {
        child: [_mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].BEN001.STEP]
      }
    }, {
      path: 'evaluador',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | evaluador-evaluador-module */
        [__webpack_require__.e("default~compra-cartera-compra-cartera-module~evaluador-evaluador-module"), __webpack_require__.e("evaluador-evaluador-module")]).then(__webpack_require__.bind(null,
        /*! ./evaluador/evaluador.module */
        "./src/mbaas/tmcc/evaluador/evaluador.module.ts")).then(function (mod) {
          return mod.EvaluadorModule;
        });
      },
      canLoad: [// AccessProcessGuard
      ],
      data: {
        child: [_mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].EVA001.STEP, _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].EVA002.STEP]
      }
    }, {
      path: 'compra-cartera',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | compra-cartera-compra-cartera-module */
        [__webpack_require__.e("default~compra-cartera-compra-cartera-module~evaluador-evaluador-module"), __webpack_require__.e("compra-cartera-compra-cartera-module")]).then(__webpack_require__.bind(null,
        /*! ./compra-cartera/compra-cartera.module */
        "./src/mbaas/tmcc/compra-cartera/compra-cartera.module.ts")).then(function (mod) {
          return mod.CompraCarteraModule;
        });
      },
      canLoad: [// AccessProcessGuard
      ],
      data: {
        child: [_mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC001.STEP, _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC002.STEP, _mbaas_route_const__WEBPACK_IMPORTED_MODULE_3__["MBAAS_STEPS"].CCC003.STEP]
      }
    }];

    var TmccRoutingModule = function TmccRoutingModule() {
      _classCallCheck(this, TmccRoutingModule);
    };

    TmccRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TmccRoutingModule);
    /***/
  },

  /***/
  "./src/mbaas/tmcc/tmcc.module.ts":
  /*!***************************************!*\
    !*** ./src/mbaas/tmcc/tmcc.module.ts ***!
    \***************************************/

  /*! exports provided: TmccModule */

  /***/
  function srcMbaasTmccTmccModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmccModule", function () {
      return TmccModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tmcc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tmcc-routing.module */
    "./src/mbaas/tmcc/tmcc-routing.module.ts");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/mbaas/tmcc/base/base.component.ts");

    var TmccModule = function TmccModule() {
      _classCallCheck(this, TmccModule);
    };

    TmccModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tmcc_routing_module__WEBPACK_IMPORTED_MODULE_3__["TmccRoutingModule"]],
      providers: []
    })], TmccModule);
    /***/
  }
}]);
//# sourceMappingURL=tmcc-tmcc-module-es5.js.map