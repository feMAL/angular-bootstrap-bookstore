import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { RemoveComponent } from './remove/remove.component';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    SearchComponent,
    RemoveComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    SearchComponent,
    RemoveComponent
  ]
})
export class LibrosModule { }
