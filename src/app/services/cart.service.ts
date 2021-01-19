import {Injectable} from '@angular/core';

@Injectable()
export class CartService {
  private cartCount = 0;

  constructor() {
  }

  setCartCount(cartCount: number): void {
    this.cartCount = cartCount;
  }

  getCartCount(): number {
    return this.cartCount;
  }
}
