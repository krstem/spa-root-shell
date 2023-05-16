import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app11-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.scss' ],
})
export class HomeComponent {
  url = assetUrl('code-loader.gif');

  products: any[] = [
    {
      name: 'Product 1',
      description: 'This is the description of Product 1.',
      price: 19.99,
      image: 'path/to/product1-image.jpg'
    },
    {
      name: 'Product 2',
      description: 'This is the description of Product 2.',
      price: 24.99,
      image: 'path/to/product2-image.jpg'
    },
    // Add more products here
  ];

}
