import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormsModule } from "@angular/forms";
import { Product, ProductService } from '../product-service.service';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-crud-practice',
  styleUrl: './crud-practice.component.css',
  templateUrl: './crud-practice.component.html',
})
export class CrudPracticeComponent {
 private api = inject(ProductService);
  products: Product[] = [];
  name = "";
  price = 0;

  ngOnInit() { this.load(); }
  load() { this.api.getAll().subscribe((ps) => this.products = ps); }

  add() {
  this.api.create({ name: this.name, price: this.price }).subscribe((p) => {
    this.products = [...this.products, p];
    this.name = "";
    this.price = 0;
  });
}

  remove(id: number) {
  this.api.delete(id).subscribe(() => {
    this.products = this.products.filter((p) => p.id !== id);
  });
}
}
