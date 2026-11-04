import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponenet } from './catalog/catalog.componenet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogComponenet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'joes-robot-shop';
}
