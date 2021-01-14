import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  @Input() categories: string[] = [];

  @Input() childTemplate?: TemplateRef<any>;

  @Output() selectCategory = new EventEmitter<string>();

  public selectedCategory = '';

  constructor() {
  }

  public changeCategory(event: MouseEvent, newCategory: string = ''): void {
    event.preventDefault();
    this.selectedCategory = newCategory;
    this.selectCategory.emit(this.selectedCategory);
  }
}
