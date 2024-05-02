"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = '620b69d2b52d2ec30d4ab6a58a70e0f6';
    }
    MovieService.prototype.searchMovies = function (search, genres, year, page) {
        if (search === void 0) { search = ''; }
        if (genres === void 0) { genres = []; }
        if (year === void 0) { year = ''; }
        if (page === void 0) { page = 1; }
        var url = this.baseUrl + "/discover/movie";
        var params = new http_1.HttpParams()
            .set('api_key', this.apiKey)
            .set('language', 'en-US')
            .set('page', page.toString());
        if (search) {
            url = this.baseUrl + "/search/movie";
            params = params.set('query', search);
        }
        if (genres.length > 0) {
            params = params.set('with_genres', genres.join(','));
        }
        if (year) {
            params = params.set('year', year);
        }
        return this.http.get(url, { params: params })
            .pipe(operators_1.map(function (response) { return response.results; }));
    };
    MovieService.prototype.getTrendingMovies = function (page) {
        if (page === void 0) { page = 1; }
        return this.fetchMovies(this.baseUrl + "/trending/movie/week", new http_1.HttpParams()
            .set('api_key', this.apiKey)
            .set('page', page.toString()));
    };
    MovieService.prototype.getTopRatedMovies = function (page) {
        if (page === void 0) { page = 1; }
        return this.fetchMovies(this.baseUrl + "/movie/top_rated", new http_1.HttpParams()
            .set('api_key', this.apiKey)
            .set('page', page.toString()));
    };
    MovieService.prototype.getGenres = function () {
        return this.http.get(this.baseUrl + "/genre/movie/list", {
            params: new http_1.HttpParams().set('api_key', this.apiKey)
        }).pipe(operators_1.map(function (response) { return response.genres; }), operators_1.catchError(this.handleError));
    };
    MovieService.prototype.fetchMovies = function (url, params) {
        return this.http.get(url, { params: params })
            .pipe(operators_1.map(function (response) { return response.results || []; }), operators_1.catchError(this.handleError));
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred:', error.error.message);
        return rxjs_1.throwError(function () { return new Error('Something bad happened; please try again later.'); });
    };
    MovieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
