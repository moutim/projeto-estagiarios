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

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public registroLoginService: RegistroLoginService
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
}
