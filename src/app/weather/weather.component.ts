import { Component, OnInit, Input } from '@angular/core';

import { WeatherService, ResultsItem } from './weather.service';

@Component({
  selector: 'app-weather',
  template: `
    <table class="weeklyWeather">
      <tr>
        <th colspan="8" style="text-align: left; cursor: auto;">一週天氣</th>
      </tr>
      <tr>
        <th (click)="sortBy(0)">ID</th>
        <th>地區</th>
        <th>天氣狀況</th>
        <th (click)="sortBy(3)">最高溫</th>
        <th (click)="sortBy(4)">最低溫</th>
        <th (click)="sortBy(5)">parameterValue1</th>
        <th>開始時間</th>
        <th>結束時間</th>
      </tr>
      <!--<ng-container *ngIf="weather.length > 0">-->
        <tr *ngFor="let data of weather | filter: childMessage">
          <td style="text-align: center;">{{ data?._id }}</td>
          <td style="text-align: center;">{{ data?.locationName }}</td>
          <td>{{ data?.parameterName1 }}</td>
          <td>{{ data?.parameterName2 }}°{{ data?.parameterUnit2 }}</td>
          <td>{{ data?.parameterName3 }}°{{ data?.parameterUnit3 }}</td>
          <td>{{ data?.parameterValue1 }}</td>
          <td>{{ data?.startTime | date: 'y-MM-dd, HH:mm:ss' }}</td>
          <td>{{ data?.endTime | date: 'y-MM-dd, HH:mm:ss' }}</td>
        </tr>
      <!-- </ng-container> -->
    </table>
  `,
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() childMessage: string;
  weather: Array<ResultsItem>;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.showWeather();
  }

  showWeather() {
    this.service.getWeather().subscribe(data => {
      this.weather = data.result.results;
    });
  }

  sortBy(key) {
    this.weather = this.service.doSort(this.weather, key);
  }
}
