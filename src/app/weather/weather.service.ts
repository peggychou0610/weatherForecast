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
