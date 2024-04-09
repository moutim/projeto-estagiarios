import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  RomanceMovies: any[]=[]
  Animations: any[]=[]

  ngOnInit(): void {
    this.RomanceMovies = [
      { title: 'Romance Movie 1', image: 'assets/movies/romance1.jpg' },
      { title: 'Romance Movie 2', image: 'assets/movies/romance2.jpg' },
      { title: 'Romance Movie 3', image: 'assets/movies/romance3.jpg' },
    ];

    this.Animations = [
      { title: 'Animation 1', image: 'assets/animations/animation1.jpg' },
      { title: 'Animation 2', image: 'assets/animations/animation2.jpg' },
      { title: 'Animation 3', image: 'assets/animations/animation3.jpg' },

    ];
  }



}
