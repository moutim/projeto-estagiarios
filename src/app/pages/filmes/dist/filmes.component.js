"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.FilmesComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FilmesComponent = /** @class */ (function () {
    function FilmesComponent(movieService) {
        this.movieService = movieService;
        this.form = new forms_1.FormGroup({
            genres: new forms_1.FormControl([]),
            year: new forms_1.FormControl('')
        });
        this.movies$ = new rxjs_1.BehaviorSubject([]);
        this.years = Array.from({ length: new Date().getFullYear() - 1899 }, function (_, i) { return new Date().getFullYear() - i; });
        this.imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
        this.currentPage = 1;
        this.loading = false;
        this.hoveredMovieId = null;
    }
    FilmesComponent.prototype.ngOnInit = function () {
        this.genres$ = this.movieService.getGenres();
        this.loadInitialMovies();
        this.subscribeToFormChanges();
    };
    FilmesComponent.prototype.loadInitialMovies = function () {
        var _this = this;
        this.loading = true;
        this.movieService.getTrendingMovies(this.currentPage)
            .pipe(operators_1.tap(function (movies) {
            var currentMovies = _this.movies$.value;
            _this.movies$.next(__spreadArrays(currentMovies, movies));
        }), operators_1.tap(function () { return _this.loading = false; })).subscribe();
    };
    FilmesComponent.prototype.subscribeToFormChanges = function () {
        var _this = this;
        this.form.valueChanges.pipe(operators_1.debounceTime(300), operators_1.distinctUntilChanged(function (prev, curr) { return JSON.stringify(prev) === JSON.stringify(curr); }), operators_1.switchMap(function (formValue) {
            _this.loading = true;
            return _this.movieService.searchMovies('', formValue.genres, formValue.year, _this.currentPage);
        }), operators_1.tap(function (movies) {
            _this.movies$.next(movies);
            _this.loading = false;
        })).subscribe();
    };
    FilmesComponent.prototype.onScroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
            this.currentPage++;
            this.loadInitialMovies();
        }
    };
    FilmesComponent.prototype.clearFilters = function () {
        this.form.reset({
            genres: [],
            year: ''
        });
        this.currentPage = 1;
        this.movies$.next([]);
        this.subscribeToFormChanges(); // Re-subscribe to form value changes after reset
    };
    FilmesComponent.prototype.getPosterUrl = function (posterPath) {
        return "" + this.imageBaseUrl + posterPath;
    };
    FilmesComponent.prototype.isHovered = function (movieId) {
        return this.hoveredMovieId === movieId;
    };
    FilmesComponent.prototype.hoverEffect = function (movieId, value) {
        if (value) {
            this.hoveredMovieId = movieId;
        }
        else {
            this.hoveredMovieId = null;
        }
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], FilmesComponent.prototype, "onScroll");
    FilmesComponent = __decorate([
        core_1.Component({
            selector: 'app-filmes',
            templateUrl: './filmes.component.html',
            styleUrls: ['./filmes.component.scss']
        })
    ], FilmesComponent);
    return FilmesComponent;
}());
exports.FilmesComponent = FilmesComponent;
