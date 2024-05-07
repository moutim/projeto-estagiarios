import { Component, OnInit } from '@angular/core';
import { BancoDeDadosService } from '../../services/banco-de-dados/banco-de-dados.service';
import { MovieService } from '../../services/movies/movie.service';
import { MovieCadastro, MovieDetails } from '../../interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  userId = 5; // ID do usuário desejado
  watchedList: MovieDetails[] = [];
  watchList: MovieDetails[] = [];
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private bancoDeDadosService: BancoDeDadosService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadWatchedMovies();
    this.loadWatchlistMovies();
  }

  loadWatchedMovies(): void {
    this.bancoDeDadosService.obterFilmesVistos(this.userId).subscribe({
      next: (response: MovieCadastro[]) => {
        console.log(response, 'tttttt');

        this.populateMovieDetails(response, 'watchedList');
      },
      error: (err: any) => console.error('Erro ao obter lista de assistidos:', err)
    });
  }

  loadWatchlistMovies(): void {
    this.bancoDeDadosService.obterListaDesejos(this.userId).subscribe({
      next: (response: MovieCadastro[]) => {
        this.populateMovieDetails(response, 'watchList');
      },
      error: (err: any) => console.error('Erro ao obter lista de desejos:', err)
    });
  }

  populateMovieDetails(movieList: MovieCadastro[], listType: 'watchedList' | 'watchList'): void {
    const updatedList: MovieDetails[] = [];

    movieList.forEach((movie) => {
      this.movieService.getMovieDetails(movie.idAPI).subscribe({
        next: (details: MovieDetails) => {
          details = { ...details, ...movie }
          if (details) {

            updatedList.push(details);
          }
            console.log(details, 'details');

          if (listType === 'watchedList') {
            this.watchedList = updatedList;
            console.log(this.watchedList, 'assistidos');

          } else if (listType === 'watchList') {
            this.watchList = updatedList;
          }
        },
        error: (err: any) => console.error('Erro ao obter detalhes do filme:', err)
      });
    });
  }

  getPosterUrl(posterPath: string): string {
    return `${this.imageBaseUrl}${posterPath}`;
  }

removeFromList(movie: MovieDetails, listType: 'watchedList' | 'watchList'): void {
  let removeObservable: Observable<any>;

  if (listType === 'watchedList') {
    removeObservable = this.bancoDeDadosService.removerFilmeVisto(this.userId, movie.id);
  } else if (listType === 'watchList') {
    removeObservable = this.bancoDeDadosService.removerFilmeWatchlist(this.userId, movie.id);
  } else {
    console.error('Lista desconhecida:', listType);
    return;
  }

  removeObservable.subscribe({
    next: () => {
      // Atualiza a lista após remover o filme
      if (listType === 'watchedList') {
        this.watchedList = this.watchedList.filter(m => m.id !== movie.id);
      } else {
        this.watchList = this.watchList.filter(m => m.id !== movie.id);
      }
    },
    error: (err: any) => console.error(`Erro ao remover o filme com ID ${movie.id} da lista ${listType}:`, err)
  });
}
}
