import { Component } from '@angular/core';
import { WeatherService } from '../assets/weather.service';
import { WeeklyForecast } from './city-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultCities: string[] = [
    'Budapest',
    'Paris',
    'Helsinki',
    'Moscow',
    'Kyiv',
  ];
  cityName:string='Budapest';
  featuredData:WeeklyForecast[] = [];
  forecast:any = [];
  today:WeeklyForecast = {
    degree:0, 
    date:'',
    phrase:'',
  };;
  name:string = '';
  date = new Date();
  

  getData(cityName: string){
    this.weatherService.getCityCode(cityName).subscribe((cityResponse: any) => {
      this.weatherService.getExtendedCityData(`${cityResponse[0].Key}`).subscribe((weatherResponse: any)=>{
        this.featuredData = []
        console.log('weatherResponse', weatherResponse)
        weatherResponse.DailyForecasts.map((item:any)=>{
          let data:WeeklyForecast = {
            degree:0, 
            date:'',
            phrase:'',
          };
          data.degree = Math.round(((item.Temperature.Maximum.Value + item.Temperature.Minimum.Value) / 2)*100)/100;
          data.date = item.Date;
          data.phrase = item.Day.IconPhrase;
          this.featuredData.push(data)
        })
        this.featuredData.shift()
        this.name = cityName
      })
    this.weatherService.getCityData(`${cityResponse[0].Key}`).subscribe((todayResponse: any)=>{
      this.today = {
        degree: todayResponse[0].Temperature.Metric.Value,
        date: `${this.date.getFullYear()}.${this.date.getMonth()+1}.${this.date.getDate()}`,
        phrase: todayResponse[0].WeatherText
      }
      console.log('todayResponse', this.today)
    })
    })
  }

  changeCity(){
    this.getData(this.cityName)
  }

  addCity(){
    !this.defaultCities.includes(this.name) ? this.defaultCities.push(this.name) : alert('Item already exists')
  }

  deleteCity(city:string){
    this.defaultCities.length==1 ? alert("You shouldn't delete all favourite cities") : this.defaultCities = this.defaultCities.filter(e=>e !== city)
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getData(this.cityName)
    this.name = this.cityName
  }
}
