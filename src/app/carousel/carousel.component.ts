import { Component, OnInit, Input } from '@angular/core';
import { CarouselModel } from '../models/CarouselModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() data: CarouselModel[];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    variableWidth: false,
    infinite: false,
    centerPadding: '10px',
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
}
