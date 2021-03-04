(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vendedor-vendedor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-form/vendedor-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-form/vendedor-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb [items]=\"[{text: 'Vendedor', link: '/vendedores'}, {text: pageTitle}]\"></app-bread-crumb>\r\n<app-page-header [pageTitle]=\"pageTitle\" buttonText=\"Voltar\" buttonLink=\"/vendedores\" matIcon=\"arrow_back\">\r\n</app-page-header>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Cadastro de vendedor\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Vendedor\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <form [formGroup]=\"resourceForm\" id=\"resourceForm\" (submit)=\"submitForm()\">\r\n\r\n      <div class=\"card\">\r\n\r\n        <div class=\"card-body\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" align=\"center\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <mat-form-field>\r\n                <mat-label for=\"nome\">Nome</mat-label>\r\n                <input matInput type=\"text\" id=\"nome\" formControlName=\"nome\">\r\n              </mat-form-field>\r\n              <app-form-field-error [nameCampo]=\"'Nome'\" [controlName]=\"resourceForm.get('nome')\"></app-form-field-error>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <mat-form-field>\r\n                <mat-label for=\"Email\">E-mail</mat-label>\r\n                <input matInput type=\"text\" id=\"email\" formControlName=\"email\">\r\n              </mat-form-field>\r\n              <app-form-field-error  [nameCampo]=\"'E-mail'\" [controlName]=\"resourceForm.get('email')\"></app-form-field-error>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" align=\"center\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <mat-form-field>\r\n                <mat-label for=\"tipoFisicoJuridico\">Tipo de Pessoa:</mat-label>\r\n                <mat-select disableRipple id=\"tipoFisicoJuridico\" formControlName=\"tipoFisicoJuridico\"\r\n                            placeholder=\"Selecione\">\r\n                  <mat-option value='F'>Física</mat-option>\r\n                  <mat-option value='J'>Jurídica</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <app-form-field-error [nameCampo]=\"' Tipo Fisico / Juridico'\" [controlName]=\"resourceForm.get('tipoFisicoJuridico')\"></app-form-field-error>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n              <mat-form-field>\r\n                <mat-label for=\"cpfOuCnpj\">CPF ou CNPJ</mat-label>\r\n                <input matInput id=\"cpfOuCnpj\" [showMaskTyped]=\"true\" [dropSpecialCharacters]=\"false\"\r\n                       mask=\"000.000.000-00||00.000.000/0000-00\" formControlName=\"cpfOuCnpj\">\r\n              </mat-form-field>\r\n              <app-form-field-error  [nameCampo]=\"'CPF CNPJ'\" [controlName]=\"resourceForm.get('cpfOuCnpj')\"></app-form-field-error>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 \">\r\n            </div>\r\n            <div class=\"form-group col-md-3 \">\r\n              <div [formArrayName]=\"'telefones'\">\r\n                <mat-label (click)=\"addTelefones()\">Adicionar telefone a lista:</mat-label>\r\n                <mat-icon (click)=\"addTelefones()\" class=\"green-icon\">add_circle_outline</mat-icon>\r\n                <div class=\"scrollbar scrollbar-danger\">\r\n                  <div *ngFor=\"let t of  resourceForm.controls.telefones.value; let i = index\" [formGroupName]=\"i\">\r\n                    {{i}}\r\n                    <mat-form-field>\r\n                      <mat-label>Fone:</mat-label>\r\n                      <input matInput id=\"{{t.tel}}\" formControlName=\"tel\" [value]=\"t\" mask=\"(000) 000 00 00\">\r\n                      <mat-icon (click)=\"this.removeTelefones(i)\" color=\"warn\" matSuffix>delete_outline</mat-icon>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n              <mat-form-field>\r\n                <mat-label>Data de nascimento</mat-label>\r\n                <input matInput formControlName=\"dataNascimento\" [matDatepicker]=\"dataNascimento\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"dataNascimento\"></mat-datepicker-toggle>\r\n                <mat-datepicker #dataNascimento></mat-datepicker>\r\n              </mat-form-field>\r\n              <app-form-field-error [nameCampo]=\"'data de nascimento'\"  [controlName]=\"resourceForm.get('dataNascimento')\"></app-form-field-error>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"form-row\" align=\"center\">\r\n                <div class=\"form-group col-md-4\">\r\n                  <mat-label>Digite o CEP para pesquisa de endereço:</mat-label>\r\n                  <mat-form-field>\r\n                    <mat-label for=\"numeroCep\">cep</mat-label>\r\n                    <input matInput type=\"number\" #numeroCep id=\"numeroCep\">\r\n                    <mat-icon color=\"warn\" (click)=\" pesquisarCep(numeroCep.value)\"  matTooltip=\"Pesquisar por endereço\" matSuffix>search\r\n                    </mat-icon>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                  <div *ngIf=\"isEndereco\" [formGroup]=\"resourceForm.controls.endereco\">\r\n                    <input matInput  formControlName=\"cep\" >\r\n                    <input matInput formControlName=\"logradouro\">\r\n                      <input matInput formControlName=\"numero\" >\r\n                    <input matInput formControlName=\"bairro\" >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\"\r\n              [disabled]=\"submittingForm || resourceForm.invalid\">\r\n        Salvar\r\n      </button>\r\n    </form>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-list/vendedor-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-list/vendedor-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb [items]=\"[{text: 'Vendedores'}]\"></app-bread-crumb>\r\n\r\n<app-page-header pageTitle=\"Vendedores\" buttonText=\"Novo Vendedor\" matIcon=\"add_circle_outline\" buttonLink=\"new\">\r\n</app-page-header>\r\n\r\n<mat-form-field>\r\n  <div class=\"col-md-12 text-right\">\r\n    <mat-label>Filtrar</mat-label>\r\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar\">\r\n  </div>\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"table table-striped ml-2\" matSort>\r\n\r\n  <!-- Position Column -->\r\n\r\n  <ng-container matColumnDef=\"id\">\r\n    <th *matHeaderCellDef mat-sort-header> ID </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"nome\">\r\n    <th *matHeaderCellDef mat-sort-header> Nome </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"email\">\r\n    <th *matHeaderCellDef mat-sort-header> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"telefone\">\r\n    <th *matHeaderCellDef mat-sort-header>Telefone </th>\r\n    <mat-select  mat-cell disableRipple *matCellDef=\"let element\" placeholder=\"Visualizar Lista\">\r\n      <mat-option *ngFor=\"let tel of element.telefone\"  value='{{tel}}'>{{tel | mask: '(00) 000-0000'}}</mat-option>\r\n    </mat-select>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"status\">\r\n    <th *matHeaderCellDef mat-sort-header> Status Vendedor </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.status == true? 'Ativo':'Desativado' }} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"acao\">\r\n    <th *matHeaderCellDef> Ações </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-icon [routerLink]=\"[element.id, 'edit']\" color=\"primary\">edit</mat-icon>\r\n      <mat-icon (click)=\"openDialog(element)\" color=\"warn\">delete_outline</mat-icon>\r\n\r\n      <!-- <button class=\"btn btn-success ml-2\" data-toggle=\"modal\" (click)=\"editCreate(element)\" data-target=\"#modalEdit\">Adicionar</button>-->\r\n    </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n\r\n<app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/vendedor/shared/resolvers/vendedor-resolver.guard.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/vendedor/shared/resolvers/vendedor-resolver.guard.ts ***!
  \****************************************************************************/
/*! exports provided: VendedorResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorResolver", function() { return VendedorResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_vendedor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/vendedor.service */ "./src/app/pages/vendedor/shared/service/vendedor.service.ts");
/* harmony import */ var src_app_core_config_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/config/storage.service */ "./src/app/core/config/storage.service.ts");




var VendedorResolver = /** @class */ (function () {
    function VendedorResolver(vendedorService, storage) {
        this.vendedorService = vendedorService;
        this.storage = storage;
    }
    VendedorResolver.prototype.resolve = function (route) {
        var localUser = this.storage.getLocalUser();
        console.log('esta no resolver');
        if (route.params && route.params['id']) {
            return this.vendedorService.getById(route.params['id']);
        }
        if (localUser && localUser.email && route.routeConfig.path === 'profile') {
            return this.vendedorService.findByEmail(localUser.email);
        }
        return null;
    };
    VendedorResolver.ctorParameters = function () { return [
        { type: _service_vendedor_service__WEBPACK_IMPORTED_MODULE_2__["VendedorService"] },
        { type: src_app_core_config_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    VendedorResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_vendedor_service__WEBPACK_IMPORTED_MODULE_2__["VendedorService"], src_app_core_config_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], VendedorResolver);
    return VendedorResolver;
}());



/***/ }),

/***/ "./src/app/pages/vendedor/vendedor-form/VendedorFormComponent.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor-form/VendedorFormComponent.ts ***!
  \***********************************************************************/
/*! exports provided: VendedorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorFormComponent", function() { return VendedorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/vendedor.model */ "./src/app/pages/vendedor/shared/vendedor.model.ts");
/* harmony import */ var _shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/vendedor.service */ "./src/app/pages/vendedor/shared/service/vendedor.service.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var src_app_shared_enums_messages_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enums/messages.enum */ "./src/app/shared/enums/messages.enum.ts");
/* harmony import */ var src_app_shared_components_base_endereco_Form_base_endereco_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/base-endereco-Form/base-endereco-form.component */ "./src/app/shared/components/base-endereco-Form/base-endereco-form.component.ts");
/* harmony import */ var src_app_shared_components_base_endereco_Form_shared_service_endereco_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/base-endereco-Form/shared/service/endereco.service */ "./src/app/shared/components/base-endereco-Form/shared/service/endereco.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);












var VendedorFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VendedorFormComponent, _super);
    function VendedorFormComponent(vendedorService, injector, dialog, enderecoService, alertService) {
        var _this = _super.call(this, injector, new _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__["Vendedor"](), vendedorService, _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__["Vendedor"].fromJson, alertService) || this;
        _this.vendedorService = vendedorService;
        _this.injector = injector;
        _this.dialog = dialog;
        _this.enderecoService = enderecoService;
        _this.alertService = alertService;
        _this.vendedor = new _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__["Vendedor"]();
        _this.isEndereco = false;
        _this.profileImage = 'assets/img/avatar.png';
        return _this;
    }
    VendedorFormComponent.prototype.buildEnderecoResourceForm = function (endereco) {
        return this.formBuilder.group({
            id: [endereco.id],
            cep: [endereco.cep],
            logradouro: [endereco.logradouro],
            complemento: [endereco.complemento],
            numero: [endereco.numero],
            bairro: [endereco.bairro],
            localidade: [endereco.localidade],
            uf: [endereco.uf],
            unidade: [endereco.unidade],
            ibge: [endereco.ibge],
            gia: [endereco.gia],
        });
    };
    VendedorFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])],
            tipoFisicoJuridico: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            telefones: this.formBuilder.array([]),
            cpfOuCnpj: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11) || _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(14)])],
            dataNascimento: [this.resource.dataNascimento],
        });
    };
    VendedorFormComponent.prototype.creationPageTitle = function () {
        return 'Cadastro de Novo Vendedor';
    };
    VendedorFormComponent.prototype.editionPageTitle = function () {
        var vendedorNome = this.resource.nome || '';
        return "Editando Vendedor: " + vendedorNome;
    };
    VendedorFormComponent.prototype.pesquisarCep = function (cep) {
        var _this = this;
        if (cep.length === 0) {
            this.openDialogEditCreate(null);
        }
        else {
            this.enderecoService.findByCep(cep)
                .subscribe(function (response) {
                _this.openDialogEditCreate(response);
            }, function (error) {
                _this.alertService.showAlertWarning(src_app_shared_enums_messages_enum__WEBPACK_IMPORTED_MODULE_7__["default"].FALHA_SERVIDOR);
            });
        }
    };
    Object.defineProperty(VendedorFormComponent.prototype, "telefones", {
        get: function () {
            return this.resourceForm.get('telefones');
        },
        enumerable: true,
        configurable: true
    });
    VendedorFormComponent.prototype.newTelefone = function () {
        return this.formBuilder.group({
            tel: [],
        });
    };
    VendedorFormComponent.prototype.addTelefones = function () {
        this.telefones.push(this.newTelefone());
    };
    VendedorFormComponent.prototype.removeTelefones = function (i) {
        this.telefones.removeAt(i);
    };
    VendedorFormComponent.prototype.loadResource = function () {
        var _this = this;
        if (this.currentAction === 'edit') {
            var routeResource = this.route.snapshot.data['resource'];
            if (routeResource) {
                this.resource = routeResource;
                this.resourceForm.patchValue(this.resource);
                this.registrarGroupEndereco(this.resource.endereco);
                this.includeTelefoneForm();
            }
            else {
                setTimeout(function () {
                    _this.alertService.showAlertDanger(src_app_shared_enums_messages_enum__WEBPACK_IMPORTED_MODULE_7__["default"].FALHA_SERVIDOR);
                    _this.resourceForm.disable();
                }, 100);
            }
        }
    };
    VendedorFormComponent.prototype.registrarGroupEndereco = function (endereco) {
        var campoExiste = this.resourceForm.get('endereco');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_11__["isNull"])(campoExiste)) {
            this.removerEndereco();
        }
        if (endereco != null) {
            this.isEndereco = true;
            this.resourceForm.registerControl('endereco', this.buildEnderecoResourceForm(endereco));
        }
    };
    VendedorFormComponent.prototype.removerEndereco = function () {
        this.resourceForm.removeControl('endereco');
        this.resourceForm.updateValueAndValidity();
    };
    VendedorFormComponent.prototype.includeTelefoneForm = function () {
        var _this = this;
        if (this.resource !== undefined) {
            Object.keys(this.resource.telefones).forEach(function (i) {
                _this.telefones.push(_this.formBuilder.group({
                    tel: [_this.resource.telefones[i]],
                }));
            });
        }
    };
    VendedorFormComponent.prototype.openDialogEditCreate = function (response) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            endereco: response
        };
        var dialogRef = this.dialog.open(src_app_shared_components_base_endereco_Form_base_endereco_form_component__WEBPACK_IMPORTED_MODULE_8__["BaseEnderecoFormComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                _this.registrarGroupEndereco(result);
                _this.alertService.showAlertSuccess('Endereço adicionado com Sucesso');
                _this.isEndereco = true;
            }
        });
    };
    VendedorFormComponent.prototype.getControls = function () {
        return this.resourceForm.get('telefones').controls;
    };
    VendedorFormComponent.ctorParameters = function () { return [
        { type: _shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__["VendedorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: src_app_shared_components_base_endereco_Form_shared_service_endereco_service__WEBPACK_IMPORTED_MODULE_9__["EnderecoService"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"] }
    ]; };
    VendedorFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendedor-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendedor-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-form/vendedor-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendedor-form.component.css */ "./src/app/pages/vendedor/vendedor-form/vendedor-form.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__["VendedorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            src_app_shared_components_base_endereco_Form_shared_service_endereco_service__WEBPACK_IMPORTED_MODULE_9__["EnderecoService"],
            src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"]])
    ], VendedorFormComponent);
    return VendedorFormComponent;
}(src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/vendedor/vendedor-form/vendedor-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor-form/vendedor-form.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-expansion-panel-header.mat-expanded,\r\n.mat-expansion-panel-header.mat-expanded:hover,\r\n.mat-expansion-panel-header.mat-expanded:focus {\r\n      background-color: rgba(133, 5, 5, 0.89);\r\n  }\r\n\r\n.scrollbar {\r\n    margin-left: 30px;\r\n    float: bottom;\r\n    height: content-box;\r\n    width: content-box;\r\n    background: #fff;\r\n    overflow-y: scroll;\r\n    margin-bottom: 25px;\r\n    }\r\n\r\n.force-overflow {\r\n    min-height: 450px;\r\n    }\r\n\r\n.scrollbar-danger::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n\r\n.scrollbar-danger::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n\r\n.scrollbar-danger::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #ff3547; }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVuZGVkb3IvdmVuZGVkb3ItZm9ybS92ZW5kZWRvci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7OztNQUdNLHVDQUF1QztFQUMzQzs7QUFLQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjs7QUFDQTtJQUNBLGlCQUFpQjtJQUNqQjs7QUFJQTtJQUNBLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUU7O0FBRXJCO0lBQ0EsV0FBVztJQUNYLHlCQUF5QixFQUFFOztBQUUzQjtJQUNBLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQseUJBQXlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZW5kZWRvci92ZW5kZWRvci1mb3JtL3ZlbmRlZG9yLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkLFxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVyLFxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDUsIDUsIDAuODkpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLnNjcm9sbGJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGZsb2F0OiBib3R0b207XHJcbiAgICBoZWlnaHQ6IGNvbnRlbnQtYm94O1xyXG4gICAgd2lkdGg6IGNvbnRlbnQtYm94O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuZm9yY2Utb3ZlcmZsb3cge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuc2Nyb2xsYmFyLWRhbmdlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XHJcblxyXG4gICAgLnNjcm9sbGJhci1kYW5nZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgfVxyXG5cclxuICAgIC5zY3JvbGxiYXItZGFuZ2VyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7IH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/vendedor/vendedor-list/vendedor-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor-list/vendedor-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRlZG9yL3ZlbmRlZG9yLWxpc3QvdmVuZGVkb3ItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/vendedor/vendedor-list/vendedor-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor-list/vendedor-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: VendedorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorListComponent", function() { return VendedorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/vendedor.model */ "./src/app/pages/vendedor/shared/vendedor.model.ts");
/* harmony import */ var _shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/vendedor.service */ "./src/app/pages/vendedor/shared/service/vendedor.service.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/modal-confirmation/modal-confirmation.component */ "./src/app/shared/components/modal-confirmation/modal-confirmation.component.ts");








var VendedorListComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VendedorListComponent, _super);
    function VendedorListComponent(vendedorService, dialog, alertService) {
        var _this = _super.call(this, vendedorService, alertService) || this;
        _this.vendedorService = vendedorService;
        _this.dialog = dialog;
        _this.alertService = alertService;
        _this.vendedor = new _shared_vendedor_model__WEBPACK_IMPORTED_MODULE_4__["Vendedor"]();
        _this.componentName = 'Vendedores';
        _this.displayedColumns = ['id', 'nome', 'email', 'status', 'telefone', 'acao'];
        return _this;
    }
    VendedorListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    VendedorListComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_7__["ModalConfirmationComponent"], {
            width: '400px',
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.deleteResource(row);
            }
        });
    };
    VendedorListComponent.prototype.editCreate = function (element) {
        var title = '';
        if (!element.isUndefined) {
            title = 'Editar';
            this.vendedor = element;
        }
        else {
            title = 'Cadastrar';
        }
    };
    VendedorListComponent.ctorParameters = function () { return [
        { type: _shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__["VendedorService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"] }
    ]; };
    VendedorListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendedor-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendedor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendedor/vendedor-list/vendedor-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendedor-list.component.css */ "./src/app/pages/vendedor/vendedor-list/vendedor-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_vendedor_service__WEBPACK_IMPORTED_MODULE_5__["VendedorService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"]])
    ], VendedorListComponent);
    return VendedorListComponent;
}(src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/vendedor/vendedor-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VendedorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorRoutingModule", function() { return VendedorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _vendedor_list_vendedor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendedor-list/vendedor-list.component */ "./src/app/pages/vendedor/vendedor-list/vendedor-list.component.ts");
/* harmony import */ var _vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendedor-form/VendedorFormComponent */ "./src/app/pages/vendedor/vendedor-form/VendedorFormComponent.ts");
/* harmony import */ var _shared_resolvers_vendedor_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/resolvers/vendedor-resolver.guard */ "./src/app/pages/vendedor/shared/resolvers/vendedor-resolver.guard.ts");






var routes = [
    {
        path: '',
        component: _vendedor_list_vendedor_list_component__WEBPACK_IMPORTED_MODULE_3__["VendedorListComponent"]
    },
    {
        path: 'new',
        component: _vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__["VendedorFormComponent"]
    },
    {
        path: ':id/edit',
        component: _vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__["VendedorFormComponent"],
        resolve: {
            resource: _shared_resolvers_vendedor_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["VendedorResolver"]
        }
    },
    {
        path: 'profile',
        component: _vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__["VendedorFormComponent"],
        resolve: {
            resource: _shared_resolvers_vendedor_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["VendedorResolver"]
        }
    },
];
var VendedorRoutingModule = /** @class */ (function () {
    function VendedorRoutingModule() {
    }
    VendedorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VendedorRoutingModule);
    return VendedorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/vendedor/vendedor.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/vendedor/vendedor.module.ts ***!
  \***************************************************/
/*! exports provided: VendedorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedorModule", function() { return VendedorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendedor-routing.module */ "./src/app/pages/vendedor/vendedor-routing.module.ts");
/* harmony import */ var _vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendedor-form/VendedorFormComponent */ "./src/app/pages/vendedor/vendedor-form/VendedorFormComponent.ts");
/* harmony import */ var _vendedor_list_vendedor_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendedor-list/vendedor-list.component */ "./src/app/pages/vendedor/vendedor-list/vendedor-list.component.ts");
/* harmony import */ var src_app_shared_components_base_endereco_Form_base_endereco_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/base-endereco-Form/base-endereco-form.component */ "./src/app/shared/components/base-endereco-Form/base-endereco-form.component.ts");







var VendedorModule = /** @class */ (function () {
    function VendedorModule() {
    }
    VendedorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VendedorRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [_vendedor_form_VendedorFormComponent__WEBPACK_IMPORTED_MODULE_4__["VendedorFormComponent"], _vendedor_list_vendedor_list_component__WEBPACK_IMPORTED_MODULE_5__["VendedorListComponent"]],
            providers: [src_app_shared_components_base_endereco_Form_base_endereco_form_component__WEBPACK_IMPORTED_MODULE_6__["BaseEnderecoFormComponent"]],
        })
    ], VendedorModule);
    return VendedorModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-vendedor-vendedor-module.js.map