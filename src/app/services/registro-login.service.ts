import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroLoginService {
  isRegistering: boolean = true;

  constructor() { }

  changeRegistering(){
    this.isRegistering = !this.isRegistering;
  }
}
