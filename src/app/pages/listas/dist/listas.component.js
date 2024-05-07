"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListasComponent = void 0;
var core_1 = require("@angular/core");
var ListasComponent = /** @class */ (function () {
    function ListasComponent(bancoDeDadosService, movieService) {
        this.bancoDeDadosService = bancoDeDadosService;
        this.movieService = movieService;
        this.userId = 0; // ID do usuário desejado
        this.watchedList = [];
        this.watchList = [];
        this.imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
        this.logError = '';
    }
    ListasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storageUser = localStorage.getItem('userInfo');
        if (storageUser) {
            var userInfo = JSON.parse(storageUser);
            console.log(userInfo);
            this.userId = userInfo === null || userInfo === void 0 ? void 0 : userInfo.id;
        }
        setTimeout(function () {
            _this.loadWatchedMovies();
            _this.loadWatchlistMovies();
        }, 200);
    };
    ListasComponent.prototype.loadWatchedMovies = function () {
        var _this = this;
        this.bancoDeDadosService.obterFilmesVistos(this.userId).subscribe({
            next: function (response) {
                console.log(response, 'tttttt');
                _this.populateMovieDetails(response, 'watchedList');
            },
            error: function (err) {
                _this.logError = err.error.textMessage;
                console.error('Erro ao obter lista de assistidos:', err);
            }
        });
    };
    ListasComponent.prototype.loadWatchlistMovies = function () {
        var _this = this;
        this.bancoDeDadosService.obterListaDesejos(this.userId).subscribe({
            next: function (response) {
                _this.populateMovieDetails(response, 'watchList');
            },
            error: function (err) {
                _this.logError = err.error.textMessage;
                console.error('Erro ao obter lista de assistidos:', err);
            }
        });
    };
    ListasComponent.prototype.populateMovieDetails = function (movieList, listType) {
        var _this = this;
        var updatedList = [];
        movieList.forEach(function (movie) {
            _this.movieService.getMovieDetails(movie.idAPI).subscribe({
                next: function (details) {
                    details = __assign(__assign({}, details), movie);
                    if (details) {
                        updatedList.push(details);
                    }
                    console.log(details, 'details');
                    if (listType === 'watchedList') {
                        _this.watchedList = updatedList;
                        console.log(_this.watchedList, 'assistidos');
                    }
                    else if (listType === 'watchList') {
                        _this.watchList = updatedList;
                    }
                },
                error: function (err) { return console.error('Erro ao obter detalhes do filme:', err); }
            });
        });
    };
    ListasComponent.prototype.getPosterUrl = function (posterPath) {
        return "" + this.imageBaseUrl + posterPath;
    };
    ListasComponent.prototype.removeFromList = function (movie, listType) {
        var _this = this;
        var removeObservable;
        if (listType === 'watchedList') {
            removeObservable = this.bancoDeDadosService.removerFilmeVisto(this.userId, movie.id);
        }
        else if (listType === 'watchList') {
            removeObservable = this.bancoDeDadosService.removerFilmeWatchlist(this.userId, movie.id);
        }
        else {
            console.error('Lista desconhecida:', listType);
            return;
        }
        removeObservable.subscribe({
            next: function () {
                // Atualiza a lista após remover o filme
                if (listType === 'watchedList') {
                    _this.watchedList = _this.watchedList.filter(function (m) { return m.id !== movie.id; });
                }
                else {
                    _this.watchList = _this.watchList.filter(function (m) { return m.id !== movie.id; });
                }
            },
            error: function (err) { return console.error("Erro ao remover o filme com ID " + movie.id + " da lista " + listType + ":", err); }
        });
    };
    ListasComponent = __decorate([
        core_1.Component({
            selector: 'app-listas',
            templateUrl: './listas.component.html',
            styleUrls: ['./listas.component.scss']
        })
    ], ListasComponent);
    return ListasComponent;
}());
exports.ListasComponent = ListasComponent;
