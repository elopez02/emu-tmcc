function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forbidden-forbidden-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/forbidden/forbidden/forbidden.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/mbaas/forbidden/forbidden/forbidden.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMbaasForbiddenForbiddenForbiddenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n<!-- Content box -->\r\n<div class=\"contentBox contentBox__alignment--centerCenter\">\r\n  <!-- Error icon -->\r\n  <span class=\"contentBox__icon icon-forbiden text__color--primary text__align--center\"></span>\r\n  <!-- End -->\r\n  <!-- Welcome message -->\r\n  <h2 class=\"text__color--primary text__align--center\">\r\n      {{ 'forbidden.pageTitle' | translate }}\r\n  </h2>\r\n  <h4 class=\"text__align--center\">\r\n      {{ 'forbidden.pageMessage' | translate }}\r\n  </h4>\r\n  <!-- End -->\r\n</div>\r\n<!-- End -->\r\n";
    /***/
  },

  /***/
  "./src/mbaas/forbidden/forbidden-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/mbaas/forbidden/forbidden-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ForbiddenRoutingModule */

  /***/
  function srcMbaasForbiddenForbiddenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenRoutingModule", function () {
      return ForbiddenRoutingModule;
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


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/mbaas/forbidden/forbidden/forbidden.component.ts");

    var routes = [{
      path: '**',
      pathMatch: 'full',
      component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"]
    }];

    var ForbiddenRoutingModule = function ForbiddenRoutingModule() {
      _classCallCheck(this, ForbiddenRoutingModule);
    };

    ForbiddenRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForbiddenRoutingModule);
    /***/
  },

  /***/
  "./src/mbaas/forbidden/forbidden.module.ts":
  /*!*************************************************!*\
    !*** ./src/mbaas/forbidden/forbidden.module.ts ***!
    \*************************************************/

  /*! exports provided: ForbiddenModule */

  /***/
  function srcMbaasForbiddenForbiddenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function () {
      return ForbiddenModule;
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


    var _forbidden_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forbidden-routing.module */
    "./src/mbaas/forbidden/forbidden-routing.module.ts");
    /* harmony import */


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/mbaas/forbidden/forbidden/forbidden.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ForbiddenModule = function ForbiddenModule() {
      _classCallCheck(this, ForbiddenModule);
    };

    ForbiddenModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__["ForbiddenComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _forbidden_routing_module__WEBPACK_IMPORTED_MODULE_3__["ForbiddenRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
    })], ForbiddenModule);
    /***/
  },

  /***/
  "./src/mbaas/forbidden/forbidden/forbidden.component.scss":
  /*!****************************************************************!*\
    !*** ./src/mbaas/forbidden/forbidden/forbidden.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcMbaasForbiddenForbiddenForbiddenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWJhYXMvZm9yYmlkZGVuL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/mbaas/forbidden/forbidden/forbidden.component.ts":
  /*!**************************************************************!*\
    !*** ./src/mbaas/forbidden/forbidden/forbidden.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForbiddenComponent */

  /***/
  function srcMbaasForbiddenForbiddenForbiddenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function () {
      return ForbiddenComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/mbaas/mbaas.const */
    "./src/mbaas/mbaas.const.ts");

    var ForbiddenComponent =
    /*#__PURE__*/
    function () {
      function ForbiddenComponent(translate) {
        _classCallCheck(this, ForbiddenComponent);

        this.translate = translate;
        this.translate.setDefaultLang(src_mbaas_mbaas_const__WEBPACK_IMPORTED_MODULE_3__["TRANSLATE"].LENGUAJE);
      }

      _createClass(ForbiddenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForbiddenComponent;
    }();

    ForbiddenComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mbaas-forbidden',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forbidden.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/mbaas/forbidden/forbidden/forbidden.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forbidden.component.scss */
      "./src/mbaas/forbidden/forbidden/forbidden.component.scss")).default]
    })], ForbiddenComponent);
    /***/
  }
}]);
//# sourceMappingURL=forbidden-forbidden-module-es5.js.map