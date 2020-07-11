import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { BooksComponent } from './books/books.component'
import { AutorsComponent } from './autors/autors.component'
import { LoginComponent } from './login/login.component'
import { SearchComponent } from './search/search.component'
import { SingupComponent } from './singup/singup.component'
import { NextsComponent } from './nexts/nexts.component'
import { HomeModule } from './home/home.module';
import { PrivateModule } from '../private/private.module';
import { BookComponent } from './book/book.component';
import { AutorComponent } from './autor/autor.component';
import { FilterComponent } from '../../shared/filter/filter.component'


@NgModule({
  declarations: [
    BooksComponent,
    AutorsComponent,
    LoginComponent,
    SearchComponent,
    SingupComponent,
    NextsComponent,
    BookComponent,
    AutorComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    PrivateModule,
    FormsModule
  ],
  exports: [
    BooksComponent,
    AutorsComponent,
    LoginComponent,
    SearchComponent,
    SingupComponent,
    NextsComponent,
    FilterComponent
  ]
})
export class PublicModule { }
