import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistroLoginService } from '../../services/registro-login.service';
import { BancoDeDadosService } from '../../services/banco-de-dados/banco-de-dados.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  cardVisible = true;
  registerForm: FormGroup;
  hide = true;
  errorLog: string = '';

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public registroLoginService: RegistroLoginService,
    private formBuilder: FormBuilder,
    private serviceAPI: BancoDeDadosService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    },     { validator: this.MustMatch('password', 'confirmPassword')    } );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    const body = {
      nome: this.registerForm.value.name,
      sobrenome: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      senha: this.registerForm.value.password
    }

    this.serviceAPI.cadastrarUsuario(body).subscribe({
      next: (result) => {
        console.log(result);
        this.registroLoginService.changeRegistering();
      },
      error: (err) => {
        this.errorLog = err.error.textMessage;
      }
    })

  }

  closeCardLog() {
    this.dialog.closeAll();

    this.cardVisible = false;
  }

  goToLogin() {
    this.registroLoginService.changeRegistering();
  }
}
