"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BancoDeDadosService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var BancoDeDadosService = /** @class */ (function () {
    function BancoDeDadosService(http) {
        this.http = http;
        this.baseUrl = 'https://asp-net-api-filmes.onrender.com/api';
        this.token = ''; // Substitua pelo seu token fixo
        this.userId = 0;
        var storageUser = localStorage.getItem('userInfo');
        if (storageUser) {
            var infoUser = JSON.parse(storageUser);
            console.log(infoUser);
            this.token = infoUser === null || infoUser === void 0 ? void 0 : infoUser.token;
        }
    }
    BancoDeDadosService.prototype.cadastrarUsuario = function (usuario) {
        var url = this.baseUrl + "/Cadastro";
        return this.http.post(url, usuario);
    };
    BancoDeDadosService.prototype.fazerLogin = function (loginData) {
        var url = this.baseUrl + "/Login";
        return this.http.post(url, loginData);
    };
    BancoDeDadosService.prototype.obterInformacoesUsuario = function (userId) {
        var url = this.baseUrl + "/Usuario/Infos/" + userId;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http.get(url, { headers: headers });
    };
    BancoDeDadosService.prototype.adicionarFilmeVisto = function (userId, filme) {
        var url = this.baseUrl + "/Visto/Adicionar/" + userId;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http.post(url, filme, { headers: headers });
    };
    BancoDeDadosService.prototype.removerFilmeVisto = function (userId, Id) {
        var url = this.baseUrl + "/Visto/Deletar/" + userId + "/" + Id;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http["delete"](url, { headers: headers }).pipe(rxjs_1.catchError(function (error) {
            console.error("Erro ao remover filme da lista de assistidos: " + error.message);
            return rxjs_1.throwError(function () { return new Error('Erro ao remover filme da lista de assistidos. Verifique os parâmetros e tente novamente.'); });
        }));
    };
    BancoDeDadosService.prototype.adicionarFilmeWatchlist = function (userId, filme) {
        var url = this.baseUrl + "/Watchlist/Adicionar/" + userId;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http.post(url, filme, { headers: headers });
    };
    BancoDeDadosService.prototype.removerFilmeWatchlist = function (userId, Id) {
        var url = this.baseUrl + "/Watchlist/Deletar/" + userId + "/" + Id;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http["delete"](url, { headers: headers }).pipe(rxjs_1.catchError(function (error) {
            console.error("Erro ao remover filme da lista de desejos: " + error.message);
            return rxjs_1.throwError(function () { return new Error('Erro ao remover filme da lista de desejos. Verifique os parâmetros e tente novamente.'); });
        }));
    };
    BancoDeDadosService.prototype.obterFilmesVistos = function (userId) {
        var url = this.baseUrl + "/Usuario/Vistos/" + userId;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http.get(url, { headers: headers });
    };
    BancoDeDadosService.prototype.obterListaDesejos = function (userId) {
        var url = this.baseUrl + "/Usuario/WatchList/" + userId;
        var headers = new http_1.HttpHeaders().set('Authorization', "Bearer " + this.token);
        return this.http.get(url, { headers: headers });
    };
    BancoDeDadosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BancoDeDadosService);
    return BancoDeDadosService;
}());
exports.BancoDeDadosService = BancoDeDadosService;
