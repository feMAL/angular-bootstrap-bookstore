import { Routes } from '@angular/router'

import { HomeComponent } from './components/public/home/home.component'
import { LoginComponent } from './components/public/login/login.component'
import { SingupComponent } from './components/public/singup/singup.component'
import { NextsComponent } from './components/public/nexts/nexts.component'
import { AutorsComponent } from './components/public/autors/autors.component'
import { AutorComponent } from './components/public/autor/autor.component'
import { SearchComponent } from './components/public/search/search.component'
import { BooksComponent } from './components/public/books/books.component'
import { BookComponent } from './components/public/book/book.component'

import { __LOGIN } from './components/private/private.router'

export const __ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login',
      component: LoginComponent,
      children: __LOGIN
    },
    { path: 'singup', component: SingupComponent},
    { path: 'nexts', component: NextsComponent},
    { path: 'autors', component:AutorsComponent},
    { path: 'books', component:BooksComponent},
    { path: 'autor/:idAutor', component:AutorComponent},
    { path: 'autor/:idAutor/book/:idBook', component:BookComponent},
    { path: 'search/:argument', component: SearchComponent},
    { path: '' , redirectTo:'home', pathMatch:'full'},
    
]