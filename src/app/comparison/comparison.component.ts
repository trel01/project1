import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent {
  sources = [
    { name: 'Weather API 1', temp: 18, humidity: 85, wind: 19.85, condition: '🌧 Heavy Rain' },
    { name: 'Weather API 2', temp: 20, humidity: 65, wind: 10.21, condition: '🌧 Rain' },
    { name: 'IoT Weather Station', temp: 19, humidity: 75, wind: 12.45, condition: '🌧' },
    { name: 'Forecast', temp: 18, humidity: 80, wind: 18.15, condition: '🌧 Heavy Rain' },
  ];
}
