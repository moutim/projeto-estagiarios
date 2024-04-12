import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroLoginService } from '../../services/registro-login.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  cardVisible = true;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public registroLoginService: RegistroLoginService
  ) {}

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.registerForm.valid && this.passwordsMatch()) {
      console.log(this.registerForm.value);
    }
  }

  passwordsMatch() {
    return (
      this.registerForm.get('password')?.value ===
      this.registerForm.get('confirmPassword')?.value
    );
  }

  closeCardLog() {
    this.dialog.closeAll();

    this.cardVisible = false;
  }
  goToLogin() {
    this.registroLoginService.changeRegistering();
  }
}
