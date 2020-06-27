import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { CarouselComponent } from './carousel/carousel.component';
import { SuscribeComponent } from './suscribe/suscribe.component';
import { CardsQuickviewComponent } from './cards-quickview/cards-quickview.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    SuscribeComponent,
    CardsQuickviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CarouselComponent,
    SuscribeComponent,
    CardsQuickviewComponent
  ]
})
export class HomeModule { }
