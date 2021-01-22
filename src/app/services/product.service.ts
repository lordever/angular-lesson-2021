import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject, Subscriber } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private selectedCategory$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private loading$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProductsByCategory(): Observable<Product[]> {
    this.loading$.next(true);
    return combineLatest([this.getProducts(), this.selectedCategory$])
      .pipe(
        delay(1000),
        take(1),
        map(([products, category]: [Product[], string]) =>
          products.filter(p => category.length > 0 ? category === p.category : true)),
        tap(() => this.loading$.next(false))
      );
  }

  getCategories(): Observable<string[]> {
    return new Observable((subscriber: Subscriber<string[]>) => {
      this.getProducts().subscribe(products => {
        const categories = products
          .map(p => p.category)// Create a new array holding categories
          .filter((c, index, array) => array.indexOf(c) === index)   // Remove duplicates
          .sort();

        subscriber.next(categories);
      });
    });
  }

  public isLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getCurrentCategory(): Observable<string> {
    return this.selectedCategory$;
  }

  setCurrentCategory(value: string): void {
    this.selectedCategory$.next(value);
  }
}
