import { Routes } from '@angular/router';
import { CrudPracticeComponent } from './crud-practice/crud-practice.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { SignalsPracticeComponent } from './signals-practice/signals-practice.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: CrudPracticeComponent },
  { path: 'enquiries', component: EnquiryFormComponent },
  { path: 'signals', component: SignalsPracticeComponent },
  { path: '**', redirectTo: 'products' },
];
