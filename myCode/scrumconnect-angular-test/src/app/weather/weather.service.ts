import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: 'YOUR KEY'
  };

  constructor(private http: HttpClient) { }

  searchWeatherForCity(city) {
    // implement the service
  }

}
