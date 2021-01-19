import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {products} from '../mocks/products.mock';

@Injectable()
export class ProductService {
  private currentCategory = '';

  constructor() {
    this.currentCategory = this.getCategories()[0];
  }

  getProducts(): Product[] {
    return products;
  }

  getProductsByCategory(): Product[] {
    return products
      .filter(p => this.currentCategory === p.category || this.currentCategory === '');
  }

  getCategories(): string[] {
    return this.getProducts()
      .map(p => p.category)// Create a new array holding categories
      .filter((c, index, array) => array.indexOf(c) === index)   // Remove duplicates
      .sort();
  }

  getCurrentCategory(): string {
    return this.currentCategory;
  }

  setCurrentCategory(value: string): void {
    this.currentCategory = value;
  }
}
