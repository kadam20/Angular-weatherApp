import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './citycard/card/card.component';
import { TemperatirePipe } from './../assets/temperature.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FeaturedCityComponent } from './featured-city/featured-city.component';
import { ForecastComponent } from './forecast/forecast.component';
import { DayOfTheWeekPipe } from '../assets/day-of-the-week.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TemperatirePipe,
    FeaturedCityComponent,
    ForecastComponent,
    DayOfTheWeekPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
