import { Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

export const __AUTORES: Routes = [
    { path: 'add', component: AddComponent},
    { path: 'edit/:id', component: EditComponent},
    { path: 'search', component: SearchComponent},
    { path: '**', pathMatch:'full', redirectTo:'add'}
]