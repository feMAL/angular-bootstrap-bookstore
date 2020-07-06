import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { CarouselComponent } from './carousel/carousel.component';
import { SuscribeComponent } from './suscribe/suscribe.component';
import { CardsQuickviewComponent } from './cards-quickview/cards-quickview.component';
import { AutorsHomeviewComponent } from './autors-homeview/autors-homeview.component';
import { BannerComponent } from './banner/banner.component';
import { BooksCardsComponent } from './books-cards/books-cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    SuscribeComponent,
    CardsQuickviewComponent,
    AutorsHomeviewComponent,
    BannerComponent,
    BooksCardsComponent
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
