import { Component } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { clear } from 'console';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value = '';
  

  _stopClear = false;

  constructor(public dialog: MatDialog){

  }

  clearInput(){
   this.value = '';


  }

  stopClear(){
    if(!this._stopClear){
      this._stopClear = true;
    }



  }

  openSearch(){
    alert('Não há filmes para serem listados!')

  }

  openLogin(){
    this.dialog.open(LoginComponent);


  }



}
