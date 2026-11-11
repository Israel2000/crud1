import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Product { id: number; name: string; price: number; }

@Injectable({ providedIn: "root" })
export class ProductService {
  private http = inject(HttpClient);
  private url = "/api/products";

  getAll(): Observable<Product[]> { return this.http.get<Product[]>(this.url); }
  create(p: Omit<Product, "id">): Observable<Product> {
    return this.http.post<Product>(this.url, p);
  }
  update(p: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${p.id}`, p);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
