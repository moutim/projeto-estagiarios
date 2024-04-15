import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCard,
    MatStepperModule,
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
