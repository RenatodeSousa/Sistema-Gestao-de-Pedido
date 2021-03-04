(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-form/categoria-form.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-form/categoria-form.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb [items]=\"[{text: 'Categorias', link: '/categorias'}, {text: pageTitle}]\"></app-bread-crumb>\r\n\r\n<app-page-header [pageTitle]=\"pageTitle\" buttonText=\"Voltar\" buttonLink=\"/categorias\"  matIcon= \"arrow_back\">\r\n</app-page-header>\r\n\r\n<form [formGroup]=\"resourceForm\" id=\"resourceForm\" (submit)=\"submitForm()\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Informações sobre a categoria\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-3 border rounded-lg text-center p-3\">\r\n          <img *ngIf=\"!imageSrc\" src=\"{{bucketUrl}}/cat{{resource.id}}.jpg\" style=\"height: 150px; width:150px\">\r\n          <img [src]=\"imageSrc\" *ngIf=\"imageSrc\" style=\"height: 150px; width:150px\">\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <div class=\"form-group\">\r\n            <div class=\"custom-file\" id=\"customFile\">\r\n              <input  type=\"file\" class=\"custom-file-input\" id=\"file\" formControlName=\"file\"\r\n                (change)=\"onFileChange($event)\" accept=\".jpg\">\r\n              <label class=\"custom-file-label\" for=\"file\" data-browse=\"Selecionar Foto\">{{fileName}}\r\n                <mat-icon>file_upload</mat-icon>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <mat-form-field>\r\n            <mat-label for=\"nome\">Nome</mat-label>\r\n            <input matInput type=\"text\"  id=\"nome\" formControlName=\"nome\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group col-md-8\">\r\n          <mat-form-field>\r\n          <mat-label for=\"descricao\">Descrição</mat-label>\r\n          <input matInput type=\"text\"  id=\"descricao\" formControlName=\"descricao\">\r\n        </mat-form-field>\r\n          <app-form-field-error [nameCampo] =\"'descricao'\" [controlName]=\"resourceForm.get('descricao')\"></app-form-field-error>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\"\r\n    [disabled]=\"submittingForm || resourceForm.invalid\">\r\n    Salvar\r\n  </button>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-list/categoria-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-list/categoria-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb\n  [items]=\"[{text: 'Categorias'}]\"\n></app-bread-crumb>\n\n<app-page-header\n  pageTitle=\"Categorias\"\n  buttonText=\"Nova Categoria\"\n  matIcon= \"add_circle_outline\"\n  buttonLink=\"new\">\n</app-page-header>\n\n<mat-form-field>\n  <div class=\"col-md-12 text-right\">\n    <mat-label>Filtrar</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar\">\n  </div>\n</mat-form-field>\n\n<table mat-table  [dataSource]=\"dataSource\"class=\"table table-striped ml-2\" matSort  >\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\" >\n    <th   *matHeaderCellDef mat-sort-header> ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} \n      <img src=\"{{bucketUrl}}/cat{{element.id}}.jpg\" style=\"height: 50px; width:50px\">\n    </td>\n  \n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"nome\" >\n    <th *matHeaderCellDef mat-sort-header > Nome </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"descricao\" >\n    <th  *matHeaderCellDef mat-sort-header> Descrição </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.descricao}} </td>\n  </ng-container>\n  \n  <ng-container matColumnDef=\"acao\">\n    <th *matHeaderCellDef > Ações </th>\n    <td  mat-cell *matCellDef=\"let element\">  \n      <mat-icon [routerLink]=\"[element.id, 'edit']\" color=\"primary\">edit</mat-icon>\n      <mat-icon (click)=\"openDialog(element)\" color=\"warn\">delete_outline</mat-icon>\n      </td >\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n </table>\n \n <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\n<mat-paginator [pageSize]=\"5\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n\n\n");

/***/ }),

/***/ "./src/app/pages/categorias/categoria-form/categoria-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-form/categoria-form.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhLWZvcm0vY2F0ZWdvcmlhLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-form/categoria-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaFormComponent", function() { return CategoriaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/categoria.model */ "./src/app/pages/categorias/shared/model/categoria.model.ts");
/* harmony import */ var _shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/categoria.service */ "./src/app/pages/categorias/shared/service/categoria.service.ts");







var CategoriaFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CategoriaFormComponent, _super);
    function CategoriaFormComponent(categoriaService, injector, alertService) {
        var _this = _super.call(this, injector, new _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__["Categoria"](), categoriaService, _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__["Categoria"].fromJson, alertService) || this;
        _this.categoriaService = categoriaService;
        _this.injector = injector;
        _this.alertService = alertService;
        _this.categoria = new _shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_5__["Categoria"]();
        return _this;
    }
    CategoriaFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            descricao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CategoriaFormComponent.prototype.creationPageTitle = function () {
        return 'Cadastro de Nova Categoria';
    };
    CategoriaFormComponent.prototype.editionPageTitle = function () {
        var categoriaNome = this.resource.nome || '';
        return "Editando Categoria: " + categoriaNome;
    };
    CategoriaFormComponent.ctorParameters = function () { return [
        { type: _shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"] }
    ]; };
    CategoriaFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-form/categoria-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria-form.component.css */ "./src/app/pages/categorias/categoria-form/categoria-form.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"]])
    ], CategoriaFormComponent);
    return CategoriaFormComponent;
}(src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/categorias/categoria-list/categoria-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-list/categoria-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhLWxpc3QvY2F0ZWdvcmlhLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/categorias/categoria-list/categoria-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-list/categoria-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaListComponent", function() { return CategoriaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var _shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/categoria.service */ "./src/app/pages/categorias/shared/service/categoria.service.ts");
/* harmony import */ var src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/modal-confirmation/modal-confirmation.component */ "./src/app/shared/components/modal-confirmation/modal-confirmation.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");







var CategoriaListComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CategoriaListComponent, _super);
    function CategoriaListComponent(categoriaService, alertService, dialog) {
        var _this = _super.call(this, categoriaService, alertService) || this;
        _this.categoriaService = categoriaService;
        _this.alertService = alertService;
        _this.dialog = dialog;
        _this.columns = [
            { columnDef: 'id', header: 'ID', cell: function (element) { return "" + element.id; } },
            { columnDef: 'nome', header: 'Nome', cell: function (element) { return "" + element.nome; } },
            { columnDef: 'descricao', header: 'Descrição', cell: function (element) { return "" + element.email; } },
            { columnDef: 'acao', header: 'Ações' },
        ];
        _this.displayedColumns = _this.columns.map(function (c) { return c.columnDef; });
        _this.componentName = 'Categorias';
        return _this;
    }
    CategoriaListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    CategoriaListComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ModalConfirmationComponent"], {
            width: '400px',
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.deleteResource(row);
            }
        });
    };
    CategoriaListComponent.ctorParameters = function () { return [
        { type: _shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__["AlertModalService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    CategoriaListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categoria-list/categoria-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria-list.component.css */ "./src/app/pages/categorias/categoria-list/categoria-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaService"], src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__["AlertModalService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], CategoriaListComponent);
    return CategoriaListComponent;
}(src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/categorias/categorias-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasRoutingModule", function() { return CategoriasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoria-list/categoria-list.component */ "./src/app/pages/categorias/categoria-list/categoria-list.component.ts");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts");
/* harmony import */ var _shared_resolvers_categoria_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/resolvers/categoria-resolver.guard */ "./src/app/pages/categorias/shared/resolvers/categoria-resolver.guard.ts");






var routes = [
    {
        path: '',
        component: _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoriaListComponent"]
    },
    {
        path: 'new',
        component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"]
    },
    {
        path: ':id/edit',
        component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"],
        resolve: {
            resource: _shared_resolvers_categoria_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["CategoriaResolver"]
        }
    }
];
var CategoriasRoutingModule = /** @class */ (function () {
    function CategoriasRoutingModule() {
    }
    CategoriasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriasRoutingModule);
    return CategoriasRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/categorias/categorias.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/app/pages/categorias/categorias-routing.module.ts");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts");
/* harmony import */ var _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-list/categoria-list.component */ "./src/app/pages/categorias/categoria-list/categoria-list.component.ts");






var CategoriasModule = /** @class */ (function () {
    function CategoriasModule() {
    }
    CategoriasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _categorias_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriasRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [
                _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaListComponent"],
                _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"]
            ]
        })
    ], CategoriasModule);
    return CategoriasModule;
}());



/***/ }),

/***/ "./src/app/pages/categorias/shared/model/categoria.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/shared/model/categoria.model.ts ***!
  \******************************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var Categoria = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Categoria, _super);
    function Categoria(id, nome, descricao) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.nome = nome;
        _this.descricao = descricao;
        return _this;
    }
    Categoria.fromJson = function (jsonData) {
        return Object.assign(new Categoria(), jsonData);
    };
    return Categoria;
}(src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/categorias/shared/resolvers/categoria-resolver.guard.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/categorias/shared/resolvers/categoria-resolver.guard.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoriaResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaResolver", function() { return CategoriaResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/categoria.service */ "./src/app/pages/categorias/shared/service/categoria.service.ts");



var CategoriaResolver = /** @class */ (function () {
    function CategoriaResolver(categoriaService) {
        this.categoriaService = categoriaService;
    }
    CategoriaResolver.prototype.resolve = function (route) {
        if (route.params && route.params['id']) {
            return this.categoriaService.getById(route.params['id']);
        }
        return null;
    };
    CategoriaResolver.ctorParameters = function () { return [
        { type: _service_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"] }
    ]; };
    CategoriaResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"]])
    ], CategoriaResolver);
    return CategoriaResolver;
}());



/***/ }),

/***/ "./src/app/pages/categorias/shared/service/categoria.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/categorias/shared/service/categoria.service.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/base-resource.service */ "./src/app/shared/services/base-resource.service.ts");
/* harmony import */ var src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/config/api.config */ "./src/app/core/config/api.config.ts");
/* harmony import */ var _model_categoria_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/categoria.model */ "./src/app/pages/categorias/shared/model/categoria.model.ts");





var CategoriaService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CategoriaService, _super);
    function CategoriaService(injector) {
        var _this = _super.call(this, src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "/categorias", injector, _model_categoria_model__WEBPACK_IMPORTED_MODULE_4__["Categoria"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    CategoriaService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    CategoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], CategoriaService);
    return CategoriaService;
}(src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__["BaseResourceService"]));



/***/ })

}]);
//# sourceMappingURL=pages-categorias-categorias-module.js.map