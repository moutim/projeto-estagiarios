import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movies/movie.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  movies: any[] = [];
  watchedList: any[] = [];
  watchList: any[] = [];
  searchWatched: string = '';
  searchWatchList: string = '';
  filteredWatchedMovies: any[] = [];
  filteredWatchListMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  removeFromList(movie: any, listType: 'watchedList' | 'watchList'): void {
    if (listType === 'watchedList') {
      this.watchedList = this.watchedList.filter(m => m.id !== movie.id);
    } else if (listType === 'watchList') {
      this.watchList = this.watchList.filter(m => m.id !== movie.id);
    }
  }

  filterWatchedMovies() {
    this.filteredWatchedMovies = this.filterMovies(this.watchedList, this.searchWatched);
  }
  filterWatchListMovies() {
    this.filteredWatchListMovies = this.filterMovies(this.watchList, this.searchWatchList);
  }
  filterMovies(list: any[], search: string): any[] {
    if (!search) {
      return list;
    }
    return list.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }
}
