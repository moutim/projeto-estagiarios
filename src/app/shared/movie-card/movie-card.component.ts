import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: any;

  getMovieImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
}


