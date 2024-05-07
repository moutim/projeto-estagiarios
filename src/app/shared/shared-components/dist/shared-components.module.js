"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var movie_card_component_1 = require("../movie-card/movie-card.component");
var movie_list_component_1 = require("../movie-list/movie-list.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var select_1 = require("@angular/material/select");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var menu_1 = require("@angular/material/menu");
var list_1 = require("@angular/material/list");
var tabs_1 = require("@angular/material/tabs");
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                movie_card_component_1.MovieCardComponent,
                movie_list_component_1.MovieListComponent,
            ],
            imports: [
                common_1.CommonModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                select_1.MatSelectModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                menu_1.MatMenuModule,
                list_1.MatListModule,
                tabs_1.MatTabsModule,
            ],
            exports: [
                movie_card_component_1.MovieCardComponent,
                movie_list_component_1.MovieListComponent
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());
exports.SharedComponentsModule = SharedComponentsModule;
