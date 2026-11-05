import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  imports: [ProductDetailsComponent],
  selector: 'bot-catalog',
  styleUrl: './catalog.componenet.css',
  templateUrl: './catalog.componenet.html',
})
export class CatalogComponenet {
}
