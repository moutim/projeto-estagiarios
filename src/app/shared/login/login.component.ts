import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  cardVisible = true;

  constructor(public dialog: MatDialog){

  }

  closeCardLog(){

    this.dialog.closeAll();

    this.cardVisible = false;

  }




}
