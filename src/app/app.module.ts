import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemCarouselComponent } from './carousel/item-carousel/item-carousel.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, ItemCarouselComponent],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
