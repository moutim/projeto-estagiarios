import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MovieCarouselModule } from '../../shared/movie-carousel/movie-carousel.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MovieCarouselModule,
    BrowserModule,
    SharedComponentsModule
  ],
  declarations: [
    HomeComponent
  ],

  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
