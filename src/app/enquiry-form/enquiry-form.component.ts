import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  standalone: true,
  selector: 'app-enquiry-form',
  styleUrl: './enquiry-form.component.css',
  templateUrl: './enquiry-form.component.html',
})
export class EnquiryFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ["", Validators.required, Validators.minLength(2)],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.pattern(/^[0-9+\-() ]{7,15}$/)]],
    service: ["", Validators.required],
    budget: ["", Validators.required],
    message: ["", [Validators.required, Validators.minLength(10)]],
    consent: [false, Validators.requiredTrue],
  });

  submitted: any = null;

  onSubmit() {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = this.form.value;
    this.form.reset();
  }
}
