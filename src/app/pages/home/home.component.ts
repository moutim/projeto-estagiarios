import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movies/movie.service';
import { MatStepper } from '@angular/material/stepper';
import { Movie } from '../../interfaces/interface';
import { BancoDeDadosService } from '../../services/banco-de-dados/banco-de-dados.service';
import { MovieCadastro, UserInfo } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMoviesFilter: any[] = [[], [], [], []];
  topRatedMoviesFilter: any[] = [[], [], [], []];

  constructor(private movieService: MovieService, private bancoDeDadosService: BancoDeDadosService) {}

  ngOnInit() {
    this.fetchTrendingMovies();
    this.fetchTopRatedMovies();
  }

  fetchTrendingMovies(): void {
    this.movieService.getTrendingMovies().subscribe({
      next: (movies: Movie[]) => {
        if (movies && Array.isArray(movies)) {
          this.trendingMoviesFilter = [[], [], [], []];
          movies.forEach((item: Movie, index: number) => {
            const groupIndex = Math.floor(index / 5);
            if (groupIndex < this.trendingMoviesFilter.length) {
              this.trendingMoviesFilter[groupIndex].push(item);
            }
          });
        }
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('Trending movies fetch complete'),
    });
  }

  fetchTopRatedMovies(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (movies: Movie[]) => {
        if (movies && Array.isArray(movies)) {
          this.topRatedMoviesFilter = [[], [], [], []];
          movies.forEach((item: Movie, index: number) => {
            const groupIndex = Math.floor(index / 5);
            if (groupIndex < this.topRatedMoviesFilter.length) {
              this.topRatedMoviesFilter[groupIndex].push(item);
            }
          });
        }
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('Top-rated movies fetch complete'),
    });
  }

  goNextTrending(trendingStepper: MatStepper) {
    if (trendingStepper.selectedIndex === trendingStepper.steps.length - 1) {
      trendingStepper.selectedIndex = 0;
    } else {
      trendingStepper.next();
    }
  }

  goPreviousTrending(trendingStepper: MatStepper) {
    if (trendingStepper.selectedIndex === 0) {
      trendingStepper.selectedIndex = trendingStepper.steps.length - 1;
    } else {
      trendingStepper.previous();
    }
  }

  goNextTopRated(topRatedStepper: MatStepper) {
    if (topRatedStepper.selectedIndex === topRatedStepper.steps.length - 1) {
      topRatedStepper.selectedIndex = 0;
    } else {
      topRatedStepper.next();
    }
  }

  goPreviousTopRated(topRatedStepper: MatStepper) {
    if (topRatedStepper.selectedIndex === 0) {
      topRatedStepper.selectedIndex = topRatedStepper.steps.length - 1;
    } else {
      topRatedStepper.previous();
    }
  }

getMovieImageUrl(path: string): string {
  if (!path) {
    return '';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}


  addToWatched(movie: Movie) {

    const userId = 5;


    const movieCadastro: MovieCadastro = {
      id: userId,
      nome: movie.title,
      idAPI: movie.id,
      backdropPath: movie.poster_path,
    };

    this.bancoDeDadosService.adicionarFilmeVisto(userId, movieCadastro).subscribe({
      next: (response) => {
        console.log('Filme adicionado à lista de vistos:', response);
      },
      error: (error) => {
        console.error('Erro ao adicionar filme à lista de vistos:', error);
      }
    });
  }


  addToWishlist(movie: Movie) {

    const userId = 5;


    const movieCadastro: MovieCadastro = {
      id: userId,
      nome: movie.title,
      idAPI: movie.id,
      backdropPath: movie.poster_path,
    };

    this.bancoDeDadosService.adicionarFilmeWatchlist(userId, movieCadastro).subscribe({
      next: (response) => {
        console.log('Filme adicionado à lista de desejos:', response);
      },
      error: (error) => {
        console.error('Erro ao adicionar filme à lista de desejos:', error);
      }
    });
  }
}

