import { RegistroLoginService } from './../../services/registro-login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BancoDeDadosService } from '../../services/banco-de-dados/banco-de-dados.service';

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
  errorLog: string = '';

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public registroLoginService: RegistroLoginService,
    private serviceAPI: BancoDeDadosService
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

  login() {
    const body = {
      email: this.email,
      senha: this.senha
    }

    this.serviceAPI.fazerLogin(body).subscribe({
      next: (result) => {
        localStorage.setItem('userInfo', JSON.stringify(result));
        this.dialog.closeAll();
      },
      error: (err) => {
        this.errorLog = err.error.textMessage;
      }
    })

  }
}
