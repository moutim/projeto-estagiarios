"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieCardModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tabs_1 = require("@angular/material/tabs");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var tooltip_1 = require("@angular/material/tooltip");
var movie_card_component_1 = require("./movie-card.component");
var shared_components_module_1 = require("../shared-components/shared-components.module");
var MovieCardModule = /** @class */ (function () {
    function MovieCardModule() {
    }
    MovieCardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                tabs_1.MatTabsModule,
                card_1.MatCardModule,
                list_1.MatListModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                tooltip_1.MatTooltipModule,
                shared_components_module_1.SharedComponentsModule
            ],
            exports: [
                movie_card_component_1.MovieCardComponent,
            ]
        })
    ], MovieCardModule);
    return MovieCardModule;
}());
exports.MovieCardModule = MovieCardModule;
