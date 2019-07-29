import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodayService {

  constructor() { }

  getRegion(region, weatherToday) {
    var temp = [];
    switch (region) {
      case 'north':
        var i = 0;
        for (let row of weatherToday) {
          if (row.locationName == '宜蘭縣' || row.locationName == '基隆市' || row.locationName == '臺北市'
            || row.locationName == '新北市' || row.locationName == '桃園市' || row.locationName == '新竹市'
            || row.locationName == '新竹縣' || row.locationName == '苗栗縣') {
            temp[i] = row;
            i++;
          }
        }
        break;
      case 'west':
        var i = 0;
        for (let row of weatherToday) {
          if (row.locationName == '台中市' || row.locationName == '彰化縣'
            || row.locationName == '南投縣' || row.locationName == '雲林縣') {
            temp[i] = row;
            i++;
          }
        }
        break;
      case 'south':
        var i = 0;
        for (let row of weatherToday) {
          if (row.locationName == '嘉義市' || row.locationName == '嘉義縣' || row.locationName == '臺南市'
            || row.locationName == '高雄市' || row.locationName == '屏東縣') {
            temp[i] = row;
            i++;
          }
        }
        break;
      case 'east':
        var i = 0;
        for (let row of weatherToday) {
          if (row.locationName == '花蓮縣' || row.locationName == '臺東縣') {
            temp[i] = row;
            i++;
          }
        }
        break;
      case 'other':
        var i = 0;
        for (let row of weatherToday) {
          if (row.locationName == '澎湖縣' || row.locationName == '金門縣' || row.locationName == '連江縣') {
            temp[i] = row;
            i++;
          }
        }
        break;
    }
    return temp;
  }
}
