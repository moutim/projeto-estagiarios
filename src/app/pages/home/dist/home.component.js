"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, bancoDeDadosService) {
        this.movieService = movieService;
        this.bancoDeDadosService = bancoDeDadosService;
        this.trendingMoviesFilter = [[], [], [], []];
        this.topRatedMoviesFilter = [[], [], [], []];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchTrendingMovies();
        this.fetchTopRatedMovies();
    };
    HomeComponent.prototype.fetchTrendingMovies = function () {
        var _this = this;
        this.movieService.getTrendingMovies().subscribe({
            next: function (movies) {
                if (movies && Array.isArray(movies)) {
                    _this.trendingMoviesFilter = [[], [], [], []];
                    movies.forEach(function (item, index) {
                        var groupIndex = Math.floor(index / 5);
                        if (groupIndex < _this.trendingMoviesFilter.length) {
                            _this.trendingMoviesFilter[groupIndex].push(item);
                        }
                    });
                }
            },
            error: function (e) { return console.error(e); },
            complete: function () { return console.info('Trending movies fetch complete'); }
        });
    };
    HomeComponent.prototype.fetchTopRatedMovies = function () {
        var _this = this;
        this.movieService.getTopRatedMovies().subscribe({
            next: function (movies) {
                if (movies && Array.isArray(movies)) {
                    _this.topRatedMoviesFilter = [[], [], [], []];
                    movies.forEach(function (item, index) {
                        var groupIndex = Math.floor(index / 5);
                        if (groupIndex < _this.topRatedMoviesFilter.length) {
                            _this.topRatedMoviesFilter[groupIndex].push(item);
                        }
                    });
                }
            },
            error: function (e) { return console.error(e); },
            complete: function () { return console.info('Top-rated movies fetch complete'); }
        });
    };
    HomeComponent.prototype.goNextTrending = function (trendingStepper) {
        if (trendingStepper.selectedIndex === trendingStepper.steps.length - 1) {
            trendingStepper.selectedIndex = 0;
        }
        else {
            trendingStepper.next();
        }
    };
    HomeComponent.prototype.goPreviousTrending = function (trendingStepper) {
        if (trendingStepper.selectedIndex === 0) {
            trendingStepper.selectedIndex = trendingStepper.steps.length - 1;
        }
        else {
            trendingStepper.previous();
        }
    };
    HomeComponent.prototype.goNextTopRated = function (topRatedStepper) {
        if (topRatedStepper.selectedIndex === topRatedStepper.steps.length - 1) {
            topRatedStepper.selectedIndex = 0;
        }
        else {
            topRatedStepper.next();
        }
    };
    HomeComponent.prototype.goPreviousTopRated = function (topRatedStepper) {
        if (topRatedStepper.selectedIndex === 0) {
            topRatedStepper.selectedIndex = topRatedStepper.steps.length - 1;
        }
        else {
            topRatedStepper.previous();
        }
    };
    HomeComponent.prototype.getMovieImageUrl = function (path) {
        if (!path) {
            return '';
        }
        return "https://image.tmdb.org/t/p/w500" + path;
    };
    HomeComponent.prototype.addToWatched = function (movie) {
        var userId = 5;
        var movieCadastro = {
            id: userId,
            nome: movie.title,
            idAPI: movie.id,
            backdropPath: movie.poster_path
        };
        this.bancoDeDadosService.adicionarFilmeVisto(userId, movieCadastro).subscribe({
            next: function (response) {
                console.log('Filme adicionado à lista de vistos:', response);
            },
            error: function (error) {
                console.error('Erro ao adicionar filme à lista de vistos:', error);
            }
        });
    };
    HomeComponent.prototype.addToWishlist = function (movie) {
        var userId = 5;
        var movieCadastro = {
            id: userId,
            nome: movie.title,
            idAPI: movie.id,
            backdropPath: movie.poster_path
        };
        this.bancoDeDadosService.adicionarFilmeWatchlist(userId, movieCadastro).subscribe({
            next: function (response) {
                console.log('Filme adicionado à lista de desejos:', response);
            },
            error: function (error) {
                console.error('Erro ao adicionar filme à lista de desejos:', error);
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
