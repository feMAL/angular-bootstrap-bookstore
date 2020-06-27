import { Routes } from '@angular/router'

import { HomeComponent } from './components/public/home/home.component'
import { LoginComponent } from './components/public/login/login.component'
import { SingupComponent } from './components/public/singup/singup.component'
import { NextsComponent } from './components/public/nexts/nexts.component'
import { CategoriesComponent } from './components/public/categories/categories.component'
import { AutorsComponent } from './components/public/autors/autors.component'
import { SearchComponent } from './components/public/search/search.component'
import { BooksComponent } from './components/public/books/books.component'
import { __LOGIN } from './components/private/private.router'

export const __ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login',
      component: LoginComponent,
      children: __LOGIN
    },
    { path: 'singup', component: SingupComponent},
    { path: 'nexts', component: NextsComponent},
    { path: 'categories', component:CategoriesComponent},
    { path: 'autors', component:AutorsComponent},
    { path: 'books', component:BooksComponent},
    { path: 'search/:argument', component: SearchComponent},
    { path: '' , redirectTo:'home', pathMatch:'full'},
    
]