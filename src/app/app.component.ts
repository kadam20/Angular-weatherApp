import { Component } from '@angular/core';
import { CityData } from './city-data';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weather-app';
  numberOfCards: number[] = [0, 1, 2, 3, 4];
  myData: any;
  data: CityData[] = [
    {
      cityName: 'Seattle',
      state: 'Washington, United States',
      degree: 11,
      icon: './pictures/cloudy.png',
    },
    {
      cityName: 'Miami',
      state: 'Florida, United States',
      degree: 11,
      icon: './pictures/cloudy.png',
    },
    {
      cityName: 'Seattle',
      state: 'Washington, United States',
      degree: 11,
      icon: './pictures/cloudy.png',
    },
    {
      cityName: 'Miami',
      state: 'Florida, United States',
      degree: 11,
      icon: './pictures/cloudy.png',
    },
    {
      cityName: 'Seattle',
      state: 'Washington, United States',
      degree: 11,
      icon: './pictures/cloudy.png',
    },
  ];

  triggerGetData() {
    this.weatherService.getData('Budapest').subscribe((data) => {
      this.myData = data;
      console.log('myData: ', this.myData)
    });
  }

  //Injecting Service
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    //this.data = this.weatherService.getData('hi')
    //console.log(this.data)
  }
}
