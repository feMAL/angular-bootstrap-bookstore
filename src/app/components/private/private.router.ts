import { Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { LibrosComponent } from './libros/libros.component'
import { AutoresComponent } from './autores/autores.component'
import { CategoriesComponent } from './categories/categories.component'
import { TagsComponent } from './tags/tags.component'
import { EditorialsComponent } from './editorials/editorials.component'

import { __AUTORES } from './autores/autores.router'
import { __LIBROS } from './libros/libros.router'
import { __CATEGORY } from './categories/categories.router'
import { __EDITORIAL } from './editorials/editorials.router'
import { __TAG } from './tags/tags.router'

export const __LOGIN: Routes = [
    { path:'dashboard', component: DashboardComponent },
    { path:'books', component: LibrosComponent, children:  __LIBROS},
    { path:'autors', component: AutoresComponent, children:  __AUTORES  },
    { path:'categories', component: CategoriesComponent, children:  __CATEGORY },
    { path:'editorials', component: EditorialsComponent, children:  __EDITORIAL },
    { path:'tags', component: TagsComponent, children:  __TAG },
    { path: '**' , redirectTo:'dashboard', pathMatch:'full'}
]