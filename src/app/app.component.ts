import {Component, OnInit} from '@angular/core';
import {Product} from './model/product.model';
import {products} from './mocks/products.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public name = '';
  public selectedCategory = '';
  public currentCurrency = '$';
  public productList: Product[] = [];
  public searchValue = '';
  public cartQuantity = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.productList = this.getProducts(this.selectedCategory);
  }

  public getCategories(): string[] {
    return products
      .map(p => p.category)// Create a new array holding categories
      .filter((c, index, array) => array.indexOf(c) === index)   // Remove duplicates
      .sort();
  }

  // | MouseEvent | FocusEvent |  TouchEvent | DragEvent | KeyboardEvent |
  // |:----------:|:----------:|:-----------:|:---------:|:-------------:|
  // |    click   |    focus   |  touchstart |    drag   |    keypress   |
  // |   mouseup  |    blur    |  touchmove  |    drop   |     keyup     |
  // | mouseleave |   focusin  | touchcancel |  dragend  |    keydown    |
  // |  mouseover |  focusout  |   touchend  |  dragover |               |
  public onChangeCategory(newCategory: string = ''): void {
    this.selectedCategory = newCategory;
    this.searchProducts();
  }

  public searchProducts(event?: KeyboardEvent): void {
    this.searchValue = event ? (event.target as HTMLInputElement).value.toLocaleLowerCase() : this.searchValue;
    const filteredProducts = this.getProducts(this.selectedCategory);
    if (this.searchValue.length) {
      this.productList = filteredProducts
        .filter(p => p.name.toLocaleLowerCase().includes(this.searchValue));
    } else {
      this.productList = filteredProducts;
    }
  }

  public addToCart(): void {
    this.cartQuantity++;
  }

  private getProducts(category?: string): Product[] {
    if (category) {
      this.selectedCategory = category;
      return products
        .filter(p => category === p.category || category === null);
    }
    return products;
  }
}
