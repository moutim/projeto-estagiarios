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
    function ListasComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
        this.watchedList = [];
        this.watchList = [];
        this.searchWatched = '';
        this.searchWatchList = '';
        this.filteredWatchedMovies = [];
        this.filteredWatchListMovies = [];
    }
    ListasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getTrendingMovies().subscribe(function (data) {
            _this.movies = data.results;
        });
    };
    ListasComponent.prototype.removeFromList = function (movie, listType) {
        if (listType === 'watchedList') {
            this.watchedList = this.watchedList.filter(function (m) { return m.id !== movie.id; });
        }
        else if (listType === 'watchList') {
            this.watchList = this.watchList.filter(function (m) { return m.id !== movie.id; });
        }
    };
    ListasComponent.prototype.filterWatchedMovies = function () {
        this.filteredWatchedMovies = this.filterMovies(this.watchedList, this.searchWatched);
    };
    ListasComponent.prototype.filterWatchListMovies = function () {
        this.filteredWatchListMovies = this.filterMovies(this.watchList, this.searchWatchList);
    };
    ListasComponent.prototype.filterMovies = function (list, search) {
        if (!search) {
            return list;
        }
        return list.filter(function (movie) { return movie.title.toLowerCase().includes(search.toLowerCase()); });
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
