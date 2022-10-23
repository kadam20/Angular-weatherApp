import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperaturePipe'})
export class TemperatirePipe implements PipeTransform{
    transform(value: number): string {
        return `${Math.round((value*100)/100)}°C`
    }
}