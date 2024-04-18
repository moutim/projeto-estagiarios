"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var async_1 = require("@angular/platform-browser/animations/async");
var navbar_module_1 = require("./shared/navbar/navbar.module");
var home_module_1 = require("./pages/home/home.module");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var listas_module_1 = require("./pages/listas/listas.module");
var shared_components_module_1 = require("./shared/shared-components/shared-components.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                navbar_module_1.NavbarModule,
                home_module_1.HomeModule,
                http_1.HttpClientModule,
                listas_module_1.ListasModule,
                shared_components_module_1.SharedComponentsModule
            ],
            providers: [
                platform_browser_1.provideClientHydration(),
                async_1.provideAnimationsAsync()
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
