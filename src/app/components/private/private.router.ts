import { Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LibrosComponent } from './libros/libros.component'
import { AutoresComponent } from './autores/autores.component'
import { CategoriesComponent } from './categories/categories.component'
import { TagsComponent } from './tags/tags.component'
import { EditorialsComponent } from './editorials/editorials.component'

export const __LOGIN: Routes = [
    { path:'dashboard', component: DashboardComponent },
    { path:'books', component: LibrosComponent },
    { path:'autors', component: AutoresComponent },
    { path:'categories', component: CategoriesComponent },
    { path:'editorials', component: EditorialsComponent },
    { path:'tags', component: TagsComponent },
    { path: '**' , redirectTo:'dashboard', pathMatch:'full'}
]