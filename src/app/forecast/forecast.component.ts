import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  timeSlots = [
    { time: '00:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
    { time: '03:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
    { time: '00:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
    { time: '03:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
    { time: '00:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
    { time: '03:00', icon: '🌧', temp: 'X', humidity: 'Y', wind: 'Z' },
 
  ];
}
