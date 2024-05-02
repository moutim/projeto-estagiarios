import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponse, Movie, GenreResponse, Genre } from '../../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '620b69d2b52d2ec30d4ab6a58a70e0f6';

  constructor(private http: HttpClient) {}

    searchMovies(search: string = '', genres: number[] = [], year: string = '', page: number = 1): Observable<Movie[]> {
    let url = `${this.baseUrl}/discover/movie`;
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'en-US')
      .set('page', page.toString());

    if (search) {
      url = `${this.baseUrl}/search/movie`;
      params = params.set('query', search);
    }
    if (genres.length > 0) {
      params = params.set('with_genres', genres.join(','));
    }
    if (year) {
      params = params.set('year', year);
    }

    return this.http.get<ApiResponse>(url, { params })
      .pipe(map(response => response.results));
  }


  getTrendingMovies(page: number = 1): Observable<Movie[]> {
    return this.fetchMovies(`${this.baseUrl}/trending/movie/week`, new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString()));
  }

  getTopRatedMovies(page: number = 1): Observable<Movie[]> {
    return this.fetchMovies(`${this.baseUrl}/movie/top_rated`, new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString()));
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<GenreResponse>(`${this.baseUrl}/genre/movie/list`, {
      params: new HttpParams().set('api_key', this.apiKey)
    }).pipe(
      map(response => response.genres),
      catchError(this.handleError)
    );
  }

  private fetchMovies(url: string, params: HttpParams): Observable<Movie[]> {
    return this.http.get<{results: Movie[]}>(url, { params })
      .pipe(
        map(response => response.results || []),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
