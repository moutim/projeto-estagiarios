import { MovieService } from './../../services/movies/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  movies: any[] = [];
  watchedList: any[] = [];
  watchList: any[] = [];

  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.MovieService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  addToWatchedList(movie: any): void {
    this.watchedList.push(movie);
    // Optionally, remove from watchList if present
  }

  addToWatchList(movie: any): void {
    this.watchList.push(movie);
    // Optionally, remove from watchedList if present
  }

  removeFromList(movie: any, listType: 'watchedList' | 'watchList'): void {
    if (listType === 'watchedList') {
      this.watchedList = this.watchedList.filter(m => m.id !== movie.id);
    } else if (listType === 'watchList') {
      this.watchList = this.watchList.filter(m => m.id !== movie.id);
    }
  }
}
