import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public searchValue = '';
  public cartCount = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  public searchProducts(event: KeyboardEvent): void {
    this.searchValue = (event.target as HTMLInputElement).value;
  }
}
