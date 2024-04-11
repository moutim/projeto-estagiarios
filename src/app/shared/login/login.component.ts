import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  cardVisible = true;
  isRegistering = false;

  constructor(public dialog: MatDialog,
    private router: Router){

  }

  closeCardLog(){

    this.dialog.closeAll();

    this.cardVisible = false;

  }


  goToRegister() {
    this.isRegistering = true;
  }


}
