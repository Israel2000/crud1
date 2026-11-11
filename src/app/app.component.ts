import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudPracticeComponent } from './crud-practice/crud-practice.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrudPracticeComponent, EnquiryFormComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrl: './app.component.css'
})
export class AppComponent {}