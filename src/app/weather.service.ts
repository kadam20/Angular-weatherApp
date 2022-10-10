import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'il7yGqu8xNqeL1kgHJz9xSq9Up5dZhHF'

  constructor(private http:HttpClient){}
  
  getData(locationName: string) {
    //let response = this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${locationName}`)
    let response = this.http.get('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=il7yGqu8xNqeL1kgHJz9xSq9Up5dZhHF&q=Budapest')
    console.log('hello there', response)
    return response
    // return [
    //   {
    //     'cityName': 'Seattle',
    //     'state': 'Washington, United States',
    //     'degree': 11,
    //     'icon': './pictures/cloudy.png',
    //   },
    //   {
    //     'cityName': 'Miami',
    //     'state': 'Florida, United States',
    //     'degree': 11,
    //     'icon': './pictures/cloudy.png',
    //   }
    // ];
  }
}
