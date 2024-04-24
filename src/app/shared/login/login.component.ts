import { HttpClient } from '@angular/common/http';
import { RegistroLoginService } from './../../services/registro-login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  cardVisible = true;
  isRegistering = this.registroLoginService.isRegistering;

  email: string = '';
  senha: string = '';

  hide = true;


  constructor(
    public dialog: MatDialog,
    private router: Router,
    public registroLoginService: RegistroLoginService,
    private httpClient: HttpClient
  ) {}

  ngDoCheck() {
    this.isRegistering = this.registroLoginService.isRegistering;
  }

  closeCardLog() {
    this.dialog.closeAll();

    this.cardVisible = false;
  }

  goToRegister() {
    this.registroLoginService.changeRegistering();
    this.isRegistering = this.registroLoginService.isRegistering;
  }

  Logar(){
    const body = {
      email: this.email,
      senha: this.senha
    }
    this.httpClient.post('https://asp-net-api-filmes.onrender.com/api/Login', body).subscribe({
      next: (result) => {
        console.log(result)
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error)
        alert('Falha no login. Por favor, tente novamente.');

      }
    })

  }
}
