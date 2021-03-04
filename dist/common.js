(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-list/base-resource-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceListComponent", function() { return BaseResourceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/messages.enum */ "./src/app/shared/enums/messages.enum.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/config/api.config */ "./src/app/core/config/api.config.ts");







var BaseResourceListComponent = /** @class */ (function () {
    function BaseResourceListComponent(baseResourceService, alertService) {
        this.baseResourceService = baseResourceService;
        this.alertService = alertService;
        this.resources = [];
        this.componentName = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.resources);
        this.serverErrorMessages = [];
        this.bucketUrl = src_app_core_config_api_config__WEBPACK_IMPORTED_MODULE_6__["API_CONFIG"].bucketBaseUrl;
    }
    BaseResourceListComponent.prototype.ngOnInit = function () {
        this.getAllResources();
    };
    BaseResourceListComponent.prototype.getAllResources = function () {
        var _this = this;
        this.baseResourceService.getAll().subscribe(function (resources) { return _this.resources = resources.sort(function (a, b) { return b.id - a.id; }); }, function () { return _this.alertService.showAlertDanger(_enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].ERRO_GENERICO_CARREGAMENTO(_this.componentName)); });
    };
    BaseResourceListComponent.prototype.deleteResource = function (resource) {
        var _this = this;
        this.baseResourceService.delete(resource.id).subscribe(function () { return _this.load(); }, function (error) { return _this.actionsForError(error); });
    };
    BaseResourceListComponent.prototype.load = function () {
        var _this = this;
        this.baseResourceService.listTodos().pipe().subscribe(function (result) {
            _this.dataSource.data = result.content;
            _this.paginator.length = result.totalElements;
            (function () { return _this.alertService.showAlertDanger(_enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].ERRO_GENERICO_CARREGAMENTO(_this.componentName)); });
        });
    };
    BaseResourceListComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BaseResourceListComponent.prototype.clearFilters = function () {
        this.dataSource.filter = '';
    };
    BaseResourceListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    BaseResourceListComponent.prototype.actionsForError = function (error) {
        this.alertService.showAlertDanger(_enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].OPERACAO_ERRO);
        var objetoError = error;
        if (objetoError.error) {
            objetoError = objetoError.error;
        }
        if (!objetoError.status) {
            objetoError = JSON.parse(objetoError);
        }
        if (objetoError.status === 403) {
            this.serverErrorMessages = [_enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].ACESSO_NEGADO_EXCLUIR];
            this.serverErrorMessages = [objetoError.status + ': ' + _enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].ACESSO_NEGADO_EXCLUIR];
        }
        else {
            if (objetoError.status === 404) {
                this.serverErrorMessages = [_enums_messages_enum__WEBPACK_IMPORTED_MODULE_2__["default"].FALHA_SERVIDOR];
            }
            else {
                this.listErrors(objetoError.errors);
                this.serverErrorMessages = [objetoError.status + ': ' + objetoError.error, this.listErrors(objetoError.errors)];
            }
        }
    };
    BaseResourceListComponent.prototype.listErrors = function (messages) {
        var error = '';
        for (var increment = 0; increment < messages.length; increment++) {
            error = error + messages[increment].fieldName + messages[increment].message;
        }
        return error;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BaseResourceListComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], BaseResourceListComponent.prototype, "sort", void 0);
    return BaseResourceListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map