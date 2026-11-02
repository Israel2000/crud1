import { Routes } from '@angular/router';
import { NewEnquiryComponent } from './enquiry/new-enquiry/new-enquiry.component';
import { EnquiryListComponent } from './enquiry/enquiry-list/enquiry-list.component';
import { CategoryMasterComponent } from './enquiry/category-master/category-master.component';
import { StatusMasterComponent } from './enquiry/status-master/status-master.component';
import { LoginComponent } from './enquiry/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: NewEnquiryComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'status',
        component: StatusMasterComponent
    },
    {
        path: 'category',
        component: CategoryMasterComponent
    },
    {
        path: 'enquiry-list',
        component: EnquiryListComponent
    },
    {
        path: 'enquiry-detail',
        component: EnquiryListComponent
    }

];
