import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { MovieService } from '../../services/movies/movie.service';
import { Genre, Movie } from '../../interfaces/interface';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    genres: new FormControl([]),
    year: new FormControl('')
  });
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  genres$!: Observable<Genre[]>;
  years: number[] = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => new Date().getFullYear() - i);
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  currentPage = 1;
  loading = false;
  hoveredMovieId: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.genres$ = this.movieService.getGenres();
    this.loadInitialMovies();
    this.subscribeToFormChanges();
  }

  private loadInitialMovies(): void {
    this.loading = true;
    this.movieService.getTrendingMovies(this.currentPage)
      .pipe(
        tap(movies => {
          const currentMovies = this.movies$.value;
          this.movies$.next([...currentMovies, ...movies]);
        }),
        tap(() => this.loading = false)
      ).subscribe();
  }

  private subscribeToFormChanges(): void {
    this.form.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      switchMap(formValue => {
        this.loading = true;
        return this.movieService.searchMovies('', formValue.genres, formValue.year, this.currentPage);
      }),
      tap(movies => {
        this.movies$.next(movies);
        this.loading = false;
      })
    ).subscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
      this.currentPage++;
      this.loadInitialMovies();
    }
  }

  clearFilters(): void {
    this.form.reset({
      genres: [],
      year: ''
    });
    this.currentPage = 1;
    this.movies$.next([]);
    this.subscribeToFormChanges();  // Re-subscribe to form value changes after reset
  }

  getPosterUrl(posterPath: string): string {
    return `${this.imageBaseUrl}${posterPath}`;
  }

  isHovered(movieId: number): boolean {
    return this.hoveredMovieId === movieId;
  }

  hoverEffect(movieId: number, value: boolean): void {
    if (value) {
      this.hoveredMovieId = movieId;
    } else {
      this.hoveredMovieId = null;
    }
  }
}
