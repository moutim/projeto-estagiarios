import { LoginComponent } from './../login/login.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cardVisible = true;
  isRegistering = false;

  constructor(public dialog: MatDialog,
   ){

  }
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {

    console.log('ssss')
    if (this.registerForm.valid && this.passwordsMatch()) {
      console.log(this.registerForm.value);


    }
  }

  passwordsMatch() {
    return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }




  closeCardLog(){

    this.dialog.closeAll();

    this.cardVisible = false;

  }
  goToLogin(){
    this.isRegistering = !this.isRegistering

  }

}
