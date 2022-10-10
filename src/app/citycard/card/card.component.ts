import { Component, Input, OnInit } from '@angular/core';
import { CityData } from 'src/app/city-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: CityData ={
    cityName:'',
    state:'',
    degree:0,
    icon:''
  }
  @Input() index: number = 0
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
