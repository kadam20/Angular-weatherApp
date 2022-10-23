import { Component, Input, OnInit } from '@angular/core';
import { WeeklyForecast } from '../city-data';

@Component({
  selector: 'featured-city',
  templateUrl: './featured-city.component.html',
  styleUrls: ['./featured-city.component.css'],
})
export class FeaturedCityComponent implements OnInit {
  @Input() featuredData:any = '';
  @Input() cityName: string = '';
  today: WeeklyForecast = this.featuredData[0];
  forecast:any = this.featuredData.shift();

  constructor() {}

  ngOnInit(): void {
    console.log(this.cityName)
    console.log('hello')
  }
  
}
