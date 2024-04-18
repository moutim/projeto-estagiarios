import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { clear } from 'console';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  value = '';
  

  _stopClear = false;

  constructor(public dialog: MatDialog, private router: Router){

  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
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
