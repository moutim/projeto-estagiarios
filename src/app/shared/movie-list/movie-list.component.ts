// movie-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieCadastro } from '../../interfaces/interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: MovieCadastro[] = [];
  @Output() removeMovie = new EventEmitter<MovieCadastro>();

  onRemove(movie: MovieCadastro): void {
    this.removeMovie.emit(movie);
  }
}
