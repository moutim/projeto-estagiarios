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
var tabs_1 = require("@angular/material/tabs");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                movie_card_component_1.MovieCardComponent,
                movie_list_component_1.MovieListComponent
            ],
            imports: [
                common_1.CommonModule,
                tabs_1.MatTabsModule,
                card_1.MatCardModule,
                list_1.MatListModule
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
