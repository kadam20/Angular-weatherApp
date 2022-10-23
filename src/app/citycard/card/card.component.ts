import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityData } from 'src/app/city-data';
import { WeatherService } from 'src/assets/weather.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() index: number = 0; 
  @Input() cityName: string = ''
  @Output() getData = new EventEmitter<string>();
  @Output() deleteCity = new EventEmitter<string>();
  displayedData:CityData = {
    cityName:'No City',
    state: 'Not available',
    degree: 10,
    icon: '',
  }
  
  GetData(city: string) {
    this.weatherService.getCityCode(city).subscribe((cityResponse: any) => {    
          this
            .weatherService.getCityData(`${cityResponse[0].Key}`)
            .subscribe((weatherResponse: any) => {
              let getIcon:string = '';
              switch (weatherResponse[0].WeatherText) {
                case 'Sunny':
                  getIcon = '../assets/pictures/sunny.png';
                  break;
                case 'Cloudy':
                  getIcon = '../assets/pictures/cloudy.png';
                  break;
                case 'Partly Cloudy':
                  getIcon = '../assets/pictures/partly_cloudy.png';
                  break;
                case 'Mostly Cloudy':
                  getIcon = '../assets/pictures/mostly_cloudy.png';
                  break;
                case 'Rainy':
                  getIcon = '../assets/pictures/rainy.png';
                  break;
                case 'Snowy':
                  getIcon = '../assets/pictures/snowy.png';
                  break;
                default:
                  getIcon = '../assets/pictures/sunny.png';
                  break;
              }
              console.log('weatherResponse', weatherResponse[0].WeatherText)
              console.log('getIcon', getIcon)
              this.displayedData.cityName = this.cityName
              this.displayedData.state = `${cityResponse[0].Country.EnglishName}, ${cityResponse[0].Region.EnglishName}`,
              this.displayedData.degree = weatherResponse[0].Temperature.Metric.Value,
              this.displayedData.icon =  getIcon
              console.log(this.displayedData.icon)
            });
      });
    }

    add(){
      this.getData.emit(this.cityName)
    }

    delete(){
      this.deleteCity.emit(this.cityName)
    }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.GetData(this.cityName)
  }

}
