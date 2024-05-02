import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarModule } from './shared/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './shared/login/login.module';
import { CadastroModule } from './shared/cadastro/cadastro.module';

import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListasModule } from './pages/listas/listas.module';
import { SharedComponentsModule } from './shared/shared-components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';
import { FilmesModule } from './pages/filmes/filmes.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    NavbarModule,
    MatIconModule,
    HttpClientModule,
    HomeModule,
    ListasModule,
    FilmesModule,
    MatTooltipModule,
    SharedComponentsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
