import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  public searchValue = '';

  public productList: Product[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        const categoryId = params?.categoryId || '';
        this.productService.setCurrentCategory(categoryId);
        this.productList = this.productService.getProductsByCategory();
      });
  }
}
