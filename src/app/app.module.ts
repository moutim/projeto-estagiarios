import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarModule } from './shared/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ListasComponent } from './pages/listas/listas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
