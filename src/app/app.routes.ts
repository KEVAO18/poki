import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerTypeComponent } from './per-type/per-type.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home/1/0', 
        pathMatch: 'full' 
    },
    {
        path: 'home/:offset/:shy',
        component: HomeComponent
    },
    {
        path: 'poki/:id',
        component: PerTypeComponent
    }
];
