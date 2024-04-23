
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule
  ],
  exports:[
    MovieCardComponent,
    MovieListComponent
  ]
})
export class SharedComponentsModule { }
