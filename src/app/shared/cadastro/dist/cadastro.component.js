"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CadastroComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(dialog, router, registroLoginService, formBuilder, serviceAPI) {
        this.dialog = dialog;
        this.router = router;
        this.registroLoginService = registroLoginService;
        this.formBuilder = formBuilder;
        this.serviceAPI = serviceAPI;
        this.cardVisible = true;
        this.hide = true;
        this.errorLog = '';
        this.registerForm = this.formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]{3,}$')]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]{3,}$')]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            confirmPassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        }, { validator: this.MustMatch('password', 'confirmPassword') });
    }
    CadastroComponent.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    CadastroComponent.prototype.onSubmit = function () {
        var _this = this;
        var body = {
            nome: this.registerForm.value.name,
            sobrenome: this.registerForm.value.lastName,
            email: this.registerForm.value.email,
            senha: this.registerForm.value.password
        };
        this.serviceAPI.cadastrarUsuario(body).subscribe({
            next: function (result) {
                console.log(result);
                _this.registroLoginService.changeRegistering();
            },
            error: function (err) {
                _this.errorLog = err.error.textMessage;
            }
        });
    };
    CadastroComponent.prototype.closeCardLog = function () {
        this.dialog.closeAll();
        this.cardVisible = false;
    };
    CadastroComponent.prototype.goToLogin = function () {
        this.registroLoginService.changeRegistering();
    };
    CadastroComponent = __decorate([
        core_1.Component({
            selector: 'cadastro',
            templateUrl: './cadastro.component.html',
            styleUrl: './cadastro.component.scss'
        })
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
