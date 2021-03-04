(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-clientes-clientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-list/clientes-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-list/clientes-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bread-crumb [items]=\"[{text: 'clientes'}]\"></app-bread-crumb>\r\n\r\n<app-page-header pageTitle=\"Clientes\" buttonText=\"Novo Cliente\" matIcon=\"add_circle_outline\"\r\n(click)=\" openDialogEditCreate(null)\">\r\n</app-page-header>\r\n\r\n\r\n<mat-form-field>\r\n  <div class=\"col-md-12 text-right\">\r\n    <mat-label>Filtrar</mat-label>\r\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar\">\r\n  </div>\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"table table-striped ml-2\" matSort>\r\n\r\n  <!-- Position Column -->\r\n\r\n  <ng-container matColumnDef=\"id\">\r\n    <th *matHeaderCellDef mat-sort-header> ID </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"nome\">\r\n    <th *matHeaderCellDef mat-sort-header> Nome </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"email\">\r\n    <th *matHeaderCellDef mat-sort-header> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"telefones\">\r\n    <th *matHeaderCellDef mat-sort-header>Telefone </th>\r\n    <mat-select  mat-cell disableRipple *matCellDef=\"let element\" placeholder=\"Visualizar Lista\">\r\n      <mat-option *ngFor=\"let tel of element.telefone\"  value='{{tel}}'>{{tel | mask: '(00) 000-0000'}}</mat-option>\r\n    </mat-select>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"status\">\r\n    <th *matHeaderCellDef mat-sort-header> Status </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"acao\">\r\n    <th *matHeaderCellDef> Ações </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-icon color=\"primary\" (click)=\" openDialogEditCreate(element)\">edit\r\n      </mat-icon>\r\n      <mat-icon (click)=\"openDialog(element)\" color=\"warn\">delete_outline</mat-icon>\r\n    </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n</mat-paginator>\r\n\r\n<app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--CONTEUDO DA JANELA MODAL DE INSERIR E EDITAR -->\r\n<div  align=\"end\">\r\n  <mat-icon (click)=\"close()\">close</mat-icon>\r\n</div>\r\n<form [formGroup]=\"resourceForm\" id=\"resourceForm\" (submit)=\"submitForm()\">\r\n<div class=\"modal-content\">\r\n      <div class=\"modal-body \">\r\n      <mat-accordion>\r\n        <mat-expansion-panel [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-description>\r\n            Cliente:\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <div class=\"card\">\r\n\r\n            <div class=\"card-body\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3\">\r\n                  <mat-form-field>\r\n                    <mat-label for=\"nome\">Nome</mat-label>\r\n                    <input matInput type=\"text\" id=\"nome\" formControlName=\"nome\">\r\n                  </mat-form-field>\r\n                  <app-form-field-error [nameCampo]=\"'Nome'\" [controlName]=\"resourceForm.get('nome')\"></app-form-field-error>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                  <mat-form-field>\r\n                    <mat-label for=\"Email\">E-mail</mat-label>\r\n                    <input matInput type=\"text\" id=\"email\" formControlName=\"email\">\r\n                  </mat-form-field>\r\n                  <app-form-field-error [nameCampo]=\"'E-mail'\" [controlName]=\"resourceForm.get('email')\"></app-form-field-error>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                  <mat-form-field>\r\n                    <mat-label for=\"tipoFisicoJuridico\">Tipo de Pessoa:</mat-label>\r\n                    <mat-select disableRipple id=\"tipoFisicoJuridico\" formControlName=\"tipoFisicoJuridico\"\r\n                                placeholder=\"Selecione\">\r\n                      <mat-option value='F'>Física</mat-option>\r\n                      <mat-option value='J'>Jurídica</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <app-form-field-error [nameCampo]=\"'Fisica /Juridica'\"[controlName]=\"resourceForm.get('tipoFisicoJuridico')\">\r\n                  </app-form-field-error>\r\n                </div>\r\n                <div class=\"form-group col-md-3\">\r\n                  <mat-form-field>\r\n                    <mat-label for=\"cpfOuCnpj\">CPF ou CNPJ</mat-label>\r\n                    <input matInput id=\"cpfOuCnpj\" mask=\"000.000.000-00||00.000.000/0000-00\"\r\n                           formControlName=\"cpfOuCnpj\">\r\n                  </mat-form-field>\r\n                  <app-form-field-error [nameCampo]=\"'CPF /CNPJ'\" [controlName]=\"resourceForm.get('cpfOuCnpj')\"></app-form-field-error>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3 \">\r\n                  <div [formArrayName]=\"'telefones'\">\r\n                    <mat-label (click)=\"addTelefones()\">Adicionar telefone a lista:</mat-label>\r\n                    <mat-icon (click)=\"addTelefones()\" class=\"green-icon\">add_circle_outline</mat-icon>\r\n                    <div class=\"scrollbar scrollbar-danger\">\r\n                      <div *ngFor=\"let t of  resourceForm.controls.telefones.value; let i = index\" [formGroupName]=\"i\">\r\n                        {{i}}\r\n                        <mat-form-field>\r\n                          <mat-label>Fone:</mat-label>\r\n                          <input matInput id=\"{{t.tel}}\" formControlName=\"tel\" [value]=\"t\" mask=\"(000) 000 00 00\">\r\n                          <mat-icon (click)=\"this.removeTelefones(i)\" color=\"warn\" matSuffix>delete_outline</mat-icon>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-md-4 datepicker-align\">\r\n                  <mat-form-field>\r\n                    <mat-label>Data de nascimento</mat-label>\r\n                    <input matInput formControlName=\"dataNascimento\" [matDatepicker]=\"dataNascimento\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dataNascimento\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dataNascimento></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <app-form-field-error [controlName]=\"resourceForm.get('dataNascimento')\"></app-form-field-error>\r\n                  <mat-slide-toggle formControlName=\"status\">Ativo:\r\n                  </mat-slide-toggle>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <app-server-error-messages [serverErrorMessages]=\"serverErrorMessages\"></app-server-error-messages>\r\n\r\n\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n    </div>\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n  <button mat-button class=\"btn btn-danger\" (click)=\"close()\">Fechar</button>\r\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"submittingForm || resourceForm.invalid\" mat-button [mat-dialog-close]=\"true\">\r\n    Salvar\r\n  </button>\r\n</mat-dialog-actions>\r\n</form>\r\n");

/***/ }),

/***/ "./src/app/pages/clientes/clientes-list/clientes-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/clientes/clientes-list/clientes-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGVzL2NsaWVudGVzLWxpc3QvY2xpZW50ZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/clientes/clientes-list/clientes-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/clientes/clientes-list/clientes-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesListComponent", function() { return ClientesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/cliente.model */ "./src/app/pages/clientes/shared/model/cliente.model.ts");
/* harmony import */ var _shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/cliente.service */ "./src/app/pages/clientes/shared/service/cliente.service.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/base-resource-list/base-resource-list.component */ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
/* harmony import */ var src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/modal-confirmation/modal-confirmation.component */ "./src/app/shared/components/modal-confirmation/modal-confirmation.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clientes-modal-edit-create/clientes-modal-edit-create.component */ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.ts");









var ClientesListComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClientesListComponent, _super);
    // displayedColumns = this.columns.map(c => c.columnDef);
    function ClientesListComponent(clienteService, alertService, dialog) {
        var _this = _super.call(this, clienteService, alertService) || this;
        _this.clienteService = clienteService;
        _this.alertService = alertService;
        _this.dialog = dialog;
        _this.cliente = new _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        _this.componentName = 'Clientes';
        _this.displayedColumns = ['id', 'nome', 'email', 'status', 'telefones', 'acao'];
        return _this;
    }
    ClientesListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ClientesListComponent.prototype.openDialog = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_shared_components_modal_confirmation_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ModalConfirmationComponent"], {
            width: '400px',
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.deleteResource(row);
            }
        });
    };
    ClientesListComponent.prototype.editCreate = function (element) {
        var _this = this;
        if (element !== undefined) {
            console.log('editando');
            this.clienteService.getById(element.id).subscribe(function (response) {
                _this.cliente = response;
                console.log('voltou ' + response);
            }, function (error) {
                console.log('deu ruim ');
            });
            //   this.cliente = element;
        }
        else {
            console.log('estado do cliente' + this.cliente);
            console.log('cadastro');
        }
    };
    ClientesListComponent.prototype.openDialogEditCreate = function (row) {
        var _this = this;
        console.log('o que tem na linha ' + row);
        var dialogRef = this.dialog.open(_clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_8__["ClientesModalEditCreateComponent"], {
            data: row
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.load();
                _this.alertService.showAlertSuccess('Cliente adicionado/editado com sucesso');
            }
        });
    };
    ClientesListComponent.ctorParameters = function () { return [
        { type: _shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
    ]; };
    ClientesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clientes-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-list/clientes-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clientes-list.component.css */ "./src/app/pages/clientes/clientes-list/clientes-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_4__["AlertModalService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ClientesListComponent);
    return ClientesListComponent;
}(src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_5__["BaseResourceListComponent"]));



/***/ }),

/***/ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.mat-expansion-panel-header.mat-expanded,\r\n.mat-expansion-panel-header.mat-expanded:hover,\r\n.mat-expansion-panel-header.mat-expanded:focus {\r\n  background-color: rgba(133, 5, 5, 0.89);\r\n}\r\n\r\n.scrollbar {\r\n  margin-left: 30px;\r\n  float: bottom;\r\n  height: content-box;\r\n  width: content-box;\r\n  background: #fff;\r\n  overflow-y: scroll;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.force-overflow {\r\n  min-height: 450px;\r\n}\r\n\r\n.scrollbar-danger::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #F5F5F5;\r\n  border-radius: 10px; }\r\n\r\n.scrollbar-danger::-webkit-scrollbar {\r\n  width: 12px;\r\n  background-color: #F5F5F5; }\r\n\r\n.scrollbar-danger::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #ff3547; }\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50ZXMvY2xpZW50ZXMtbW9kYWwtZWRpdC1jcmVhdGUvY2xpZW50ZXMtbW9kYWwtZWRpdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsdUNBQXVDO0FBQ3pDOztBQUtBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUlBO0VBQ0Usb0RBQW9EO0VBQ3BELHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCLEVBQUU7O0FBRTdCO0VBQ0UsbUJBQW1CO0VBQ25CLG9EQUFvRDtFQUNwRCx5QkFBeUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudGVzL2NsaWVudGVzLW1vZGFsLWVkaXQtY3JlYXRlL2NsaWVudGVzLW1vZGFsLWVkaXQtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCxcclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpob3ZlcixcclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDUsIDUsIDAuODkpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBmbG9hdDogYm90dG9tO1xyXG4gIGhlaWdodDogY29udGVudC1ib3g7XHJcbiAgd2lkdGg6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmZvcmNlLW92ZXJmbG93IHtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uc2Nyb2xsYmFyLWRhbmdlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XHJcblxyXG4uc2Nyb2xsYmFyLWRhbmdlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cclxuXHJcbi5zY3JvbGxiYXItZGFuZ2VyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7IH1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ClientesModalEditCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModalEditCreateComponent", function() { return ClientesModalEditCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/model/cliente.model */ "./src/app/pages/clientes/shared/model/cliente.model.ts");
/* harmony import */ var _shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/cliente.service */ "./src/app/pages/clientes/shared/service/cliente.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/base-resource-form/base-resource-form.component */ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alert-modal.service */ "./src/app/shared/services/alert-modal.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");








var ClientesModalEditCreateComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClientesModalEditCreateComponent, _super);
    function ClientesModalEditCreateComponent(clienteService, injector, alertService, dialogRef, data) {
        var _this = _super.call(this, injector, new _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"](), clienteService, _shared_model_cliente_model__WEBPACK_IMPORTED_MODULE_2__["Cliente"].fromJson, alertService) || this;
        _this.clienteService = clienteService;
        _this.injector = injector;
        _this.alertService = alertService;
        _this.dialogRef = dialogRef;
        _this.data = data;
        return _this;
    }
    ClientesModalEditCreateComponent.prototype.ngOnInit = function () {
        this.buildResourceForm();
        this.setCurrentAction();
    };
    ClientesModalEditCreateComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            tipoFisicoJuridico: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefones: this.formBuilder.array([]),
            cpfOuCnpj: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(14)])],
            dataNascimento: [this.resource.dataNascimento],
            status: [this.resource.status == 'ATIVO' ? true : false],
        });
        this.telephone();
    };
    ClientesModalEditCreateComponent.prototype.setCurrentAction = function () {
        if (this.data === undefined) {
            this.title = 'Adicionar um novo cliente';
            this.currentAction = 'new';
        }
        else {
            this.title = 'Editar cliente';
            this.currentAction = 'edit';
            this.updateForm(this.data);
        }
    };
    ClientesModalEditCreateComponent.prototype.updateForm = function (cliente) {
        this.resourceForm.patchValue(cliente);
        this.resourceForm.patchValue({
            status: cliente.status == 'ATIVO'
        });
    };
    ClientesModalEditCreateComponent.prototype.telephone = function () {
        var _this = this;
        if (this.data !== undefined) {
            var controlArray_1 = this.resourceForm.get('telefones');
            if (this.data.telefone != undefined || this.data.telefone != null) {
                Object.keys(this.data.telefone).forEach(function (i) {
                    controlArray_1.push(_this.formBuilder.group({
                        tel: [_this.data.telefone[i]],
                    }));
                });
            }
        }
    };
    ClientesModalEditCreateComponent.prototype.addTelefones = function () {
        var controlArray = this.resourceForm.get('telefones');
        controlArray.push(this.formBuilder.group({
            tel: [''],
        }));
    };
    ClientesModalEditCreateComponent.prototype.removeTelefones = function (i) {
        var controlArray = this.resourceForm.get('telefones');
        controlArray.removeAt(i);
    };
    ClientesModalEditCreateComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ClientesModalEditCreateComponent.ctorParameters = function () { return [
        { type: _shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ClientesModalEditCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientes-modal-edit-create',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clientes-modal-edit-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clientes-modal-edit-create.component.css */ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_app_shared_services_alert_modal_service__WEBPACK_IMPORTED_MODULE_6__["AlertModalService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], ClientesModalEditCreateComponent);
    return ClientesModalEditCreateComponent;
}(src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/clientes/clientes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesRoutingModule", function() { return ClientesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes-modal-edit-create/clientes-modal-edit-create.component */ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.ts");
/* harmony import */ var _clientes_list_clientes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientes-list/clientes-list.component */ "./src/app/pages/clientes/clientes-list/clientes-list.component.ts");
/* harmony import */ var _shared_resolvers_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/resolvers/cliente-resolver.guard */ "./src/app/pages/clientes/shared/resolvers/cliente-resolver.guard.ts");






var routes = [
    {
        path: '',
        component: _clientes_list_clientes_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientesListComponent"]
    },
    {
        path: 'new',
        component: _clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_3__["ClientesModalEditCreateComponent"]
    },
    {
        path: ':id/edit',
        component: _clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_3__["ClientesModalEditCreateComponent"],
        resolve: {
            resource: _shared_resolvers_cliente_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ClienteResolver"]
        }
    }
];
var ClientesRoutingModule = /** @class */ (function () {
    function ClientesRoutingModule() {
    }
    ClientesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientesRoutingModule);
    return ClientesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/clientes/clientes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/clientes/clientes.module.ts ***!
  \***************************************************/
/*! exports provided: ClientesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes-modal-edit-create/clientes-modal-edit-create.component */ "./src/app/pages/clientes/clientes-modal-edit-create/clientes-modal-edit-create.component.ts");
/* harmony import */ var _clientes_list_clientes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes-list/clientes-list.component */ "./src/app/pages/clientes/clientes-list/clientes-list.component.ts");
/* harmony import */ var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientes-routing.module */ "./src/app/pages/clientes/clientes-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var ClientesModule = /** @class */ (function () {
    function ClientesModule() {
    }
    ClientesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_clientes_modal_edit_create_clientes_modal_edit_create_component__WEBPACK_IMPORTED_MODULE_2__["ClientesModalEditCreateComponent"], _clientes_list_clientes_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientesListComponent"]],
            imports: [
                _clientes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClientesRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], ClientesModule);
    return ClientesModule;
}());



/***/ }),

/***/ "./src/app/pages/clientes/shared/model/cliente.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/clientes/shared/model/cliente.model.ts ***!
  \**************************************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var Cliente = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Cliente, _super);
    function Cliente(id, nome, telefones, endereco, email, cpfOuCnpj, status, dataNascimento, tipoFisicoJuridico) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.nome = nome;
        _this.telefones = telefones;
        _this.endereco = endereco;
        _this.email = email;
        _this.cpfOuCnpj = cpfOuCnpj;
        _this.status = status;
        _this.dataNascimento = dataNascimento;
        _this.tipoFisicoJuridico = tipoFisicoJuridico;
        return _this;
    }
    Cliente.fromJson = function (jsonData) {
        return Object.assign(new Cliente(), jsonData);
    };
    return Cliente;
}(src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/clientes/shared/resolvers/cliente-resolver.guard.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/clientes/shared/resolvers/cliente-resolver.guard.ts ***!
  \***************************************************************************/
/*! exports provided: ClienteResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteResolver", function() { return ClienteResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cliente.service */ "./src/app/pages/clientes/shared/service/cliente.service.ts");



var ClienteResolver = /** @class */ (function () {
    function ClienteResolver(categoriaService) {
        this.categoriaService = categoriaService;
    }
    ClienteResolver.prototype.resolve = function (route) {
        if (route.params && route.params['id']) {
            return this.categoriaService.getById(route.params['id']);
        }
        return null;
    };
    ClienteResolver.ctorParameters = function () { return [
        { type: _service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"] }
    ]; };
    ClienteResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__["ClienteService"]])
    ], ClienteResolver);
    return ClienteResolver;
}());



/***/ }),

/***/ "./src/app/pages/clientes/shared/service/cliente.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/clientes/shared/service/cliente.service.ts ***!
  \******************************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/base-resource.service */ "./src/app/shared/services/base-resource.service.ts");
/* harmony import */ var src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/config/api.config */ "./src/app/core/config/api.config.ts");
/* harmony import */ var _model_cliente_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/cliente.model */ "./src/app/pages/clientes/shared/model/cliente.model.ts");





var ClienteService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClienteService, _super);
    function ClienteService(injector) {
        var _this = _super.call(this, src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "/clientes", injector, _model_cliente_model__WEBPACK_IMPORTED_MODULE_4__["Cliente"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    ClienteService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ClienteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ClienteService);
    return ClienteService;
}(src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__["BaseResourceService"]));



/***/ })

}]);
//# sourceMappingURL=pages-clientes-clientes-module.js.map