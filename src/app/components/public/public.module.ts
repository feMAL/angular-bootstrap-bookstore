import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books/books.component'
import { CategoriesComponent } from './categories/categories.component'
import { AutorsComponent } from './autors/autors.component'
import { LoginComponent } from './login/login.component'
import { SearchComponent } from './search/search.component'
import { SingupComponent } from './singup/singup.component'
import { NextsComponent } from './nexts/nexts.component'
import { HomeModule } from './home/home.module';
import { PrivateModule } from '../private/private.module';
import { RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AutorComponent } from './autor/autor.component';



@NgModule({
  declarations: [
    BooksComponent,
    CategoriesComponent,
    AutorsComponent,
    LoginComponent,
    SearchComponent,
    SingupComponent,
    NextsComponent,
    BookComponent,
    AutorComponent 
  ],
  imports: [
    CommonModule,
    HomeModule,
    PrivateModule
  ],
  exports: [
    BooksComponent,
    CategoriesComponent,
    AutorsComponent,
    LoginComponent,
    SearchComponent,
    SingupComponent,
    NextsComponent
  ]
})
export class PublicModule { }
