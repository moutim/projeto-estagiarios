"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var movie_service_1 = require("./movie.service");
describe('MovieService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(movie_service_1.MovieService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
