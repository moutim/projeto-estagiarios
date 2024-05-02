"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieCardComponent = void 0;
var core_1 = require("@angular/core");
var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent() {
    }
    MovieCardComponent.prototype.addToWatchList = function (arg0) {
        throw new Error('Method not implemented.');
    };
    MovieCardComponent.prototype.getMovieImageUrl = function (posterPath) {
        return "https://image.tmdb.org/t/p/w500/" + posterPath;
    };
    MovieCardComponent.prototype.addFavorite = function (movie) {
        // Implemente a lógica para adicionar o filme aos favoritos
        console.log(movie.title + " adicionado aos favoritos.");
    };
    MovieCardComponent.prototype.markAsWatched = function (movie) {
        // Implemente a lógica para marcar o filme como assistido
        console.log(movie.title + " marcado como assistido.");
    };
    MovieCardComponent.prototype.wantToWatch = function (movie) {
        // Implemente a lógica para marcar o filme como "desejo assistir"
        console.log("Voc\u00EA deseja assistir " + movie.title + ".");
    };
    __decorate([
        core_1.Input()
    ], MovieCardComponent.prototype, "movie");
    MovieCardComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-card',
            templateUrl: './movie-card.component.html',
            styleUrls: ['./movie-card.component.scss']
        })
    ], MovieCardComponent);
    return MovieCardComponent;
}());
exports.MovieCardComponent = MovieCardComponent;
