import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movies/movie.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  movies: any[] = [];

  trendingMovies: any[] = [];
  trendingMoviesFilter: any[] = [[], [], [], []];
  topRatedMovies: any[] = [];
  topRatedMoviesFilter: any[] = [[], [], [], []];
  stepperContainer: any;

  currentSlide = 0;
  slideShowInterval: any;

  constructor(
    private movieService: MovieService,
    private _formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  ngOnInit() {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
    {
      this.fetchTrendingMovies();
      this.fetchTopRatedMovies();
    }

  }

  startCarousel() {
    this.ngZone.runOutsideAngular(() => {  // Execute fora da detecção de mudanças do Angular
      this.slideShowInterval = setInterval(() => {
        this.ngZone.run(() => {  // Volte para a detecção de mudanças do Angular quando atualizar currentSlide
          this.currentSlide = (this.currentSlide + 1) % this.topRatedMovies.length;
        });
      }, 3000);
    });
  }

  fetchTrendingMovies(): void {
    this.movieService.getTrendingMovies().subscribe({
      next: (response: any) => {

        this.trendingMovies = response.results;
        response.results.forEach((item: any, index: number) => {
          let groupIndex = Math.floor(index / 5);

          if (groupIndex < this.trendingMovies.length) {
            this.trendingMoviesFilter[groupIndex].push(item);
          }
        });
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('Trending movies fetch complete'),
    });
  }

  fetchTopRatedMovies(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (response: any) => {
        console.log(response);
        this.topRatedMovies = response.results;
        response.results.forEach((item: any, index: number) => {
          let groupIndex = Math.floor(index / 5);
          if (groupIndex < this.topRatedMovies.length) {
            this.topRatedMoviesFilter[groupIndex].push(item);
          }
        });
        this.startCarousel();  // Inicie o carrossel aqui
      },
      error: (e: any) => console.error(e),
      complete: () => console.info('Top-rated movies fetch complete'),
    });
  }

  getMovieImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  goNext(stepper: MatStepper) {
    if (stepper.selectedIndex === stepper.steps.length - 1) {
      stepper.selectedIndex = 0; // Wrap to the first step
    } else {
      stepper.next();
    }
  }

  goPrevious(stepper: MatStepper) {
    if (stepper.selectedIndex === 0) {
      stepper.selectedIndex = stepper.steps.length - 1; // Wrap to the last step
    } else {
      stepper.previous();
    }
  }
}
