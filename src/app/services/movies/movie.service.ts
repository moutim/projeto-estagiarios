import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const mockMovieTrending = require('../../mocks/trending-movies-mock.json');

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '620b69d2b52d2ec30d4ab6a58a70e0f6';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): any {
    return this.http.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
    // return mockMovieTrending;
  }

  getTopRatedMovies() {
    return this.http.get (`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }

}


