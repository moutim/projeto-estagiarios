import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movie.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent  implements OnInit {
[x: string]: any;
  movies: any[] = [];
  watchedList: any[] = [];
  watchList: any[] = [];

  getMovieImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  addToWatchedList(movie: any): void {
    this.watchedList.push(movie);
  }

  addToWatchList(movie: any): void {
    this.watchList.push(movie);
  }
}
