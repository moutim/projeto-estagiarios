"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var stepper_1 = require("@angular/material/stepper");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var movie_carousel_module_1 = require("../../shared/movie-carousel/movie-carousel.module");
var platform_browser_1 = require("@angular/platform-browser");
var shared_components_module_1 = require("../../shared/shared-components/shared-components.module");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                stepper_1.MatStepperModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                movie_carousel_module_1.MovieCarouselModule,
                platform_browser_1.BrowserModule,
                shared_components_module_1.SharedComponentsModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            exports: [
                home_component_1.HomeComponent,
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
