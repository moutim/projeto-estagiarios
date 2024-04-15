import { Component } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent {
  trendingMoviesFilter = [[],[],[],[]]
  topRatedMoviesFilter = [[],[],[],[]]

  goNext(stepper: MatStepper) {
    if (stepper.selectedIndex === stepper.steps.length - 1) {
      stepper.selectedIndex = 0;  // Volta para o primeiro passo
    } else {
      stepper.next();
    }
  }

  goPrevious(stepper: MatStepper) {
    if (stepper.selectedIndex === 0) {
      stepper.selectedIndex = stepper.steps.length - 1;  // Vai para o último passo
    } else {
      stepper.previous();
    }
  }
}
