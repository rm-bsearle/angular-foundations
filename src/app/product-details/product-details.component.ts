import { Component } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'bot-product-details',
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      description: 'A friendly robot with two eyes and a smile -- great for domestic use',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    }

  }
}
