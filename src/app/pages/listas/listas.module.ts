import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SharedComponentsModule } from "../../shared/shared-components/shared-components.module";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    declarations: [ListasComponent],
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        SharedComponentsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule
  ],
  exports: [
      ListasComponent
    ]
})
export class ListasModule {}
