import { Routes } from '@angular/router';
import { Login } from './+public/+pages/login/login';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BookPage } from './+private/book-page/book-page';
import { MembersPage } from './+private/members-page/members-page';
import { BorrowsPage } from './+private/borrows-page/borrows-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { Dashboard } from './+private/dashboard/dashboard';
import { privatrGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'private',canActivate:[privatrGuard],component:PrivateTemplate,children:[
        {path:'books',component:BookPage},
        {path:'members',component:MembersPage},
        {path:'borrows',component:BorrowsPage},
        {path:'reports',component:ReportsPage},
        {path:'dashboard',component:Dashboard},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},
    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'},
];
