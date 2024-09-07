// ในไฟล์ src/app/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private apiUrl = 'https://api.ecowitt.net/api/v3/device/real_time';  // URL ของ Ecowitt API

  constructor(private http: HttpClient) { }

  getWeatherData(applicationKey: string, apiKey: string, macAddress: string): Observable<any> {
    const params = {
      application_key: applicationKey,
      api_key: apiKey,
      mac: macAddress,
      call_back: 'all'
    };

    console.log('Params sent to API:', params);  // ตรวจสอบค่าพารามิเตอร์ที่ส่งไป
    return this.http.get(this.apiUrl, { params });
  }
}
