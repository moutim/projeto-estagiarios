import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  @Input() removeMovie?: (movie: any) => void;

  constructor() {}
}
