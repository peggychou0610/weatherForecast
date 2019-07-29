import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  { providedIn: 'root' }
)

export class WeatherService {

  constructor(private http: HttpClient) { }

  getUrl = 'https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9';

  getWeather() {
    return this.http.get<RootObject>(this.getUrl);
  }

  doSort(weather: Array<ResultsItem>, key: number) {
    let switching: boolean, i: number, x, y, shouldSwitch: boolean, dir: string, switchcount = 0;
    switching = true;
    dir = 'asc';
    while (switching) {
      switching = false;
      for (i = 0; i < (weather.length - 1); i++) {
        shouldSwitch = false;
        switch (key) {
          case 0:
            x = weather[i]._id;
            y = weather[i + 1]._id;
            break;
          case 3:
            x = weather[i].parameterName2;
            y = weather[i + 1].parameterName2;
            break;
          case 4:
            x = weather[i].parameterName3;
            y = weather[i + 1].parameterName3;
            break;
          case 5:
            x = weather[i].parameterValue1;
            y = weather[i + 1].parameterValue1;
            break;
        }
        if (dir === 'asc') {
          if (Number(x) > Number(y)) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (Number(x) < Number(y)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        weather = this.doSwitch(i, weather);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
    return weather;
  }

  doSwitch(i: number, weather: Array<ResultsItem>) {
    let temp;
    temp = weather[i];
    weather[i] = weather[i + 1];
    weather[i + 1] = temp;
    return weather;
  }

}

export interface RootObject {
  result: Result;
}

export interface Result {
  limit: number;
  offset: number;
  count: number;
  sort: string;
  results: ResultsItem[];
}

export interface ResultsItem {
  parameterName2: string;
  parameterUnit2: string;
  parameterName1: string;
  parameterUnit3: string;
  parameterName3: string;
  parameterValue1: string;
  locationName: string;
  endTime: string;
  startTime: string;
  _id: number;
}
