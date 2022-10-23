import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CityData } from 'src/app/city-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'il7yGqu8xNqeL1kgHJz9xSq9Up5dZhHF';
  private apiKeyTwo = 'fWYwSt7F5P3kKxZNoyApko8VevJ3N6os'

  constructor(private http: HttpClient) {}

  getCityCode(locationName: string) {
    let response = this.http.get(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${locationName}`
    );
    return response;
  }

  getCityData(locationCode: string) {
    let response = this.http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${this.apiKey}`
    );
    return response;
  }

  getExtendedCityData(locationCode: string){
    let response = this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationCode}?apikey=${this.apiKey}&metric=true`)
    return response;
  }
}
