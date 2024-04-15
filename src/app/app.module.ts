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


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule
    BrowserAnimationsModule,
    NavbarModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
