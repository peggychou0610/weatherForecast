import { Component, OnInit } from '@angular/core';

import { WeatherService, ResultsItem } from '../weather/weather.service';

@Component({
  selector: 'app-today',
  template: `
    <table class="tableToday">
      <tr>
        <th colspan="8" style="text-align: left;">今日天氣</th>
      </tr>
      <tr>
        <th>ID</th>
        <th>地區</th>
        <th>天氣狀況</th>
        <th>最高溫</th>
        <th>最低溫</th>
        <th>parameterValue1</th>
        <th>開始時間</th>
        <th>結束時間</th>
    </tr>
      <tr *ngFor="let data of weatherToday">
        <td style="text-align: center;">{{ data?._id }}</td>
        <td style="text-align: center;">{{ data?.locationName }}</td>
        <td>{{ data?.parameterName1 }}</td>
        <td>{{ data?.parameterName2 }}°{{ data?.parameterUnit2 }}</td>
        <td>{{ data?.parameterName3 }}°{{ data?.parameterUnit3 }}</td>
        <td>{{ data?.parameterValue1 }}</td>
        <td>{{ data?.startTime | date: 'y-MM-dd, HH:mm:ss' }}</td>
        <td>{{ data?.endTime | date: 'y-MM-dd, HH:mm:ss' }}</td>
      </tr>
  `,
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  weather: Array<ResultsItem>;
  weatherToday = [];

  constructor(private service: WeatherService) { }

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

}
