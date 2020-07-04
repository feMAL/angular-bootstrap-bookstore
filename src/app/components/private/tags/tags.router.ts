import { Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

export const __TAG: Routes = [
    { path: 'add', component: AddComponent},
    { path: 'edit', component: EditComponent},
    { path: 'search', component: SearchComponent},
    { path: '**', pathMatch:'full', redirectTo:'add'}
]