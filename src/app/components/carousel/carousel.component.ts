import { Component, OnInit, Input } from '@angular/core';
import { CarouselModel } from '../../models/CarouselModel';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() data: CarouselModel[];
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: true,
    dots: false,
    autoWidth: true,
    items: 5,
    nav: true,
    margin: 2,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 5,
      },
      1280: {
        items: 5,
      },
    },
  };
}
