import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SharedComponentsModule } from "../../shared/shared-components/shared-components.module";

@NgModule({
    declarations: [ListasComponent],
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule,
        MatListModule,
        SharedComponentsModule
    ]
})
export class ListasModule {}
