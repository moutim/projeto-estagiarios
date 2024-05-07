"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListasModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var listas_component_1 = require("./listas.component");
var tabs_1 = require("@angular/material/tabs");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var shared_components_module_1 = require("../../shared/shared-components/shared-components.module");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var ListasModule = /** @class */ (function () {
    function ListasModule() {
    }
    ListasModule = __decorate([
        core_1.NgModule({
            declarations: [listas_component_1.ListasComponent],
            imports: [
                common_1.CommonModule,
                tabs_1.MatTabsModule,
                card_1.MatCardModule,
                list_1.MatListModule,
                shared_components_module_1.SharedComponentsModule,
                forms_1.FormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule
            ],
            exports: [
                listas_component_1.ListasComponent
            ]
        })
    ], ListasModule);
    return ListasModule;
}());
exports.ListasModule = ListasModule;
