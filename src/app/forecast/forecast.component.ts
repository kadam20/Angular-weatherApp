import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  @Input() degree:number =0;
  @Input() date:string ='2022.10.25 10:12.000';
  @Input() phrase:string ='sas';
  @Input() i:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
