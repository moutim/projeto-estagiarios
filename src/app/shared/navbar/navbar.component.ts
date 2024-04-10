import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog(){
    this.dialog.open(LoginComponent);


  }


}
