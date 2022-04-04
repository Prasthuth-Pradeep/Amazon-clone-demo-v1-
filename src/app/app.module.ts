import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EndOfSeaconSaleCardComponent } from './home/end-of-seacon-sale-card/end-of-seacon-sale-card.component';
import { TodaysDealComponent } from './home/todays-deal/todays-deal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EndOfSeaconSaleCardComponent,
    TodaysDealComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
