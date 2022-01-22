import { Component, Inject } from '@angular/core';
import { WeatherForecast, WeatherService} from '../services/weather.service';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  keyword: string = '';
  public forecasts: WeatherForecast[] = [];

  constructor(private WeatherService : WeatherService) {
    this.refresh();
  }

 refresh(){
  this.WeatherService.getWeather(this.keyword).subscribe(result => {
    this.forecasts =result;},
    error => console.error (error));
 }
  }
  

