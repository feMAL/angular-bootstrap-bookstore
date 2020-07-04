import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    SearchComponent
  ]
})
export class AutoresModule { }
