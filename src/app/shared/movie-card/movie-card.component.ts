import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
addToWatchList(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() movie: any;

  getMovieImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }

  addFavorite(movie: any) {
    // Implemente a lógica para adicionar o filme aos favoritos
    console.log(`${movie.title} adicionado aos favoritos.`);
  }

  markAsWatched(movie: any) {
    // Implemente a lógica para marcar o filme como assistido
    console.log(`${movie.title} marcado como assistido.`);
  }

  wantToWatch(movie: any) {
    // Implemente a lógica para marcar o filme como "desejo assistir"
    console.log(`Você deseja assistir ${movie.title}.`);
  }

}


