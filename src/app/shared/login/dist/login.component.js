"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, router, registroLoginService, serviceAPI) {
        this.dialog = dialog;
        this.router = router;
        this.registroLoginService = registroLoginService;
        this.serviceAPI = serviceAPI;
        this.cardVisible = true;
        this.isRegistering = this.registroLoginService.isRegistering;
        this.email = '';
        this.senha = '';
        this.errorLog = '';
    }
    LoginComponent.prototype.ngDoCheck = function () {
        this.isRegistering = this.registroLoginService.isRegistering;
    };
    LoginComponent.prototype.closeCardLog = function () {
        this.dialog.closeAll();
        this.cardVisible = false;
    };
    LoginComponent.prototype.goToRegister = function () {
        this.registroLoginService.changeRegistering();
        this.isRegistering = this.registroLoginService.isRegistering;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var body = {
            email: this.email,
            senha: this.senha
        };
        this.serviceAPI.fazerLogin(body).subscribe({
            next: function (result) {
                localStorage.setItem('userInfo', JSON.stringify(result));
                _this.dialog.closeAll();
            },
            error: function (err) {
                _this.errorLog = err.error.textMessage;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrl: './login.component.scss'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
