import { Component } from '@angular/core';
import { Sneakers } from './ISneakers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  imgs: Array<Sneakers> = [
    {
      image: '../../assets/tenis1.jpg',
      title: 'Sneaker 1',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 159.90
    },
    {
      image: '../../assets/tenis2.jpg',
      title: 'Sneaker 2',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 99.90
    },
    {
      image: '../../assets/tenis3.jpg',
      title: 'Sneaker 3',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 199.90
    },
    {
      image: '../../assets/tenis4.jpg',
      title: 'Sneaker 4',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 239.90
    },
    {
      image: '../../assets/tenis5.jpg',
      title: 'Sneaker 5',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 179.90
    },
    {
      image: '../../assets/tenis6.jpg',
      title: 'Sneaker 6',
      description: 'Este sneaker é muito bom pelo fato de...',
      price: 119.90
    }
  ]
}
