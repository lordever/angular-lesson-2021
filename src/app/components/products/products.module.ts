import {NgModule} from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {ProductItemComponent} from './product-item/product-item.component';
import {CurrencyPipe} from '../../pipes/currency.pipe';
import {LargeTextDirective} from '../../directives/large-text.directive';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {CartService} from '../../services/cart.service';
import {ProductsComponent} from './products.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

@NgModule({
  declarations: [ProductItemComponent, CurrencyPipe, LargeTextDirective, ProductsComponent, ProductDetailsComponent],
  providers: [ProductService, CartService],
  imports: [BrowserModule, CommonModule],
  exports: [ProductItemComponent, ProductsComponent]
})
export class ProductsModule {
}
