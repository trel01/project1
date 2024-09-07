import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // ส่งพารามิเตอร์ที่ต้องการไปในฟังก์ชัน
    const applicationKey = 'F4EAE399ED0BDAB7E0B03462D641DEB2';
    const apiKey = '7d76f688-062e-45ae-8ddc-7c9bd9c3598c';
    const macAddress = '08:F9:E0:78:0C:71';

    this.weatherService.getWeatherData(applicationKey, apiKey, macAddress).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error: any) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
