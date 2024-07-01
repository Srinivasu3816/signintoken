import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
    {
    path:'',redirectTo:'Signin',pathMatch:'full'
    },
    {
        path:'signin',component:SigninComponent
    },
    {
        path:'',component:LayoutComponent,
        children:[
            {
                path:'dashboard',component:DashboardComponent
            }
        ]
    }
];
