import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dayOfTheWeek'})
export class DayOfTheWeekPipe implements PipeTransform {
  transform(value: any): string {
    let date = new Date(value)
    let dayNum = date.getDay();
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return days[dayNum % 7 -1] ? days[dayNum % 7 -1] : 'Sunday';
  }

}
