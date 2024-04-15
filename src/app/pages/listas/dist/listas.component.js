"use strict";
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
    function ListasComponent(MovieService) {
        this.MovieService = MovieService;
        this.movies = [];
        this.watchedList = [];
        this.watchList = [];
    }
    ListasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MovieService.getTrendingMovies().subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    ListasComponent.prototype.addToWatchedList = function (movie) {
        this.watchedList.push(movie);
        // Optionally, remove from watchList if present
    };
    ListasComponent.prototype.addToWatchList = function (movie) {
        this.watchList.push(movie);
        // Optionally, remove from watchedList if present
    };
    ListasComponent.prototype.removeFromList = function (movie, listType) {
        if (listType === 'watchedList') {
            this.watchedList = this.watchedList.filter(function (m) { return m.id !== movie.id; });
        }
        else if (listType === 'watchList') {
            this.watchList = this.watchList.filter(function (m) { return m.id !== movie.id; });
        }
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
