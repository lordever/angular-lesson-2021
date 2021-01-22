import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ReplaySubject, Subject} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() childTemplate?: TemplateRef<any>;

  public categories$: Subject<string[]> = new ReplaySubject<string[]>();

  public selectedCategory = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => this.categories$.next(categories));
  }

  public changeCategory(event: MouseEvent, newCategory: string = ''): void {
    event.preventDefault();
    this.selectedCategory = newCategory;
  }
}
