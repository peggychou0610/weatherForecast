import { Component, OnInit } from '@angular/core';

import { WeatherService, ResultsItem } from '../weather/weather.service';
import { TodayService } from './today.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  weather: Array<ResultsItem>;
  weatherToday = [];
  tweatherByRegion = [];
  tag = false;

  constructor(private service: WeatherService, private region: TodayService) { }

  ngOnInit() {
    const getDate = new Date().toLocaleDateString('fr-CA');
    this.service.getWeather().subscribe(data => {
      this.weather = data.result.results;
      const allWeather = this.weather;
      this.getWeatherToday(getDate, allWeather);
    });
  }

  getWeatherToday(getDate, allWeather) {
    let count = 0;
    for (let temp of allWeather) {
      const date = temp.startTime.split('T');
      if (date[0] === getDate) {
        this.weatherToday[count] = temp;
        count++;
      }
    }
  }

  showByRegion(r) {
    this.tag = true;
    this.tweatherByRegion = this.region.getRegion(r, this.weatherToday);
  }

}
