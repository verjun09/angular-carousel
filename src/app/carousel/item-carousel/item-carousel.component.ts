import { Component, OnInit, Input } from '@angular/core';
import { CarouselModel } from '../../models/CarouselModel';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css'],
})
export class ItemCarouselComponent {
  @Input() item: CarouselModel;
}
