import { Component, OnInit, Input } from '@angular/core';

import { WeatherService, ResultsItem } from './weather.service';
import { SortTablePipe } from '../sort-table.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() childMessage: string;
  weather: Array<ResultsItem>;
  pipe: SortTablePipe;

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
    this.weather = this.pipe.transform(this.weather, key);
  }
}
