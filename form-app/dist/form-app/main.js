(self["webpackChunkform_app"] = self["webpackChunkform_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/capture-image/capture-image.component */ 5652);
/* harmony import */ var _components_check_door_check_door_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/check-door/check-door.component */ 1934);
/* harmony import */ var _components_check_remove_check_remove_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/check-remove/check-remove.component */ 9550);
/* harmony import */ var _components_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/complete/complete.component */ 5625);
/* harmony import */ var _components_cust_refuse_cust_refuse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cust-refuse/cust-refuse.component */ 5922);
/* harmony import */ var _components_customer_signature_pad_customer_signature_pad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer-signature-pad/customer-signature-pad.component */ 9385);
/* harmony import */ var _components_dim_fail_employee1_dim_fail_employee1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dim-fail-employee1/dim-fail-employee1.component */ 3931);
/* harmony import */ var _components_dimension_form_dimension_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dimension-form/dimension-form.component */ 1078);
/* harmony import */ var _components_dimension_product_dimension_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dimension-product/dimension-product.component */ 9493);
/* harmony import */ var _components_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employee-info/employee-info.component */ 2252);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_pdf_holder_pdf_holder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pdf-holder/pdf-holder.component */ 3219);
/* harmony import */ var _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/proceed/proceed.component */ 882);
/* harmony import */ var _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/safety/safety.component */ 340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);

















const routes = [
    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent, },
    { path: "emp-info", component: _components_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_9__.EmployeeInfoComponent },
    { path: "safety", component: _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_13__.SafetyComponent, outlet: "primary" },
    { path: "dimension-form", component: _components_dimension_form_dimension_form_component__WEBPACK_IMPORTED_MODULE_7__.DimensionFormComponent },
    { path: "check-door", component: _components_check_door_check_door_component__WEBPACK_IMPORTED_MODULE_1__.CheckDoorComponent },
    { path: "dimension-product", component: _components_dimension_product_dimension_product_component__WEBPACK_IMPORTED_MODULE_8__.DimensionProductComponent },
    { path: "dim-fail", component: _components_dim_fail_employee1_dim_fail_employee1_component__WEBPACK_IMPORTED_MODULE_6__.DimFailEmployee1Component },
    { path: "customer-sign", component: _components_customer_signature_pad_customer_signature_pad_component__WEBPACK_IMPORTED_MODULE_5__.CustomerSignaturePadComponent },
    { path: "cust-refuse", component: _components_cust_refuse_cust_refuse_component__WEBPACK_IMPORTED_MODULE_4__.CustRefuseComponent },
    { path: "check-remove", component: _components_check_remove_check_remove_component__WEBPACK_IMPORTED_MODULE_2__.CheckRemoveComponent },
    { path: "proceed", component: _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_12__.ProceedComponent },
    { path: "complete", component: _components_complete_complete_component__WEBPACK_IMPORTED_MODULE_3__.CompleteComponent },
    { path: "pdf", component: _components_pdf_holder_pdf_holder_component__WEBPACK_IMPORTED_MODULE_11__.PdfHolderComponent },
    { path: "image", component: _components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_0__.CaptureImageComponent },
    { path: '**', redirectTo: "" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_navbar_below_navbar_below_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar-below/navbar-below.component */ 1761);




class AppComponent {
    constructor() {
        this.title = 'form-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container", 2, "padding", "20px", "background-color", "#fafafa"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "navbar-below");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_navbar_below_navbar_below_component__WEBPACK_IMPORTED_MODULE_1__.NavbarBelowComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-pdfjs-viewer */ 7781);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/safety/safety.component */ 340);
/* harmony import */ var _components_dimension_form_dimension_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dimension-form/dimension-form.component */ 1078);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_check_door_check_door_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/check-door/check-door.component */ 1934);
/* harmony import */ var _components_dimension_product_dimension_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dimension-product/dimension-product.component */ 9493);
/* harmony import */ var _components_dim_fail_employee1_dim_fail_employee1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dim-fail-employee1/dim-fail-employee1.component */ 3931);
/* harmony import */ var _components_customer_signature_pad_customer_signature_pad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customer-signature-pad/customer-signature-pad.component */ 9385);
/* harmony import */ var _components_problem_install_problem_install_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/problem-install/problem-install.component */ 7069);
/* harmony import */ var _components_cust_refuse_cust_refuse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cust-refuse/cust-refuse.component */ 5922);
/* harmony import */ var _components_check_remove_check_remove_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/check-remove/check-remove.component */ 9550);
/* harmony import */ var _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/proceed/proceed.component */ 882);
/* harmony import */ var _components_complete_complete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/complete/complete.component */ 5625);
/* harmony import */ var _components_pdf_holder_pdf_holder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pdf-holder/pdf-holder.component */ 3219);
/* harmony import */ var _components_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employee-info/employee-info.component */ 2252);
/* harmony import */ var _components_manager_contact_manager_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/manager-contact/manager-contact.component */ 1594);
/* harmony import */ var _components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/capture-image/capture-image.component */ 5652);
/* harmony import */ var _components_navbar_below_navbar_below_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar-below/navbar-below.component */ 1761);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7716);

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.NoopAnimationsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
            ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_0__.PdfJsViewerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_4__.SafetyComponent,
        _components_dimension_form_dimension_form_component__WEBPACK_IMPORTED_MODULE_5__.DimensionFormComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent,
        _components_check_door_check_door_component__WEBPACK_IMPORTED_MODULE_7__.CheckDoorComponent,
        _components_dimension_product_dimension_product_component__WEBPACK_IMPORTED_MODULE_8__.DimensionProductComponent,
        _components_dim_fail_employee1_dim_fail_employee1_component__WEBPACK_IMPORTED_MODULE_9__.DimFailEmployee1Component,
        _components_customer_signature_pad_customer_signature_pad_component__WEBPACK_IMPORTED_MODULE_10__.CustomerSignaturePadComponent,
        _components_problem_install_problem_install_component__WEBPACK_IMPORTED_MODULE_11__.ProblemInstallComponent,
        _components_cust_refuse_cust_refuse_component__WEBPACK_IMPORTED_MODULE_12__.CustRefuseComponent,
        _components_check_remove_check_remove_component__WEBPACK_IMPORTED_MODULE_13__.CheckRemoveComponent,
        _components_proceed_proceed_component__WEBPACK_IMPORTED_MODULE_14__.ProceedComponent,
        _components_complete_complete_component__WEBPACK_IMPORTED_MODULE_15__.CompleteComponent,
        _components_pdf_holder_pdf_holder_component__WEBPACK_IMPORTED_MODULE_16__.PdfHolderComponent,
        _components_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_17__.EmployeeInfoComponent,
        _components_manager_contact_manager_contact_component__WEBPACK_IMPORTED_MODULE_18__.ManagerContactComponent,
        _components_capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_19__.CaptureImageComponent,
        _components_navbar_below_navbar_below_component__WEBPACK_IMPORTED_MODULE_20__.NavbarBelowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.NoopAnimationsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
        ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_0__.PdfJsViewerModule] }); })();


/***/ }),

/***/ 4216:
/*!***************************************!*\
  !*** ./src/app/classes/dimensions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dimensions": () => (/* binding */ Dimensions)
/* harmony export */ });
class Dimensions {
    constructor(stringWidth, stringHeight) {
        this.stringWidth = stringWidth;
        this.stringHeight = stringHeight;
        this.width = parseFloat(stringWidth);
        this.widthUnit = stringWidth.replace(/([0-9\.\s])/g, '');
        this.height = parseFloat(stringHeight);
        this.heightUnit = stringHeight.replace(/([0-9\.\s])/g, '');
    }
}


/***/ }),

/***/ 2804:
/*!*************************************!*\
  !*** ./src/app/classes/pdf-info.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfInfo": () => (/* binding */ PdfInfo)
/* harmony export */ });
class PdfInfo {
    constructor() {
        this.Date = "";
        this.CrewName = "";
        this.OrderNumber = "";
        this.IFGSaleRepName = "";
        this.IFGSaleRepContactNumber = "";
        this.DoorHeight = "";
        this.DoorWidth = "";
        this.ProductHeight = "";
        this.ProductWidth = "";
        this.EmployeeSign1 = "";
        this.EmployeePrint1 = "";
        this.CustomerSign1 = "";
        this.CustomerPrint1 = "";
        this.OldDoorHeight = "";
        this.OldDoorWidth = "";
        this.OldProductHeight = "";
        this.OldProductWidth = "";
        this.EmployeeSign2 = "";
        this.EmployeePrint2 = "";
        this.CustomerSign2 = "";
        this.CustomerPrint2 = "";
        this.CustomerSign3 = "";
        this.CustomerPrint3 = "";
        this.CustomerSign4 = "";
        this.CustomerPrint4 = "";
        this.CustomerSign5 = "";
        this.CustomerPrint5 = "";
    }
}


/***/ }),

/***/ 8287:
/*!*******************************************!*\
  !*** ./src/app/classes/signature-info.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignatureInfo": () => (/* binding */ SignatureInfo)
/* harmony export */ });
class SignatureInfo {
}


/***/ }),

/***/ 5652:
/*!*********************************************************************!*\
  !*** ./src/app/components/capture-image/capture-image.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureImageComponent": () => (/* binding */ CaptureImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _services_step_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/step.service */ 7889);
/* harmony import */ var _services_image_holder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/image-holder.service */ 6014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 1095);










function CaptureImageComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " the installation site. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaptureImageComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " the removal site. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaptureImageComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.uriHolder[i_r4], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CaptureImageComponent_div_8_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Retake Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaptureImageComponent_div_8_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaptureImageComponent_div_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.removeImage(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Remove image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CaptureImageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CaptureImageComponent_div_8_Template_input_change_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const i_r4 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.showPreview($event, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaptureImageComponent_div_8_div_3_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CaptureImageComponent_div_8_label_4_Template, 2, 0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CaptureImageComponent_div_8_button_5_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.uriHolder[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.uriHolder[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.imageArray.length > 1 && ctx_r2.uriHolder[i_r4]);
} }
class CaptureImageComponent {
    constructor(fb, router, valid, step, image) {
        this.fb = fb;
        this.router = router;
        this.valid = valid;
        this.step = step;
        this.image = image;
        this.formGroup = this.fb.group({
            imageArray: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
        this.uriHolder = [];
        this.needsInstallImages = image.needsInstallImages;
        this.needsRemoveImages = image.needsRemoveImages;
    }
    get imageArray() {
        return this.formGroup.get('imageArray');
    }
    showPreview(event, index) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a.item(0);
        var control = event.target;
        control.style.visibility = 'hidden';
        if (file) {
            // File Preview
            const reader = new FileReader();
            reader.onload = () => {
                this.uriHolder[index] = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
    addImage() {
        this.imageArray.push(this.fb.control(['']));
    }
    removeImage(index) {
        this.imageArray.removeAt(index);
    }
    ngOnInit() {
    }
    submit() {
        if (this.needsInstallImages && this.needsRemoveImages) {
            this.image.finishInstall();
            this.image.saveInstall(this.uriHolder);
            this.step.reloadComponent('image');
            return;
        }
        if (this.needsRemoveImages) {
            this.image.finishRemove();
            this.image.saveRemove(this.uriHolder);
        }
        if (this.needsInstallImages) {
            this.image.finishInstall();
            this.image.saveInstall(this.uriHolder);
        }
        if (this.valid.installEverFalse)
            this.router.navigate(['complete']);
        else
            this.router.navigate(['customer-sign']);
    }
}
CaptureImageComponent.ɵfac = function CaptureImageComponent_Factory(t) { return new (t || CaptureImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__.ValidDimService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_step_service__WEBPACK_IMPORTED_MODULE_1__.StepService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_image_holder_service__WEBPACK_IMPORTED_MODULE_2__.ImageHolderService)); };
CaptureImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CaptureImageComponent, selectors: [["app-capture-image"]], decls: 14, vars: 4, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formArrayName", "imageArray", 1, "form-group"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["type", "file", "accept", "image/*", "capture", "environment", "id", "i", 3, "formControlName", "change"], ["class", "imagePreview", 4, "ngIf"], ["style", "border:1px black", "for", "i", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", "type", "button", 3, "click", 4, "ngIf"], [1, "imagePreview"], [2, "width", "400px", "height", "400px", 3, "src"], ["for", "i", 2, "border", "1px black"], ["mat-stroked-button", "", "color", "warn", "type", "button", 3, "click"]], template: function CaptureImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please take images of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CaptureImageComponent_span_3_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CaptureImageComponent_span_4_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CaptureImageComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CaptureImageComponent_div_8_Template, 6, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CaptureImageComponent_Template_button_click_10_listener() { return ctx.addImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Add additional image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.needsInstallImages || ctx.needsInstallImages && ctx.needsRemoveImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.needsRemoveImages && !ctx.needsInstallImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.imageArray.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0dXJlLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1934:
/*!***************************************************************!*\
  !*** ./src/app/components/check-door/check-door.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckDoorComponent": () => (/* binding */ CheckDoorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);



const _c0 = function () { return ["dimension-form"]; };
class CheckDoorComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    next() {
        this.route.navigate(['dimension-product']);
    }
}
CheckDoorComponent.ɵfac = function CheckDoorComponent_Factory(t) { return new (t || CheckDoorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
CheckDoorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckDoorComponent, selectors: [["app-check-door"]], decls: 9, vars: 2, consts: [[1, "form-group", 2, "margin", "auto"], [2, "padding", "5px"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function CheckDoorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Is there another doorway? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckDoorComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1kb29yLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9550:
/*!*******************************************************************!*\
  !*** ./src/app/components/check-remove/check-remove.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRemoveComponent": () => (/* binding */ CheckRemoveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_dimension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dimension.service */ 4226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 1095);






function CheckRemoveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Is there any old equipment to remove? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckRemoveComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Is the uninstall travel path the same as the one for product installation? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CheckRemoveComponent {
    constructor(dim, router, valid) {
        this.dim = dim;
        this.router = router;
        this.valid = valid;
        this.showConfirm = false;
    }
    yes() {
        if (this.showConfirm) {
            this.dim.useOldTravel();
            this.router.navigate(['dimension-product']);
        }
        this.showConfirm = true;
    }
    no() {
        if (!this.showConfirm) {
            this.valid.testObs2.next(true);
            this.router.navigate(['proceed']);
        }
        else {
            this.valid.neededRemoval = true;
            this.router.navigate(['dimension-form']);
        }
    }
}
CheckRemoveComponent.ɵfac = function CheckRemoveComponent_Factory(t) { return new (t || CheckRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dimension_service__WEBPACK_IMPORTED_MODULE_0__.DimensionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__.ValidDimService)); };
CheckRemoveComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckRemoveComponent, selectors: [["app-check-remove"]], decls: 6, vars: 2, consts: [[4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function CheckRemoveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CheckRemoveComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckRemoveComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckRemoveComponent_Template_button_click_2_listener() { return ctx.yes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckRemoveComponent_Template_button_click_4_listener() { return ctx.no(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showConfirm == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showConfirm == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1yZW1vdmUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5625:
/*!***********************************************************!*\
  !*** ./src/app/components/complete/complete.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteComponent": () => (/* binding */ CompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_make_pdf_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/make-pdf.service */ 1564);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




const _c0 = function () { return ["/pdf"]; };
class CompleteComponent {
    constructor(pdf) {
        this.pdf = pdf;
    }
    ngOnInit() {
    }
}
CompleteComponent.ɵfac = function CompleteComponent_Factory(t) { return new (t || CompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_make_pdf_service__WEBPACK_IMPORTED_MODULE_0__.MakePDFService)); };
CompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompleteComponent, selectors: [["app-complete"]], decls: 5, vars: 2, consts: [[1, "subheader"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"]], template: function CompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Installation/Uninstallation Complete. Proceed to completed pdf.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5922:
/*!*****************************************************************!*\
  !*** ./src/app/components/cust-refuse/cust-refuse.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustRefuseComponent": () => (/* binding */ CustRefuseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _manager_contact_manager_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager-contact/manager-contact.component */ 1594);



class CustRefuseComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustRefuseComponent.ɵfac = function CustRefuseComponent_Factory(t) { return new (t || CustRefuseComponent)(); };
CustRefuseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustRefuseComponent, selectors: [["app-cust-refuse"]], decls: 11, vars: 0, consts: [[1, "subheader"]], template: function CustRefuseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Stop!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Do not install or remove any equipment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Contact your salesperson/manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "manager-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _manager_contact_manager_contact_component__WEBPACK_IMPORTED_MODULE_0__.ManagerContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0LXJlZnVzZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9385:
/*!***************************************************************************************!*\
  !*** ./src/app/components/customer-signature-pad/customer-signature-pad.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerSignaturePadComponent": () => (/* binding */ CustomerSignaturePadComponent)
/* harmony export */ });
/* harmony import */ var signature_pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signature_pad */ 2097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_signature_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/signature-handler.service */ 8233);
/* harmony import */ var _services_step_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/step.service */ 7889);
/* harmony import */ var _services_employee_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/employee-details.service */ 8125);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _problem_install_problem_install_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../problem-install/problem-install.component */ 7069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);













const _c0 = ["signaturepad"];
function CustomerSignaturePadComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CustomerSignaturePadComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "customer");
} }
function CustomerSignaturePadComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " witnessing employee ");
} }
function CustomerSignaturePadComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please type a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CustomerSignaturePadComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CustomerSignaturePadComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "customer's");
} }
function CustomerSignaturePadComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " witnessing employee's ");
} }
function CustomerSignaturePadComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please provide a signature. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CustomerSignaturePadComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerSignaturePadComponent_div_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onRefuse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Customer refuses to sign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class CustomerSignaturePadComponent {
    constructor(signatureService, step, empDetails) {
        this.signatureService = signatureService;
        this.step = step;
        this.empDetails = empDetails;
        this.show = true;
        this.signatureEmpty = true;
        this.signatureTouched = false;
        this.picker1 = new Date;
    }
    ngOnInit() {
        this.signatureService.checkDiff();
        this.show = this.signatureService.isCust;
    }
    ngAfterViewInit() {
        this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_0__.default(this.canvasPad.nativeElement);
    }
    clear() {
        this.signaturePad.clear();
    }
    change() {
        this.signatureEmpty = this.signaturePad.isEmpty();
        this.signatureTouched = true;
    }
    onSubmit(f) {
        var date = this.picker1;
        var uri = this.signaturePad.toDataURL();
        var name = this.inputName;
        var y = this.signatureService.createSigInfo(uri, name, date);
        this.signatureService.pushtoArray(y);
        this.signatureService.checkRepeat();
    }
    onRefuse() {
        this.step.setStepRefuse();
    }
}
CustomerSignaturePadComponent.ɵfac = function CustomerSignaturePadComponent_Factory(t) { return new (t || CustomerSignaturePadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_signature_handler_service__WEBPACK_IMPORTED_MODULE_1__.SignatureHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_step_service__WEBPACK_IMPORTED_MODULE_2__.StepService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_employee_details_service__WEBPACK_IMPORTED_MODULE_3__.EmployeeDetailsService)); };
CustomerSignaturePadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CustomerSignaturePadComponent, selectors: [["app-customer-signature-pad"]], viewQuery: function CustomerSignaturePadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.canvasPad = _t.first);
    } }, decls: 46, vars: 14, consts: [[3, "ngSubmit"], ["signForm", "ngForm"], ["id", "signatureDiv", 1, "form-group"], ["appearance", "fill"], ["name", "picker", "matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "customer_name"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["success", ""], ["elseBlock", ""], ["matInput", "", "type", "text", "name", "name", "id", "name", "autocomplete", "off", "required", "", 1, "form-control", 2, "width", "inherit", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["id", "errorMsg", 4, "ngIf"], ["id", "wrapper"], ["width", "400", "height", "200", 2, "border", "1px black solid", 3, "mouseleave"], ["signaturepad", ""], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", "id", "done", 3, "disabled"], ["style", "margin-top: 20px;", 4, "ngIf"], ["id", "errorMsg"], [2, "margin-top", "20px"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function CustomerSignaturePadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Signature Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CustomerSignaturePadComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomerSignaturePadComponent_Template_input_ngModelChange_10_listener($event) { return ctx.picker1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "problem-install");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CustomerSignaturePadComponent_ng_container_18_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CustomerSignaturePadComponent_ng_template_19_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CustomerSignaturePadComponent_ng_template_21_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CustomerSignaturePadComponent_Template_input_ngModelChange_24_listener($event) { return ctx.inputName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CustomerSignaturePadComponent_mat_error_26_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Please sign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CustomerSignaturePadComponent_ng_container_30_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CustomerSignaturePadComponent_ng_template_31_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, CustomerSignaturePadComponent_ng_template_33_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " name below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CustomerSignaturePadComponent_mat_error_36_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "canvas", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseleave", function CustomerSignaturePadComponent_Template_canvas_mouseleave_38_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerSignaturePadComponent_Template_button_click_41_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Clear Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CustomerSignaturePadComponent_div_45_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.picker1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show == true)("ngIfThen", _r3)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.inputName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r7.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show == true)("ngIfThen", _r3)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signatureEmpty && ctx.signatureTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.signatureEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show == true);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _problem_install_problem_install_component__WEBPACK_IMPORTED_MODULE_4__.ProblemInstallComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1zaWduYXR1cmUtcGFkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3931:
/*!*******************************************************************************!*\
  !*** ./src/app/components/dim-fail-employee1/dim-fail-employee1.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimFailEmployee1Component": () => (/* binding */ DimFailEmployee1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);





function DimFailEmployee1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "STOP! Inform customer that new product cannot be safely transported and installed in the final location.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The product width or height is larger than the dimensions of the travel path.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " If customer wishes to continue installation, explain that IFG will not be held responsible for any damages to the product or products within the travel path including: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Scratches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Gouges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Dents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Loss of manufacturer warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Decrease or loss of product functionality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DimFailEmployee1Component_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DimFailEmployee1Component_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "STOP! Inform customer that the old equipment cannot be removed safely.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "The product width or height is larger than the dimensions of the travel path.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " If customer wishes to continue removal, explain that IFG will not be held responsible for any damages to the product or products within the travel path including: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Scratches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Gouges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Dents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Loss of manufacturer warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Decrease or loss of product functionality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DimFailEmployee1Component_div_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DimFailEmployee1Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Did you inform the customer of the possible complications? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DimFailEmployee1Component_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DimFailEmployee1Component_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DimFailEmployee1Component {
    constructor(router, valid) {
        this.router = router;
        this.valid = valid;
        this.showConfirm = false;
        this.isInstall = false;
        this.isRemove = false;
        this.valid.removeObs.subscribe(needsRemovesigs => {
            this.isRemove = needsRemovesigs;
        });
        this.valid.installObs.subscribe(needsInstallSigs => {
            this.isInstall = needsInstallSigs;
        });
    }
    ngOnInit() {
    }
    next() {
        if (this.showConfirm) {
            this.router.navigate(['customer-sign']);
        }
        else
            this.showConfirm = true;
    }
    back() {
        this.showConfirm = false;
    }
}
DimFailEmployee1Component.ɵfac = function DimFailEmployee1Component_Factory(t) { return new (t || DimFailEmployee1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__.ValidDimService)); };
DimFailEmployee1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DimFailEmployee1Component, selectors: [["app-dim-fail-employee1"]], decls: 3, vars: 3, consts: [["class", "form-group", 4, "ngIf"], [1, "form-group"], ["mat-flat-button", "", "color", "primary", 3, "click"], [2, "padding", "5px"], ["mat-flat-button", "", "color", "primary", 1, "btn", "btn-primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "btn", "btn-danger", 2, "padding", "5px", 3, "click"]], template: function DimFailEmployee1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DimFailEmployee1Component_div_0_Template, 22, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DimFailEmployee1Component_div_1_Template, 22, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DimFailEmployee1Component_div_2_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirm == false && ctx.isInstall == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirm == false && ctx.isRemove == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirm == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaW0tZmFpbC1lbXBsb3llZTEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1078:
/*!***********************************************************************!*\
  !*** ./src/app/components/dimension-form/dimension-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionFormComponent": () => (/* binding */ DimensionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_dimension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dimension.service */ 4226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);










function DimensionFormComponent_div_0_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Doorway height is not a number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionFormComponent_div_0_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Doorway height is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionFormComponent_div_0_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Doorway width is not a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionFormComponent_div_0_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Doorway width is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Assess the travel path ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Determine the height and width of the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "doorway");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " inches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Doorway Height:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DimensionFormComponent_div_0_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.travelDim.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DimensionFormComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DimensionFormComponent_div_0_mat_error_20_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Doorway Width:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DimensionFormComponent_div_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.travelDim.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DimensionFormComponent_div_0_mat_error_27_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DimensionFormComponent_div_0_mat_error_28_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DimensionFormComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.travelDim.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.travelDim.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r2.valid);
} }
function DimensionFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Is there another doorway? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DimensionFormComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.yes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DimensionFormComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.no(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DimensionFormComponent {
    constructor(DimService, router, valid) {
        this.DimService = DimService;
        this.router = router;
        this.valid = valid;
        this.travelDimArray = [];
        this.travelDim = {
            width: "",
            height: "",
        };
        this.isInstall = false;
        this.checkDoor = false;
        this.valid.testObs.subscribe(passedInstall => this.isInstall = !passedInstall);
    }
    ngOnInit() {
    }
    check() {
        this.DimService.pushDimensionArray(this.travelDimArray, this.travelDim.width, this.travelDim.height);
        this.checkDoor = true;
    }
    yes() {
        this.checkDoor = false;
        this.travelDim.height = "";
        this.travelDim.width = "";
    }
    no() {
        if (!this.isInstall) {
            this.DimService.travelRemoveDimArray = this.travelDimArray;
        }
        else {
            this.DimService.travelDimArray = this.travelDimArray;
        }
        this.router.navigate(["dimension-product"]);
    }
}
DimensionFormComponent.ɵfac = function DimensionFormComponent_Factory(t) { return new (t || DimensionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dimension_service__WEBPACK_IMPORTED_MODULE_0__.DimensionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__.ValidDimService)); };
DimensionFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DimensionFormComponent, selectors: [["app-dimension-form"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["id", "specForm", "action", "#", 1, "subheader"], ["f", "ngForm"], [1, "units"], [1, "form-group"], ["appearance", "fill"], ["for", "travel_height"], ["name", "travel_height", "matInput", "", "pattern", "^[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))$", "required", "", "type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["travel_height", "ngModel"], ["for", "travel_width"], ["name", "travel_width", "matInput", "", "pattern", "^[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))$", "required", "", "type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["travel_width", "ngModel"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [2, "padding", "5px"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function DimensionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DimensionFormComponent_div_0_Template, 31, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DimensionFormComponent_div_1_Template, 9, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.checkDoor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkDoor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaW1lbnNpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9493:
/*!*****************************************************************************!*\
  !*** ./src/app/components/dimension-product/dimension-product.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionProductComponent": () => (/* binding */ DimensionProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_dimension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dimension.service */ 4226);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);










function DimensionProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Determine width and height of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "equipment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "to install in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " inches");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionProductComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Determine width and height of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "equipment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "to remove in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " inches");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionProductComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product height is not a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionProductComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product height is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionProductComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product width is not a number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DimensionProductComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Product width is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DimensionProductComponent {
    constructor(dimService, router, checkService) {
        this.dimService = dimService;
        this.router = router;
        this.checkService = checkService;
        this.productDimArray = [];
        this.productDim = {
            width: "",
            height: ""
        };
        checkService.testObs.subscribe(passedInstall => {
            this.isInstall = !passedInstall;
        });
    }
    check() {
        if (this.isInstall) {
            this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height);
            this.dimService.productDimArray = this.productDimArray;
            var result = this.checkService.checkValues(false);
            if (result) {
                this.router.navigate(["check-remove"]);
            }
            else
                [
                    this.router.navigate(["dim-fail"])
                ];
        }
        else {
            this.check2();
        }
    }
    check2() {
        this.dimService.pushDimensionArray(this.productDimArray, this.productDim.width, this.productDim.height);
        this.dimService.productRemoveDimArray = this.productDimArray;
        var result = this.checkService.checkValues(true);
        if (result) {
            this.router.navigate(["customer-sign"]);
        }
        else
            [
                this.router.navigate(["dim-fail"])
            ];
    }
}
DimensionProductComponent.ɵfac = function DimensionProductComponent_Factory(t) { return new (t || DimensionProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dimension_service__WEBPACK_IMPORTED_MODULE_0__.DimensionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_1__.ValidDimService)); };
DimensionProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DimensionProductComponent, selectors: [["app-dimension-product"]], decls: 25, vars: 9, consts: [[1, "form-group"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "specForm", "action", "#", 1, "nonInit"], ["f", "ngForm"], [1, "form-group", "subheader"], ["appearance", "fill"], ["for", "product_height"], ["matInput", "", "name", "product_height", "pattern", "^[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))$", "required", "", "type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["product_height", "ngModel"], [4, "ngIf"], ["for", "product_width"], ["matInput", "", "name", "product_width", "pattern", "^[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))$", "required", "", "type", "text", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange"], ["product_width", "ngModel"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "units"]], template: function DimensionProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DimensionProductComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DimensionProductComponent_ng_template_2_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Equipment Height:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DimensionProductComponent_Template_input_ngModelChange_11_listener($event) { return ctx.productDim.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DimensionProductComponent_mat_error_13_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DimensionProductComponent_mat_error_14_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Equipment Width:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DimensionProductComponent_Template_input_ngModelChange_19_listener($event) { return ctx.productDim.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DimensionProductComponent_mat_error_21_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DimensionProductComponent_mat_error_22_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DimensionProductComponent_Template_button_click_23_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInstall)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productDim.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.productDim.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors == null ? null : _r7.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r3.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaW1lbnNpb24tcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2252:
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-info/employee-info.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeInfoComponent": () => (/* binding */ EmployeeInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_employee_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/employee-details.service */ 8125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);











function EmployeeInfoComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getErrorDate());
} }
function EmployeeInfoComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getErrorOrder());
} }
function EmployeeInfoComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getErrorSalesRep());
} }
function EmployeeInfoComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.getErrorSalesRepNumber(), "");
} }
function EmployeeInfoComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At least one install crew member's name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployeeInfoComponent_div_35_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeInfoComponent_div_35_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.removeCrew(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Remove crew member");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployeeInfoComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeInfoComponent_div_35_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Crew Member Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmployeeInfoComponent_div_35_button_6_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crew_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (crew_r6 == null ? null : crew_r6.invalid) && ((crew_r6 == null ? null : crew_r6.touched) || (crew_r6 == null ? null : crew_r6.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.installCrew.length > 1);
} }
class EmployeeInfoComponent {
    constructor(empDetails, fb, route) {
        this.empDetails = empDetails;
        this.fb = fb;
        this.route = route;
        this.empForm = this.fb.group({
            inputDate: [{ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            orderNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            salesRep: [(''), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            salesRepContactNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')
                ]],
            installCrew: this.fb.array([
                this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
            ]),
        });
    }
    get orderNumber() {
        return this.empForm.get('orderNumber');
    }
    get salesRep() {
        return this.empForm.get('salesRep');
    }
    get salesRepContactNumber() {
        return this.empForm.get('salesRepContactNumber');
    }
    get installCrew() {
        return this.empForm.get('installCrew');
    }
    get inputDate() {
        return this.empForm.get('inputDate');
    }
    addCrew() {
        this.installCrew.push(this.fb.control(''));
    }
    removeLastCrew() {
        const index = this.installCrew.length - 1;
        this.installCrew.removeAt(index);
    }
    removeCrew(index) {
        this.installCrew.removeAt(index);
    }
    next(formdata) {
        this.empDetails.submitData(formdata);
        this.route.navigate(['safety']);
    }
    getErrorDate() {
        var _a;
        if ((_a = this.inputDate) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'Please select a date';
        }
        return;
    }
    getErrorOrder() {
        var _a;
        if ((_a = this.orderNumber) === null || _a === void 0 ? void 0 : _a.hasError('required'))
            return 'Please type in an order number';
        return;
    }
    getErrorSalesRep() {
        var _a;
        if ((_a = this.salesRep) === null || _a === void 0 ? void 0 : _a.hasError('required'))
            return 'Please enter sales represenative name';
        return;
    }
    getErrorSalesRepNumber() {
        var _a, _b;
        if ((_a = this.salesRepContactNumber) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'Please enter sales rep contact number';
        }
        return ((_b = this.salesRepContactNumber) === null || _b === void 0 ? void 0 : _b.hasError('pattern')) ? 'Not a valid phone number' : '';
    }
}
EmployeeInfoComponent.ɵfac = function EmployeeInfoComponent_Factory(t) { return new (t || EmployeeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_details_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EmployeeInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeeInfoComponent, selectors: [["app-employee-info"]], decls: 41, vars: 9, consts: [[2, "text-align", "center"], [1, "subheader", 3, "formGroup", "ngSubmit"], ["appearance", "standard"], ["formControlName", "inputDate", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], [1, "form-group"], ["for", "orderNumber "], ["type", "text", "name", "orderNumber", "formControlName", "orderNumber", "matInput", ""], ["for", "salesRep"], ["type", "text", "name", "salesRep", "formControlName", "salesRep", "matInput", ""], ["type", "text", "name", "salesRepContactNumber", "formControlName", "salesRepContactNumber", "matInput", ""], ["formArrayName", "installCrew", 1, "subheader"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "subheader"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["class", "alert alert-danger", 4, "ngIf"], ["appearance", "standard", 2, "margin", "10px"], ["type", "text", "matInput", "", 3, "formControlName"], ["mat-stroked-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "alert", "alert-danger"], ["mat-stroked-button", "", "type", "button", 3, "click"]], template: function EmployeeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter pre-installation information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeInfoComponent_Template_form_ngSubmit_3_listener() { return ctx.next(ctx.empForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmployeeInfoComponent_mat_error_12_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Order Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EmployeeInfoComponent_mat_error_18_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Sales Representative Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EmployeeInfoComponent_mat_error_24_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Sales Representative Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, EmployeeInfoComponent_mat_error_30_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Install Crew Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, EmployeeInfoComponent_div_35_Template, 7, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeInfoComponent_Template_button_click_36_listener() { return ctx.addCrew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Add additional crew member");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.empForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inputDate == null ? null : ctx.inputDate.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderNumber == null ? null : ctx.orderNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salesRep == null ? null : ctx.salesRep.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salesRepContactNumber == null ? null : ctx.salesRepContactNumber.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.installCrew.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.empForm.valid);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);








class LoginComponent {
    constructor(router, authS) {
        this.router = router;
        this.authS = authS;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.authPassword = "1234";
        this.authUsername = "Admin";
    }
    auth() {
        if (this.user.value == this.authUsername && this.password.value == this.authPassword) {
            this.router.navigateByUrl("emp-info");
            this.authS.didLogin();
            this.authS.setStorageItem({
                key: 'state',
                value: 'true',
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 2, consts: [["id", "authForm", 3, "ngSubmit"], [1, "form-group"], ["matInput", "", "name", "user", "type", "username", "id", "username", 1, "form-control", 3, "formControl"], ["matInput", "", "name", "pass", "type", "password", "id", "password", 1, "form-control", 3, "formControl"], ["mat-flat-button", "", "color", "primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.auth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1594:
/*!*************************************************************************!*\
  !*** ./src/app/components/manager-contact/manager-contact.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerContactComponent": () => (/* binding */ ManagerContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_employee_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/employee-details.service */ 8125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);









function ManagerContactComponent_div_1_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getErrorManagerName(), " ");
} }
function ManagerContactComponent_div_1_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getErrorManagerContact(), " ");
} }
function ManagerContactComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Salesperson/Manager's name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManagerContactComponent_div_1_mat_error_5_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Salesperson/Manager's contact number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManagerContactComponent_div_1_mat_error_11_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.managerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.managerName.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.managerContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.managerContact.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx_r0.managerName.valid && ctx_r0.managerContact.valid));
} }
function ManagerContactComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Were you able to contact your salesperson/manager? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.no(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagerContactComponent_div_3_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.getErrorManagerResponse(), " ");
} }
function ManagerContactComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please write a summary of what your salesperson/manager told you ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManagerContactComponent_div_3_mat_error_7_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.managerResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.managerResponse.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.managerResponse.valid ? false : true);
} }
function ManagerContactComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Were you instructed to continue or not to continue installation/removal? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.proceed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagerContactComponent_div_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.no(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Not to continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManagerContactComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Refer to instructions above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ManagerContactComponent {
    constructor(empDetails, route) {
        this.empDetails = empDetails;
        this.route = route;
        this.step = 0;
        this.unableContact = false;
        this.managerName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
        this.managerContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$')]);
        this.managerResponse = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]);
    }
    proceed() {
        switch (this.step) {
            case 0:
                this.step = 1;
                break;
            case 1:
                this.step = 2;
                break;
            case 2:
                this.step = 3;
                break;
            case 3:
                this.saveData();
                this.empDetails.info.managerProceed = true;
                this.route.navigate(['customer-sign']);
                break;
            default:
        }
    }
    no() {
        this.unableContact = true;
    }
    saveData() {
        this.empDetails.info.managerName = this.managerName.value;
        this.empDetails.info.managerNumber = this.managerContact.value;
        this.empDetails.info.managerInstructions = this.managerResponse.value;
    }
    //template error functions
    getErrorManagerName() {
        if (this.managerName.hasError('required'))
            return "Please enter the name of the manager";
        return;
    }
    getErrorManagerContact() {
        if (this.managerContact.hasError('required'))
            return "Please enter manager's phone number";
        return this.managerContact.hasError('pattern') ? 'Not a valid phone number' : '';
    }
    getErrorManagerResponse() {
        if (this.managerResponse.hasError('required'))
            return "Please enter a short summary of your conversation.";
        return;
    }
}
ManagerContactComponent.ɵfac = function ManagerContactComponent_Factory(t) { return new (t || ManagerContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_details_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ManagerContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagerContactComponent, selectors: [["manager-contact"]], decls: 6, vars: 5, consts: [[1, "subheader"], [4, "ngIf"], ["appearance", "fill"], ["for", "managerName"], ["matInput", "", "name", "managerName", "type", "text", 3, "formControl"], ["for", "managerContact"], ["matInput", "", "name", "managerContact", "type", "text", 3, "formControl"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "placeholder", "Instructions go here...", "name", "managerResponse", "type", "text", 3, "formControl"]], template: function ManagerContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManagerContactComponent_div_1_Template, 15, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagerContactComponent_div_2_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManagerContactComponent_div_3_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ManagerContactComponent_div_4_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManagerContactComponent_div_5_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 0 && !ctx.unableContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 1 && !ctx.unableContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 2 && !ctx.unableContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step == 3 && !ctx.unableContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unableContact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyLWNvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1761:
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar-below/navbar-below.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarBelowComponent": () => (/* binding */ NavbarBelowComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _services_step_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/step.service */ 7889);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);







function NavbarBelowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarBelowComponent_div_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.restart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Click to restart. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NavbarBelowComponent {
    constructor(auth, step) {
        this.auth = auth;
        this.step = step;
        this.loginState$ = this.auth.storageChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(({ key }) => key === 'state'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.pluck)("value"));
    }
    restart() {
        this.step.reloadComponent();
    }
}
NavbarBelowComponent.ɵfac = function NavbarBelowComponent_Factory(t) { return new (t || NavbarBelowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_step_service__WEBPACK_IMPORTED_MODULE_1__.StepService)); };
NavbarBelowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarBelowComponent, selectors: [["navbar-below"]], decls: 1, vars: 1, consts: [["class", "container", "style", "padding-top:20px; text-align: center;", 4, "ngIf"], [1, "container", 2, "padding-top", "20px", "text-align", "center"], ["mat-button", "", "color", "accent", "href", "emp-info", 3, "click"]], template: function NavbarBelowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavbarBelowComponent_div_0_Template, 4, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginState$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItYmVsb3cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ 1769);


class NavbarComponent {
    constructor() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 4, vars: 0, consts: [[1, "container", 2, "padding-top", "20px"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Equipment Installation Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__.MatDivider], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3219:
/*!***************************************************************!*\
  !*** ./src/app/components/pdf-holder/pdf-holder.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfHolderComponent": () => (/* binding */ PdfHolderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_make_pdf_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/make-pdf.service */ 1564);
/* harmony import */ var ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-pdfjs-viewer */ 7781);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);





const _c0 = ["pdf"];
const _c1 = ["pdfViewer"];
class PdfHolderComponent {
    constructor(pdf) {
        this.pdf = pdf;
    }
    //access by tying /pdf in root
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pdf.makePdf().then(uri => {
                this.pdfViewer.pdfSrc = uri;
                this.pdfViewer.refresh();
            });
        });
    }
    downloadPDF() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.pdf.downloadPdf();
        });
    }
}
PdfHolderComponent.ɵfac = function PdfHolderComponent_Factory(t) { return new (t || PdfHolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_make_pdf_service__WEBPACK_IMPORTED_MODULE_0__.MakePDFService)); };
PdfHolderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PdfHolderComponent, selectors: [["app-pdf-holder"]], viewQuery: function PdfHolderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pagePdf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pdfViewer = _t.first);
    } }, decls: 6, vars: 0, consts: [[2, "width", "100%", "height", "1000px"], ["pdfViewer", ""], ["mat-stroked-button", "", 3, "click"]], template: function PdfHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ng2-pdfjs-viewer", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PdfHolderComponent_Template_button_click_4_listener() { return ctx.downloadPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [ng2_pdfjs_viewer__WEBPACK_IMPORTED_MODULE_1__.PdfJsViewerComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZGYtaG9sZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7069:
/*!*************************************************************************!*\
  !*** ./src/app/components/problem-install/problem-install.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemInstallComponent": () => (/* binding */ ProblemInstallComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _services_signature_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/signature-handler.service */ 8233);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function ProblemInstallComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " By signing here, customer acknowledges IFG has explained the complications regarding installation. This may be due to product height, width, or other equipment specifications. Customer understands that installation may cause damage to the product including: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Scratches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Gouges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Dents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Loss of manufacturer warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Decrease or loss of product functionality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Customer also releases IFG of all liability during installation. Customer may also decline to sign, but product may not be installed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProblemInstallComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " IFG has informed me (customer owner or customer employee) that there is an issue with placing this product in the final location. This issue is related to the product height, width, or other dimension specs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " By signing here,(customer owner or customer employee) has given written consent to IFG to continue with installation. IFG will not be reponsible for any damage to the product during travel or installation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProblemInstallComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " By signing here, customer acknowledges IFG has explained the risks and conditions regarding product removal Customer will accept full liability for possible damages during removal, including: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Scratches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Gouges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Dents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Loss of manufacturer warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Decrease or loss of product functionality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Customer may also decline to sign, but product may not be installed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProblemInstallComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "The customer (customer or customer employee) has accepted and inspected the product at the agreed final location and that the product is defect free and in working condition. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The customer agrees to release all liability to IFG");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProblemInstallComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The customer is giving IFG permission to remove the old equipment for disposal. IFG will not reimburse credit to the customer for the old unit. IFG will not be responsible if there is any damage done while moving the product from the product location to the truck location. The customer (customer owner or customer employee) has given written or signed consent for IFG to remove their old product for disposal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProblemInstallComponent {
    constructor(valid, sig) {
        this.valid = valid;
        this.sig = sig;
        this.isCust = false;
        this.step = 0;
        this.isCompleteInstall = false;
        this.isCompleteRemove = false;
        this.isFinalRemoveStep = false;
        this.valid.testObs.subscribe(install => this.isCompleteInstall = install);
        this.valid.testObs2.subscribe(remove => this.isCompleteRemove = remove);
        if (this.isCompleteInstall && this.isCompleteRemove) {
            this.isComplete = true;
        }
        else
            this.isComplete = false;
    }
    ngOnInit() {
        this.isCust = this.sig.isCust;
        this.step = this.sig.subStep;
    }
}
ProblemInstallComponent.ɵfac = function ProblemInstallComponent_Factory(t) { return new (t || ProblemInstallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__.ValidDimService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_signature_handler_service__WEBPACK_IMPORTED_MODULE_1__.SignatureHandlerService)); };
ProblemInstallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProblemInstallComponent, selectors: [["problem-install"]], decls: 5, vars: 5, consts: [["id", "travelDisclaimertext", "class", "form-group", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["id", "travelDisclaimertext", 1, "form-group"], [1, "form-group"]], template: function ProblemInstallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProblemInstallComponent_div_0_Template, 16, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProblemInstallComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProblemInstallComponent_div_2_Template, 16, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProblemInstallComponent_div_3_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProblemInstallComponent_div_4_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.step == 1 && !ctx.isCompleteInstall);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.step == 2 && !ctx.isCompleteInstall);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.step == 1 && !ctx.isCompleteRemove && ctx.isCompleteInstall);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isComplete);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.step == 2 && !ctx.isCompleteRemove && ctx.isCompleteInstall);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ibGVtLWluc3RhbGwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 882:
/*!*********************************************************!*\
  !*** ./src/app/components/proceed/proceed.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProceedComponent": () => (/* binding */ ProceedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/valid-dim.service */ 7198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_image_holder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image-holder.service */ 6014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function ProceedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Proceed to installation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProceedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Press next to take images of installation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProceedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Proceed to uninstallation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProceedComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Press next to take images of removal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProceedComponent {
    constructor(valid, route, image) {
        this.valid = valid;
        this.route = route;
        this.image = image;
        valid.testObs.subscribe(install => {
            this.didInstall = install;
        });
        valid.removeObs.subscribe(neededSig => {
            this.didRemove = neededSig;
        });
        this.needRemoval = valid.neededRemoval;
    }
    ngOnInit() {
        this.needInstallImage = this.image.needsInstallImages;
        this.needRemoveImage = this.image.needsRemoveImages;
    }
    next() {
        if (this.image.needsInstallImages || this.image.needsRemoveImages)
            this.route.navigate(['image']);
        else if (this.valid.installEverFalse == false) {
            this.route.navigate(['customer-sign']);
        }
        else
            this.route.navigate(['complete']);
    }
}
ProceedComponent.ɵfac = function ProceedComponent_Factory(t) { return new (t || ProceedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_valid_dim_service__WEBPACK_IMPORTED_MODULE_0__.ValidDimService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_image_holder_service__WEBPACK_IMPORTED_MODULE_1__.ImageHolderService)); };
ProceedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProceedComponent, selectors: [["app-proceed"]], decls: 7, vars: 4, consts: [[1, "subheader"], ["class", "form-group", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-default", 3, "click"], [1, "form-group"]], template: function ProceedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProceedComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProceedComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProceedComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProceedComponent_div_4_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProceedComponent_Template_button_click_5_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.didInstall);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needInstallImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needRemoval);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.needRemoveImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZWVkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 340:
/*!*******************************************************!*\
  !*** ./src/app/components/safety/safety.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyComponent": () => (/* binding */ SafetyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);




function SafetyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Make sure you have proper PPE prior to installation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SafetyComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SafetyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Do you have proper PPE equipped? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SafetyComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SafetyComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SafetyComponent {
    constructor(router) {
        this.router = router;
        this.showConfirm = false;
    }
    next() {
        if (!this.showConfirm) {
            this.showConfirm = true;
        }
        else {
            this.router.navigate(['dimension-form']);
        }
    }
    back() {
        if (this.showConfirm) {
            this.showConfirm = false;
        }
    }
}
SafetyComponent.ɵfac = function SafetyComponent_Factory(t) { return new (t || SafetyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SafetyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SafetyComponent, selectors: [["app-safety"]], decls: 2, vars: 2, consts: [["class", "form-group", "style", "border: black 1px solid; padding: 20px;", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "form-group", 2, "border", "black 1px solid", "padding", "20px"], ["for", "safety"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "form-group"], [2, "padding", "5px"], ["mat-flat-button", "", "color", "warn", 2, "padding", "5px", 3, "click"]], template: function SafetyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SafetyComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SafetyComponent_div_1_Template, 9, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showConfirm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);


class AuthService {
    constructor() {
        this.storageChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject;
        this.passedLogin = false;
        this.passedLoginObs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.passedLogin);
    }
    setStorageItem(change) {
        window.sessionStorage.setItem(change.key, change.value);
        this.storageChange$.next(change);
    }
    getStorageItem(getItem) {
        window.sessionStorage.getItem(getItem.key);
    }
    didLogin() {
        this.passedLoginObs.next(true);
        sessionStorage.setItem('authstate', 'true');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4226:
/*!***********************************************!*\
  !*** ./src/app/services/dimension.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DimensionService": () => (/* binding */ DimensionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _classes_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/dimensions */ 4216);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



class DimensionService {
    constructor() {
        this.travelDimArray = [];
        this.travelArraysubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.travelDimArray);
        this.travelArray = this.travelArraysubject.asObservable();
        this.productDimArray = [];
        this.productArraysubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.productDimArray);
        this.productArray = this.productArraysubject.asObservable();
        this.travelRemoveDimArray = [];
        this.travelRemoveArraysubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.travelRemoveDimArray);
        this.travelRemoveArray = this.travelRemoveArraysubject.asObservable();
        this.productRemoveDimArray = [];
        this.productRemoveArraysubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.productRemoveDimArray);
        this.productRemoveArray = this.productRemoveArraysubject.asObservable();
    }
    setTravelArray(pArray) {
        this.travelArraysubject.next(pArray);
    }
    setProductArray(pArray) {
        this.productArraysubject.next(pArray);
    }
    useOldTravel() {
        this.travelRemoveDimArray = this.travelDimArray;
    }
    setTravelRemoveArray(pArray) {
        this.travelRemoveArraysubject.next(pArray);
    }
    setProductRemoveArray(pArray) {
        this.productRemoveArraysubject.next(pArray);
    }
    createDimensionArray() {
        let newArray = new Array();
        return newArray;
    }
    pushDimensionArray(array, rawWidth, rawHeight) {
        let dimParsed = new _classes_dimensions__WEBPACK_IMPORTED_MODULE_0__.Dimensions(rawWidth, rawHeight);
        array.push(dimParsed);
        return array;
    }
}
DimensionService.ɵfac = function DimensionService_Factory(t) { return new (t || DimensionService)(); };
DimensionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DimensionService, factory: DimensionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8125:
/*!******************************************************!*\
  !*** ./src/app/services/employee-details.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDetailsService": () => (/* binding */ EmployeeDetailsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class EmployeeDetailsService {
    constructor() {
        this.info = {
            date: new Date,
            orderNumber: "",
            installCrew: [],
            salesRep: "",
            salesRepContactNumber: "",
            custRefused: false
        };
    }
    submitData(data) {
        this.info.date = data.inputDate;
        this.info.orderNumber = data.orderNumber;
        this.info.salesRep = data.salesRep;
        this.info.salesRepContactNumber = data.salesRepContactNumber;
        this.info.installCrew = data.installCrew;
    }
    custRefusePrep() {
        this.info.custRefused = true;
        this.info.managerName = "";
        this.info.managerNumber = "";
        this.info.managerInstructions = "";
        this.info.managerProceed = false;
    }
}
EmployeeDetailsService.ɵfac = function EmployeeDetailsService_Factory(t) { return new (t || EmployeeDetailsService)(); };
EmployeeDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeDetailsService, factory: EmployeeDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6014:
/*!**************************************************!*\
  !*** ./src/app/services/image-holder.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageHolderService": () => (/* binding */ ImageHolderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ImageHolderService {
    constructor() {
        //contains string uri's of images
        this.installImage = [];
        this.removeImage = [];
    }
    needsInstall() {
        this.needsInstallImages = true;
    }
    finishInstall() {
        this.needsInstallImages = false;
    }
    needsRemove() {
        this.needsRemoveImages = true;
    }
    finishRemove() {
        this.needsRemoveImages = false;
    }
    saveInstall(array) {
        this.installImage = array;
    }
    saveRemove(array) {
        this.removeImage = array;
    }
    getInstallImages() {
        return this.installImage;
    }
    getRemoveImage() {
        return this.removeImage;
    }
}
ImageHolderService.ɵfac = function ImageHolderService_Factory(t) { return new (t || ImageHolderService)(); };
ImageHolderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageHolderService, factory: ImageHolderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1564:
/*!**********************************************!*\
  !*** ./src/app/services/make-pdf.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakePDFService": () => (/* binding */ MakePDFService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdf-lib */ 6184);
/* harmony import */ var _classes_pdf_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/pdf-info */ 2804);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downloadjs */ 7823);
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _signature_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signature-handler.service */ 8233);
/* harmony import */ var _dimension_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimension.service */ 4226);
/* harmony import */ var _employee_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-details.service */ 8125);
/* harmony import */ var _image_holder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-holder.service */ 6014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);










class MakePDFService {
    constructor(sig, dim, emp, image, datePipe) {
        this.sig = sig;
        this.dim = dim;
        this.emp = emp;
        this.image = image;
        this.datePipe = datePipe;
        this.arrayCustomer = [];
        this.arrayEmployee = [];
        this.arrayInstallDoorDim = [];
        this.arrayInstallProductDim = [];
        this.arrayRemoveDoorDim = [];
        this.arrayRemoveProductDim = [];
        //defines all of the fields in the pdf to fill
        this.p = new _classes_pdf_info__WEBPACK_IMPORTED_MODULE_1__.PdfInfo;
        this.formUrl = 'assets/equipment.pdf';
        //signature arrays hold: 1. string uri of the signature 2. a string name of the individual who signed it 
        //3. if it was a customer or employee signature 4. the step the signature was obtained at
        // steps are handled in the checkStatus in the signature-handler service
        // generally the format is '(install||remove)' + _+ '(customer||employee) + (step_number)'
        // example install_customer1 or remove_employee2
        this.arrayCustomer = this.sig.custSigArray;
        this.arrayEmployee = this.sig.employSigArray;
        //dimension arrays hold: 1. An array of the widths (doorway/product) parsed in float.
        // 2. An array of the heights entered.
        // 3. the units (if applicable) <-- can probably remove this.
        this.arrayInstallDoorDim = this.dim.travelDimArray;
        this.arrayInstallProductDim = this.dim.productDimArray;
        this.arrayRemoveDoorDim = this.dim.travelRemoveDimArray;
        this.arrayRemoveProductDim = this.dim.productRemoveDimArray;
        this.employeeInfo = this.emp.info;
    }
    makePdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const formPdfBytes = yield fetch(this.formUrl).then(res => res.arrayBuffer());
            const pdfDoc = yield pdf_lib__WEBPACK_IMPORTED_MODULE_0__.PDFDocument.load(formPdfBytes);
            const form = pdfDoc.getForm();
            // iterate to get your info
            yield this.iterate();
            // checks if Manager response was necessary and adds a page with details if it exists
            this.embedManagerResponse(pdfDoc);
            //add images, abstract some of this shit away into functions
            this.embedImages(pdfDoc);
            // mandatory fields (door height, order number etc)
            this.embedMandatoryFields(form);
            // conditional fields (logic needed to fill depending on circumstance)
            this.embedConditionalFields(pdfDoc, form);
            const pdf8bit = yield pdfDoc.save();
            //trigger auto downloading 
            this.finalPDF = pdfDoc;
            return pdf8bit;
        });
    }
    downloadPdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const pdfBytes = yield this.finalPDF.save();
            //fileName = date, order, IFGSaleRepName, CustomerPrint1, EmployeePrint1
            const fileName = "equipment_installation_" + this.p.Date + "_" + this.p.IFGSaleRepName + "_" + this.p.CustomerPrint1 + "_" + this.p.EmployeePrint1 + ".pdf";
            downloadjs__WEBPACK_IMPORTED_MODULE_2___default()(pdfBytes, fileName, "application/pdf");
        });
    }
    // sets class properties from data
    iterate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var tempDate = new Date().toLocaleString();
            var shortDate = this.datePipe.transform(tempDate, 'MM-dd-YYYY');
            if (shortDate) {
                this.p.Date = shortDate;
            }
            this.iterateCustomer();
            this.iterateEmployee();
            this.iterateInstallDoorDimensions();
            this.iterateRemoveDoorDimensions();
            this.iterateNewProductDimensions();
            this.iterateOldProductDimensions();
            this.iterateImages();
        });
    }
    iterateCustomer() {
        if (this.arrayCustomer.length != 0) {
            this.arrayCustomer.forEach(item => {
                switch (item.step) {
                    case "customer_install1":
                        this.p.CustomerPrint1 = item.name;
                        this.p.CustomerSign1 = item.signatureImg;
                        break;
                    case "customer_remove1":
                        this.p.CustomerPrint2 = item.name;
                        this.p.CustomerSign2 = item.signatureImg;
                        break;
                    case "customer_install2":
                        this.p.CustomerPrint4 = item.name;
                        this.p.CustomerSign4 = item.signatureImg;
                        break;
                    case "customer_remove2":
                        this.p.CustomerPrint5 = item.name;
                        this.p.CustomerSign5 = item.signatureImg;
                        break;
                    case "customer_installFinal":
                        this.p.CustomerPrint3 = item.name;
                        this.p.CustomerSign3 = item.signatureImg;
                        break;
                    default:
                }
            });
        }
    }
    iterateEmployee() {
        if (this.arrayEmployee.length != 0) {
            this.arrayEmployee.forEach(item => {
                switch (item.step) {
                    case "employee_install1":
                        this.p.EmployeePrint1 = item.name;
                        this.p.EmployeeSign1 = item.signatureImg;
                        break;
                    case "employee_remove1":
                        this.p.EmployeePrint2 = item.name;
                        this.p.EmployeeSign2 = item.signatureImg;
                }
            });
        }
    }
    iterateInstallDoorDimensions() {
        var array = this.arrayInstallDoorDim;
        if (array.length != 0) {
            const resultHeight = this.getHeight(array);
            const resultWidth = this.getWidth(array);
            this.p.DoorHeight = resultHeight.toString();
            this.p.DoorWidth = resultWidth.toString();
        }
    }
    iterateRemoveDoorDimensions() {
        var array = this.arrayRemoveDoorDim;
        if (array.length != 0) {
            const resultHeight = this.getHeight(array);
            const resultWidth = this.getWidth(array);
            this.p.OldDoorHeight = resultHeight.toString();
            this.p.OldDoorWidth = resultWidth.toString();
        }
    }
    iterateNewProductDimensions() {
        var array = this.arrayInstallProductDim;
        if (array.length != 0) {
            const resultHeight = this.getHeight(array);
            const resultWidth = this.getWidth(array);
            this.p.ProductHeight = resultHeight.toString();
            this.p.ProductWidth = resultWidth.toString();
        }
    }
    iterateOldProductDimensions() {
        var array = this.arrayRemoveProductDim;
        if (array.length != 0) {
            const resultHeight = this.getHeight(array);
            const resultWidth = this.getWidth(array);
            this.p.OldProductHeight = resultHeight.toString();
            this.p.OldProductWidth = resultWidth.toString();
        }
    }
    iterateImages() {
        this.p.InstallImages = this.image.getInstallImages();
        this.p.RemoveImages = this.image.getRemoveImage();
    }
    getHeight(array) {
        var result = [];
        array.forEach(item => {
            result.push(item.height);
        });
        return result;
    }
    getWidth(array) {
        var result = [];
        array.forEach(item => {
            result.push(item.width);
        });
        return result;
    }
    checkEmployeeInfoIsRefuse() {
        var obj = this.employeeInfo;
        this.p.CrewName = obj.installCrew.toString();
        this.p.OrderNumber = obj.orderNumber.toString();
        this.p.IFGSaleRepName = obj.salesRep;
        this.p.IFGSaleRepContactNumber = obj.salesRepContactNumber;
        if (obj.custRefused) {
            this.checkRefuseInfo();
            return false;
        }
        else
            return true;
    }
    checkRefuseInfo() {
        var obj = this.employeeInfo;
        this.p.ManagerInstructions = obj.managerInstructions;
        this.p.ManagerName = obj.managerName;
        this.p.ManagerNumber = obj.managerNumber;
        this.p.ManagerProceed = obj.managerProceed;
    }
    // abstracted pdf embed functions
    embedManagerResponse(pdfDoc) {
        if (!(this.checkEmployeeInfoIsRefuse())) {
            const page = pdfDoc.addPage([350, 350]);
            var textsize = 10;
            var labelX = 30;
            var textX = 150;
            var mNY1 = 300;
            page.drawText('Manager Name:', { x: labelX, y: mNY1, size: textsize });
            page.drawText(this.p.ManagerName, { x: textX, y: mNY1, size: textsize });
            var miY = 240;
            page.drawText('Manager Instructions', { x: labelX, y: miY, size: textsize });
            page.drawText(this.p.ManagerInstructions, { x: textX, y: miY, size: textsize, });
            var mnY = 180;
            page.drawText('Manager Number:', { x: labelX, y: mnY, size: textsize });
            page.drawText(this.p.ManagerNumber, { x: textX, y: mnY, size: textsize });
            var pY = 120;
            page.drawText('Instructed to proceed?:', { x: labelX, y: pY, size: textsize });
            if (this.p.ManagerProceed) {
                page.drawText('yes', { x: textX, y: pY, size: textsize });
            }
            else
                page.drawText('no', { x: textX, y: pY, size: textsize });
        }
    }
    embedImages(pdfDoc) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.p.InstallImages) {
                for (const value of this.p.InstallImages) {
                    const page = pdfDoc.addPage();
                    var pageWidth = page.getWidth();
                    var pageHeight = page.getHeight();
                    var imageA = yield pdfDoc.embedJpg(value);
                    const imageDims = imageA.scaleToFit(pageWidth - 100, pageHeight - 100);
                    var imageWidth = imageDims.width;
                    var imageHeight = imageDims.height;
                    // center the boy
                    var startingX = (pageWidth - imageWidth) / 2;
                    var startingY = (pageHeight - imageHeight) / 2;
                    page.drawImage(imageA, {
                        x: startingX,
                        y: startingY,
                        width: imageWidth,
                        height: imageHeight,
                    });
                }
            }
            if (this.p.RemoveImages) {
                for (const value of this.p.RemoveImages) {
                    const page = pdfDoc.addPage();
                    var pageWidth = page.getWidth();
                    var pageHeight = page.getHeight();
                    var imageA = yield pdfDoc.embedJpg(value);
                    const imageDims = imageA.scaleToFit(pageWidth - 100, pageHeight - 100);
                    var imageWidth = imageDims.width;
                    var imageHeight = imageDims.height;
                    // center the box
                    var startingX = (pageWidth - imageWidth) / 2;
                    var startingY = (pageHeight - imageHeight) / 2;
                    page.drawImage(imageA, {
                        x: startingX,
                        y: startingY,
                        width: imageWidth,
                        height: imageHeight,
                    });
                }
            }
        });
    }
    embedMandatoryFields(form) {
        // mandatory fields (door height, order number etc)
        const dateField = form.getTextField('Date');
        dateField.setText(this.p.Date);
        const CrewName = form.getTextField('CrewName');
        CrewName.setText(this.p.CrewName);
        const OrderNumber = form.getTextField('OrderNumber');
        OrderNumber.setText(this.p.OrderNumber);
        const IFGSaleRepName = form.getTextField('IFGSaleRepName');
        IFGSaleRepName.setText(this.p.IFGSaleRepName);
        const IFGSaleRepContactNumber = form.getTextField('IFGSaleRepContactNumber');
        IFGSaleRepContactNumber.setText(this.p.IFGSaleRepContactNumber);
        var doorInstallHeight = this.p.DoorHeight;
        const doorInstallHeightField = form.getTextField('DoorHeight');
        doorInstallHeightField.setText(doorInstallHeight);
        var doorInstallWidth = this.p.DoorWidth;
        const doorInstallWidthField = form.getTextField('DoorWidth');
        doorInstallWidthField.setText(doorInstallWidth);
        var oldDoorInstallHeight = this.p.OldDoorHeight;
        const oldDoorInstallHeightField = form.getTextField('OldDoorHeight');
        oldDoorInstallHeightField.setText(oldDoorInstallHeight);
        var oldDoorInstallWidth = this.p.OldDoorWidth;
        const oldDoorInstallWidthField = form.getTextField('OldDoorWidth');
        oldDoorInstallWidthField.setText(oldDoorInstallWidth);
        var productInstallHeight = this.p.ProductHeight;
        const productInstallHeightField = form.getTextField('ProductHeight');
        productInstallHeightField.setText(productInstallHeight);
        var productInstallWidth = this.p.ProductWidth;
        const productInstallWidthField = form.getTextField('ProductWidth');
        productInstallWidthField.setText(productInstallWidth);
        var oldProductInstallHeight = this.p.OldProductHeight;
        const oldProductInstallHeightField = form.getTextField('OldProductHeight');
        oldProductInstallHeightField.setText(oldProductInstallHeight);
        var oldProductInstallWidth = this.p.OldProductWidth;
        const oldProductInstallWidthField = form.getTextField('OldProductWidth');
        oldProductInstallWidthField.setText(oldProductInstallWidth);
    }
    embedConditionalFields(pdfDoc, form) {
        this.checkCustomerFields(pdfDoc, form);
        this.checkEmployeeFields(pdfDoc, form);
    }
    checkCustomerFields(pdfDoc, form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.p.CustomerSign1.length > 0) {
                const CustomerSign1 = form.getButton('CustomerSign1');
                var embimg = yield pdfDoc.embedPng(this.p.CustomerSign1);
                CustomerSign1.setImage(embimg);
                const CustomerPrint1 = form.getTextField('CustomerPrint1');
                CustomerPrint1.setText(this.p.CustomerPrint1);
                const CustomerDate1 = form.getTextField('CustomerDate1');
                CustomerDate1.setText(this.p.Date);
            }
            if (this.p.CustomerSign2.length > 0) {
                const CustomerSign2 = form.getButton('CustomerSign2');
                var embimg = yield pdfDoc.embedPng(this.p.CustomerSign2);
                CustomerSign2.setImage(embimg);
                const CustomerPrint2 = form.getTextField('CustomerPrint2');
                CustomerPrint2.setText(this.p.CustomerPrint2);
                const CustomerDate2 = form.getTextField('CustomerDate2');
                CustomerDate2.setText(this.p.Date);
            }
            if (this.p.CustomerSign3.length > 0) {
                const CustomerSign3 = form.getButton('CustomerSign3');
                var embimg = yield pdfDoc.embedPng(this.p.CustomerSign3);
                CustomerSign3.setImage(embimg);
                const CustomerPrint3 = form.getTextField('CustomerPrint3');
                CustomerPrint3.setText(this.p.CustomerPrint3);
                const CustomerDate3 = form.getTextField('CustomerDate3');
                CustomerDate3.setText(this.p.Date);
            }
            if (this.p.CustomerSign4.length > 0) {
                const CustomerSign4 = form.getButton('CustomerSign4');
                var embimg = yield pdfDoc.embedPng(this.p.CustomerSign4);
                CustomerSign4.setImage(embimg);
                const CustomerPrint4 = form.getTextField('CustomerPrint4');
                CustomerPrint4.setText(this.p.CustomerPrint4);
                const CustomerDate4 = form.getTextField('CustomerDate4');
                CustomerDate4.setText(this.p.Date);
            }
            if (this.p.CustomerSign5.length > 0) {
                const CustomerSign5 = form.getButton('CustomerSign5');
                var embimg = yield pdfDoc.embedPng(this.p.CustomerSign5);
                CustomerSign5.setImage(embimg);
                const CustomerPrint5 = form.getTextField('CustomerPrint5');
                CustomerPrint5.setText(this.p.CustomerPrint5);
                const CustomerDate5 = form.getTextField('CustomerDate5');
                CustomerDate5.setText(this.p.Date);
            }
        });
    }
    checkEmployeeFields(pdfDoc, form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.p.EmployeeSign1.length > 0) {
                const EmployeeSign1 = form.getButton('EmployeeSign1');
                var embimg = yield pdfDoc.embedPng(this.p.EmployeeSign1);
                EmployeeSign1.setImage(embimg);
                const EmployeePrint1 = form.getTextField('EmployeePrint1');
                EmployeePrint1.setText(this.p.EmployeePrint1);
                const EmployeeDate1 = form.getTextField('EmployeeDate1');
                EmployeeDate1.setText(this.p.Date);
            }
            if (this.p.EmployeeSign2.length > 0) {
                const EmployeeSign2 = form.getButton('EmployeeSign2');
                var embimg = yield pdfDoc.embedPng(this.p.EmployeeSign2);
                EmployeeSign2.setImage(embimg);
                const EmployeePrint2 = form.getTextField('EmployeePrint2');
                EmployeePrint2.setText(this.p.EmployeePrint2);
                const EmployeeDate2 = form.getTextField('EmployeeDate2');
                EmployeeDate2.setText(this.p.Date);
            }
        });
    }
}
MakePDFService.ɵfac = function MakePDFService_Factory(t) { return new (t || MakePDFService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_signature_handler_service__WEBPACK_IMPORTED_MODULE_3__.SignatureHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_dimension_service__WEBPACK_IMPORTED_MODULE_4__.DimensionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_employee_details_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeDetailsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_image_holder_service__WEBPACK_IMPORTED_MODULE_6__.ImageHolderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
MakePDFService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: MakePDFService, factory: MakePDFService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8233:
/*!*******************************************************!*\
  !*** ./src/app/services/signature-handler.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignatureHandlerService": () => (/* binding */ SignatureHandlerService)
/* harmony export */ });
/* harmony import */ var _classes_signature_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/signature-info */ 8287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _step_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step.service */ 7889);
/* harmony import */ var _valid_dim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid-dim.service */ 7198);





class SignatureHandlerService {
    constructor(router, step, valid) {
        this.router = router;
        this.step = step;
        this.valid = valid;
        this.custSigArray = [];
        this.employSigArray = [];
        this.subStep = 0;
        this.isCust = true;
        this.isEmployee = false;
        this.passInstallStatus = false;
        this.passRemoveStatus = false;
        this.completeCustSig = false;
        this.completeEmpSig = false;
        this.valid.testObs.subscribe(x => this.passInstallStatus = x);
        this.valid.testObs2.subscribe(x => this.passRemoveStatus = x);
    }
    //call to update state with valid service
    checkDiff() {
        const custDiff = this.getCustArrayDiff();
        const empDiff = this.getEmpArrayDiff();
        if (!(this.passInstallStatus && this.passRemoveStatus)) {
            var cust = this.checkCust(custDiff, empDiff);
        }
        else
            cust = true;
        var step = this.checkStep1(custDiff, empDiff);
        this.subStep = step;
        this.isCust = cust;
    }
    checkRepeat() {
        switch (this.checkStatus()) {
            case 1:
                if (!this.checkComplete()) {
                    this.step.reloadComponent();
                }
                else {
                    this.valid.installComplete();
                    this.router.navigate(['check-remove']);
                }
                break;
            case 2:
                if (!this.checkComplete()) {
                    this.step.reloadComponent();
                }
                else {
                    this.valid.removeComplete();
                    this.router.navigate(['proceed']);
                }
                break;
            case 3:
                this.router.navigate(['complete']);
        }
    }
    checkSigIsCust() {
        var v = this.checkCustStep() ? true : false;
        return v;
    }
    createSigInfo(uri, name, date) {
        var y = new _classes_signature_info__WEBPACK_IMPORTED_MODULE_0__.SignatureInfo;
        y.date = date;
        y.isCustomer = this.isCust;
        y.isEmployee = !this.isCust;
        y.step = this.checkStep();
        y.signatureImg = uri;
        y.name = name;
        return y;
    }
    pushtoArray(siginfo) {
        var returnCode;
        if (siginfo.isCustomer == true) {
            this.custSigArray.push(siginfo);
            returnCode = 1;
        }
        else if (siginfo.isEmployee == true) {
            this.employSigArray.push(siginfo);
            returnCode = 2;
        }
        else
            returnCode = 0;
        return returnCode;
    }
    getCustArrayDiff() {
        var result = this.valid.custSig - this.custSigArray.length;
        return result;
    }
    getEmpArrayDiff() {
        var result = this.valid.employeeSig - this.employSigArray.length;
        return result;
    }
    checkCust(custDiff, empDiff) {
        if (custDiff > empDiff)
            return true;
        if (custDiff == empDiff)
            return false;
        if (custDiff < empDiff)
            return true;
        return false;
    }
    checkStep1(custDiff, empDiff) {
        var result = 0;
        if (custDiff > empDiff || custDiff == empDiff)
            result = 1;
        if (custDiff > empDiff && empDiff == 0)
            result = 2;
        return result;
    }
    checkLength() {
        var v = this.custSigArray.length + this.employSigArray.length;
        return v;
    }
    checkComplete() {
        if (this.checkLength() == this.valid.sigNumber) {
            return true;
        }
        else
            return false;
    }
    checkStatus() {
        if (this.passInstallStatus && this.passRemoveStatus)
            return 3;
        if (!this.passInstallStatus)
            return 1;
        if (!this.passRemoveStatus)
            return 2;
        return 0;
    }
    checkCustStep() {
        var result;
        if (this.checkLength() % 2 == 0)
            result = true;
        else
            result = false;
        if (this.passInstallStatus && this.passRemoveStatus)
            result = true;
        this.isCust = result;
        return result;
    }
    checkStep() {
        var person;
        var state;
        switch (this.checkStatus()) {
            case 1:
                state = 'install';
                break;
            case 2:
                state = 'remove';
                break;
        }
        if (this.isCust)
            person = 'customer';
        else
            person = 'employee';
        if (this.passInstallStatus && this.passRemoveStatus) {
            this.isCust = true;
            this.isEmployee = false;
            state = "installFinal";
            person = "customer";
            return person + "_" + state;
        }
        return (person + "_" + state + this.subStep);
    }
}
SignatureHandlerService.ɵfac = function SignatureHandlerService_Factory(t) { return new (t || SignatureHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_step_service__WEBPACK_IMPORTED_MODULE_1__.StepService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_valid_dim_service__WEBPACK_IMPORTED_MODULE_2__.ValidDimService)); };
SignatureHandlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SignatureHandlerService, factory: SignatureHandlerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7889:
/*!******************************************!*\
  !*** ./src/app/services/step.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepService": () => (/* binding */ StepService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _employee_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-details.service */ 8125);



class StepService {
    constructor(route, emp) {
        this.route = route;
        this.emp = emp;
    }
    setStepRefuse() {
        this.emp.custRefusePrep();
        this.route.navigate(['cust-refuse']);
    }
    restart() {
        this.route.navigate(['emp-info']);
        this.reloadComponent();
    }
    reloadComponent(hasParams) {
        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        if (hasParams) {
            this.route.navigate([hasParams], { queryParams: {} });
        }
        else
            this.route.navigate([currentUrl]);
    }
}
StepService.ɵfac = function StepService_Factory(t) { return new (t || StepService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_employee_details_service__WEBPACK_IMPORTED_MODULE_0__.EmployeeDetailsService)); };
StepService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StepService, factory: StepService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7198:
/*!***********************************************!*\
  !*** ./src/app/services/valid-dim.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidDimService": () => (/* binding */ ValidDimService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dimension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimension.service */ 4226);
/* harmony import */ var _image_holder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-holder.service */ 6014);




class ValidDimService {
    constructor(dimService, image) {
        this.dimService = dimService;
        this.image = image;
        this.passInstall = false;
        this.passRemoval = false;
        this.neededRemoval = false;
        this.testObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.passInstall);
        this.testObs2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.passRemoval);
        this.installRequiredSigs = false;
        this.removeRequiredSigs = false;
        this.installObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.installRequiredSigs);
        this.removeObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.removeRequiredSigs);
        this.installEverFalse = false;
        this.checkIfEverNotValid = false;
        this.sigNumber = 0;
        this.custSig = 0;
        this.employeeSig = 0;
    }
    checkValues(remove) {
        if (remove) {
            var p = this.dimService.productRemoveDimArray;
            var t = this.dimService.travelRemoveDimArray;
        }
        else {
            p = this.dimService.productDimArray;
            t = this.dimService.travelDimArray;
        }
        var pWidth = 0;
        var pHeight = 0;
        var tWidth = 0;
        var tHeight = 0;
        var isValid = true;
        p.forEach(function (arrayItem) {
            var x = arrayItem.width;
            var y = arrayItem.height;
            if (!(pWidth > x))
                pWidth = x;
            if (!(pHeight > y))
                pHeight = y;
        });
        t.forEach(function (arrayItem) {
            var newValueWidth = arrayItem.width;
            var newValueHeight = arrayItem.height;
            if (!(tWidth < newValueWidth && tWidth != 0))
                tWidth = newValueWidth;
            if (!(tHeight < newValueHeight && tHeight != 0))
                tHeight = newValueHeight;
        });
        if (pWidth >= tWidth || pHeight >= tHeight) {
            isValid = false;
        }
        this.checkifEverFalse(isValid);
        this.checkState(isValid, remove);
        return isValid;
    }
    checkState(isValid, remove) {
        if (!isValid && !remove) {
            this.image.needsInstall();
            this.installIncomplete();
            this.needInstallSigs();
        }
        else if (isValid && !remove) {
            this.installComplete();
            this.image.needsInstall();
        }
        if (!isValid && remove) {
            this.neededRemoval = true;
            this.image.needsRemove();
            this.removeIncomplete();
            this.needRemoveSigs();
        }
        else if (isValid && remove) {
            this.neededRemoval = true;
            this.image.needsRemove();
            this.sigNumber += 1;
            this.custSig += 1;
        }
    }
    checkifEverFalse(bool) {
        if (!bool)
            this.checkIfEverNotValid = true;
    }
    needInstallSigs() {
        this.installObs.next(true);
        this.custSig += 2;
        this.employeeSig += 1;
        this.sigNumber += 3;
    }
    needRemoveSigs() {
        this.removeObs.next(true);
        this.custSig += 2;
        this.employeeSig += 1;
        this.sigNumber += 3;
    }
    installComplete() {
        this.testObs.next(true);
        this.installObs.next(false);
    }
    removeComplete() {
        this.testObs2.next(true);
        this.removeObs.next(false);
    }
    installIncomplete() {
        this.testObs.next(false);
        this.installEverFalse = true;
    }
    removeIncomplete() {
        this.testObs2.next(false);
    }
}
ValidDimService.ɵfac = function ValidDimService_Factory(t) { return new (t || ValidDimService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_dimension_service__WEBPACK_IMPORTED_MODULE_0__.DimensionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_image_holder_service__WEBPACK_IMPORTED_MODULE_1__.ImageHolderService)); };
ValidDimService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ValidDimService, factory: ValidDimService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map