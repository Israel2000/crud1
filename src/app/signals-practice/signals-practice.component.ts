import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-signals-practice',
  styleUrl: './signals-practice.component.css',
  template: `
    <p>Count: {{ count() }} </p>
      <button (click)="increment()">+1</button>

    <input type="number" (input)="price.set($any($event.target).value)" />
    <p>Total with tax: {{ total() }}</p>

    <button (click)="toggle()">Toggle</button>
    @if (isOpen()) {<p>Content is visible</p> }

    <input [(ngModel)]="name" />
    <p>Hello, {{ name()}}!</p>

  `,
})
export class SignalsPracticeComponent {
  // writable state 
  count = signal(0);
  increment = () => this.count.update(n => n + 1);

  // Derived State (Input & Computed Output)
  price = signal(100);
  total = computed(() => this.price() * 1.2);

  // Conditional Visibility (Toggle & View)
  isOpen = signal(false);
  toggle = () => this.isOpen.update(v => !v);

  // Two-Way Model ([(ngModel)])
  name = signal('Angular');
}
