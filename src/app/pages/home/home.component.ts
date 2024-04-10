import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movies/movie.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
scrollLeft(arg0: any) {
throw new Error('Method not implemented.');
}
scrollRight(arg0: any) {
throw new Error('Method not implemented.');
}
  trendingMovies: any[] = [[], [], [], []];
stepperContainer: any;

  constructor(
    private movieService: MovieService,
    private _formBuilder: FormBuilder
  ) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  ngOnInit(): void {
    const movies = this.movieService.getTrendingMovies().results;

    movies.forEach((item: any, index: number) => {
      // let j = index % 4;
      // this.trendingMovies[j].push(item);
      let groupIndex = Math.floor(index / 5);

      if (groupIndex < this.trendingMovies.length) {
        this.trendingMovies[groupIndex].push(item);
      }
    });
    console.log(this.trendingMovies);

    // this.trendingMovies = this.movieService.getTrendingMovies().results;
    // this.movieService.getTrendingMovies().subscribe({
    //   next: (response: any) => { console.log(response)
    //     this.trendingMovies = response.results;
    //   },
    //   error: (e: any) => console.error(e),
    //   complete: () => console.info('Trending movies fetch complete')
    // });
  }

  getMovieImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
