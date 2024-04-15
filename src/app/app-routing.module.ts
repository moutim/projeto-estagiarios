import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { CadastroComponent } from './shared/cadastro/cadastro.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListasComponent } from './pages/listas/listas.component';


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'listas', component: ListasComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
