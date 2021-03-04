(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-produtos-produtos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-form/produto-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-form/produto-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb [items]=\"[{text: 'Produtos', link: '/produtos'}, {text: pageTitle}]\"></app-bread-crumb>\r\n\r\n<app-page-header [pageTitle]=\"pageTitle\" buttonText=\"Voltar\" buttonLink=\"/produtos\" matIcon=\"arrow_back\">\r\n</app-page-header>\r\n\r\n<form [formGroup]=\"resourceForm\" id=\"resourceForm\" (submit)=\"submitForm()\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Informações sobre a Produto\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-3 border rounded-lg text-center p-3\">\r\n          <img *ngIf=\"!imageSrc\" src=\"{{bucketUrl}}/prod{{resource.id}}.jpg\" style=\"height: 150px; width:150px\">\r\n          <img [src]=\"imageSrc\" *ngIf=\"imageSrc\" style=\"height: 150px; width:150px\">\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <div class=\"form-group\">\r\n            <div class=\"custom-file\" id=\"customFile\">\r\n              <input type=\"file\" class=\"custom-file-input\" id=\"file\" formControlName=\"file\"\r\n                     (change)=\"onFileChange($event)\" accept=\".jpg\">\r\n              <label class=\"custom-file-label\" for=\"file\" data-browse=\"Selecionar Foto\">{{fileName}}\r\n                <mat-icon>file_upload</mat-icon>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-md-2\">\r\n        <mat-form-field>\r\n          <mat-label>Categorias</mat-label>\r\n          <mat-select placeholder=\"Selecione uma Categoria\" #matSelect>\r\n            <mat-option [value]=\"null\">Escolha a Categoria</mat-option>\r\n            <mat-option *ngFor=\"let opcao of listaCategoria\" [value]=\"opcao\"\r\n                        (onSelectionChange)=\"selectCategoria(opcao)\">\r\n              {{opcao.nome}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <app-form-field-error [controlName]=\"resourceForm.get('categoria')\"></app-form-field-error>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <mat-form-field>\r\n            <mat-label for=\"nome\">Nome</mat-label>\r\n            <input matInput type=\"text\" id=\"nome\" formControlName=\"nome\">\r\n          </mat-form-field>\r\n          <app-form-field-error [controlName]=\"resourceForm.get('nome')\"></app-form-field-error>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <mat-form-field>\r\n            <mat-label for=\"descricao\">Descrição</mat-label>\r\n            <input matInput type=\"text\" id=\"descricao\" formControlName=\"descricao\">\r\n          </mat-form-field>\r\n          <app-form-field-error [controlName]=\"resourceForm.get('descricao')\"></app-form-field-error>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <mat-form-field>\r\n            <mat-label for=\"quantidade\">Quantidade</mat-label>\r\n            <input matInput type=\"text\" id=\"quantidade\" formControlName=\"quantidade\">\r\n          </mat-form-field>\r\n          <app-form-field-error [controlName]=\"resourceForm.get('quantidade')\"></app-form-field-error>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <mat-form-field>\r\n            <mat-label for=\"preco\">Preço</mat-label>\r\n            <input matInput type=\"text\" id=\"preco\" formControlName=\"preco\">\r\n          </mat-form-field>\r\n          <app-form-field-error [controlName]=\"resourceForm.get('preco')\"></app-form-field-error>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n  <button type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\"\r\n          [disabled]=\"submittingForm || resourceForm.invalid\">\r\n    Salvar\r\n  </button>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-list/produto-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-list/produto-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb\r\n  [items]=\"[{text: 'Produtos'}]\"\r\n></app-bread-crumb>\r\n\r\n<app-page-header\r\n  pageTitle=\"Produtos\"\r\n  buttonText=\"Nova Produto\"\r\n  matIcon= \"add_circle_outline\"\r\n  buttonLink=\"new\">\r\n</app-page-header>\r\n\r\n<mat-form-field>\r\n  <div class=\"col-md-12 text-right\">\r\n    <mat-label>Filtrar</mat-label>\r\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar\">\r\n  </div>\r\n</mat-form-field>\r\n\r\n<table mat-table  [dataSource]=\"dataSource\"class=\"table table-striped ml-2\" matSort  >\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"id\" >\r\n    <th   *matHeaderCellDef mat-sort-header> ID </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}}\r\n      <img src=\"{{bucketUrl}}/cat{{element.id}}.jpg\" style=\"height: 50px; width:50px\">\r\n    </td>\r\n\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"nome\" >\r\n    <th *matHeaderCellDef mat-sort-header > Nome </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"descricao\" >\r\n    <th  *matHeaderCellDef mat-sort-header> Descrição </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.descricao}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"acao\">\r\n    <th *matHeaderCellDef > Ações </th>\r\n    <td  mat-cell *matCellDef=\"let element\">\r\n      <mat-icon [routerLink]=\"[element.id, 'edit']\" color=\"primary\">edit</mat-icon>\r\n      <mat-icon (click)=\"openDialog(element)\" color=\"warn\">delete_outline</mat-icon>\r\n      </td >\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n </table>\r\n\r\n <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n<mat-paginator [pageSize]=\"5\"\r\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n\r\n\r\n");

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



/***/ }),

/***/ "./src/app/pages/produtos/produto-form/produto-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/produtos/produto-form/produto-form.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1dG9zL3Byb2R1dG8tZm9ybS9wcm9kdXRvLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/produtos/produto-form/produto-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/produtos/produto-form/produto-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProdutoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoFormComponent", function() { return ProdutoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var _shared_service_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/produto.service */ "./src/app/pages/produtos/shared/service/produto.service.ts");
/* harmony import */ var _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/produto.model */ "./src/app/pages/produtos/shared/model/produto.model.ts");
/* harmony import */ var _categorias_shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../categorias/shared/model/categoria.model */ "./src/app/pages/categorias/shared/model/categoria.model.ts");
/* harmony import */ var _categorias_shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../categorias/shared/service/categoria.service */ "./src/app/pages/categorias/shared/service/categoria.service.ts");









var ProdutoFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProdutoFormComponent, _super);
    function ProdutoFormComponent(produtoService, categoriaService, injector, alertService) {
        var _this = _super.call(this, injector, new _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__["Produto"](), produtoService, _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__["Produto"].fromJson, alertService) || this;
        _this.produtoService = produtoService;
        _this.categoriaService = categoriaService;
        _this.injector = injector;
        _this.alertService = alertService;
        _this.produto = new _shared_model_produto_model__WEBPACK_IMPORTED_MODULE_6__["Produto"]();
        _this.categoriaSelecionado = new _categorias_shared_model_categoria_model__WEBPACK_IMPORTED_MODULE_7__["Categoria"]();
        _this.listaCategoria = [];
        return _this;
    }
    ProdutoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
        this.categoriaService.getAll().subscribe(function (response) {
            _this.listaCategoria = response;
        });
    };
    ProdutoFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            descricao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)])],
            quantidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            preco: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fileSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            categoria: [this.categoriaSelecionado, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    };
    ProdutoFormComponent.prototype.creationPageTitle = function () {
        return 'Cadastro de Novo Produto';
    };
    ProdutoFormComponent.prototype.editionPageTitle = function () {
        var produtoNome = this.resource.nome || '';
        return "Editando Produto: " + produtoNome;
    };
    ProdutoFormComponent.prototype.selectCategoria = function (categoria) {
        this.categoriaSelecionado = categoria;
    };
    ProdutoFormComponent.ctorParameters = function () { return [
        { type: _shared_service_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"] },
        { type: _categorias_shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_8__["CategoriaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"] }
    ]; };
    ProdutoFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./produto-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-form/produto-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./produto-form.component.css */ "./src/app/pages/produtos/produto-form/produto-form.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"],
            _categorias_shared_service_categoria_service__WEBPACK_IMPORTED_MODULE_8__["CategoriaService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"]])
    ], ProdutoFormComponent);
    return ProdutoFormComponent;
}(src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/produtos/produto-list/produto-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/produtos/produto-list/produto-list.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1dG9zL3Byb2R1dG8tbGlzdC9wcm9kdXRvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/produtos/produto-list/produto-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/produtos/produto-list/produto-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProdutoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListComponent", function() { return ProdutoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var _shared_service_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/produto.service */ "./src/app/pages/produtos/shared/service/produto.service.ts");
/* harmony import */ var src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/modal-confirmation/modal-confirmation.component */ "./src/app/shared/components/modal-confirmation/modal-confirmation.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");







var ProdutoListComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProdutoListComponent, _super);
    function ProdutoListComponent(produtoService, alertService, dialog) {
        var _this = _super.call(this, produtoService, alertService) || this;
        _this.produtoService = produtoService;
        _this.alertService = alertService;
        _this.dialog = dialog;
        _this.columns = [
            { columnDef: 'id', header: 'ID', cell: function (element) { return "" + element.id; } },
            { columnDef: 'nome', header: 'Nome', cell: function (element) { return "" + element.nome; } },
            { columnDef: 'descricao', header: 'Descrição', cell: function (element) { return "" + element.email; } },
            { columnDef: 'acao', header: 'Ações' },
        ];
        _this.displayedColumns = _this.columns.map(function (c) { return c.columnDef; });
        _this.componentName = 'Produtos';
        return _this;
    }
    ProdutoListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ProdutoListComponent.prototype.openDialog = function (row) {
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
    ProdutoListComponent.ctorParameters = function () { return [
        { type: _shared_service_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__["AlertModalService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    ProdutoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./produto-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produtos/produto-list/produto-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./produto-list.component.css */ "./src/app/pages/produtos/produto-list/produto-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"], src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_3__["AlertModalService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ProdutoListComponent);
    return ProdutoListComponent;
}(src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/produtos/produtos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/produtos/produtos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProdutosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosRoutingModule", function() { return ProdutosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto-list/produto-list.component */ "./src/app/pages/produtos/produto-list/produto-list.component.ts");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produto-form/produto-form.component */ "./src/app/pages/produtos/produto-form/produto-form.component.ts");
/* harmony import */ var _shared_resolvers_produto_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/resolvers/produto-resolver.guard */ "./src/app/pages/produtos/shared/resolvers/produto-resolver.guard.ts");






var routes = [
    {
        path: '',
        component: _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_3__["ProdutoListComponent"]
    },
    {
        path: 'new',
        component: _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"]
    },
    {
        path: ':id/edit',
        component: _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"],
        resolve: {
            resource: _shared_resolvers_produto_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ProdutoResolver"]
        }
    }
];
var ProdutosRoutingModule = /** @class */ (function () {
    function ProdutosRoutingModule() {
    }
    ProdutosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProdutosRoutingModule);
    return ProdutosRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/produtos/produtos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/produtos/produtos.module.ts ***!
  \***************************************************/
/*! exports provided: ProdutosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosModule", function() { return ProdutosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos-routing.module */ "./src/app/pages/produtos/produtos-routing.module.ts");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produto-form/produto-form.component */ "./src/app/pages/produtos/produto-form/produto-form.component.ts");
/* harmony import */ var _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto-list/produto-list.component */ "./src/app/pages/produtos/produto-list/produto-list.component.ts");






var ProdutosModule = /** @class */ (function () {
    function ProdutosModule() {
    }
    ProdutosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _produtos_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdutosRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [
                _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoListComponent"],
                _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"]
            ]
        })
    ], ProdutosModule);
    return ProdutosModule;
}());



/***/ }),

/***/ "./src/app/pages/produtos/shared/model/produto.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/produtos/shared/model/produto.model.ts ***!
  \**************************************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var Produto = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Produto, _super);
    function Produto(id, nome, descricao, preco, categoria, quantidadeTotal) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.nome = nome;
        _this.descricao = descricao;
        _this.preco = preco;
        _this.categoria = categoria;
        _this.quantidadeTotal = quantidadeTotal;
        return _this;
    }
    Produto.fromJson = function (jsonData) {
        return Object.assign(new Produto(), jsonData);
    };
    return Produto;
}(src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/produtos/shared/resolvers/produto-resolver.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/produtos/shared/resolvers/produto-resolver.guard.ts ***!
  \***************************************************************************/
/*! exports provided: ProdutoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoResolver", function() { return ProdutoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/produto.service */ "./src/app/pages/produtos/shared/service/produto.service.ts");



var ProdutoResolver = /** @class */ (function () {
    function ProdutoResolver(produtoService) {
        this.produtoService = produtoService;
    }
    ProdutoResolver.prototype.resolve = function (route) {
        if (route.params && route.params['id']) {
            return this.produtoService.getById(route.params['id']);
        }
        return null;
    };
    ProdutoResolver.ctorParameters = function () { return [
        { type: _service_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"] }
    ]; };
    ProdutoResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]])
    ], ProdutoResolver);
    return ProdutoResolver;
}());



/***/ }),

/***/ "./src/app/pages/produtos/shared/service/produto.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/produtos/shared/service/produto.service.ts ***!
  \******************************************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/base-resource.service */ "./src/app/shared/services/base-resource.service.ts");
/* harmony import */ var src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/config/api.config */ "./src/app/core/config/api.config.ts");
/* harmony import */ var _model_produto_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/produto.model */ "./src/app/pages/produtos/shared/model/produto.model.ts");





var ProdutoService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProdutoService, _super);
    function ProdutoService(injector) {
        var _this = _super.call(this, src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "/produtos", injector, _model_produto_model__WEBPACK_IMPORTED_MODULE_4__["Produto"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    ProdutoService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ProdutoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ProdutoService);
    return ProdutoService;
}(src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__["BaseResourceService"]));



/***/ })

}]);
//# sourceMappingURL=pages-produtos-produtos-module.js.map