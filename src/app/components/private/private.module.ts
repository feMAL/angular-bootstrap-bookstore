import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { EditorialsComponent } from './editorials/editorials.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent,
    LibrosComponent,
    AutoresComponent,
    CategoriesComponent,
    TagsComponent,
    EditorialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    WelcomeComponent
  ]
})
export class PrivateModule { }
