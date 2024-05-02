"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilmesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var icon_1 = require("@angular/material/icon");
var filmes_component_1 = require("./filmes.component");
var shared_components_module_1 = require("../../shared/shared-components/shared-components.module");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var select_1 = require("@angular/material/select");
var forms_1 = require("@angular/forms");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var menu_1 = require("@angular/material/menu");
var list_1 = require("@angular/material/list");
var tooltip_1 = require("@angular/material/tooltip");
var FilmesModule = /** @class */ (function () {
    function FilmesModule() {
    }
    FilmesModule = __decorate([
        core_1.NgModule({
            declarations: [
                filmes_component_1.FilmesComponent
            ],
            imports: [
                common_1.CommonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                icon_1.MatIconModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                menu_1.MatMenuModule,
                list_1.MatListModule,
                shared_components_module_1.SharedComponentsModule,
                tooltip_1.MatTooltipModule
            ],
            exports: [
                filmes_component_1.FilmesComponent,
            ]
        })
    ], FilmesModule);
    return FilmesModule;
}());
exports.FilmesModule = FilmesModule;
