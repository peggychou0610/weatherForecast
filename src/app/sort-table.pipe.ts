import { Pipe, PipeTransform } from '@angular/core';
import { ResultsItem } from './weather/weather.service';

@Pipe({
  name: 'sortTable'
})
export class SortTablePipe implements PipeTransform {

  transform(weather: Array<ResultsItem>, key: number): Array<ResultsItem> {
    let switching: boolean, i: number, x, y, shouldSwitch: boolean, dir: string, switchcount = 0;
    switching = true;
    dir = 'asc';
    while (switching) {
      switching = false;
      for (i = 1; i < (weather.length - 1); i++) {
        shouldSwitch = false;
        switch (key) {
          case 0:
            x = weather[i]._id;
            y = weather[i + 1]._id;
            break;
        }
        if (dir === 'asc') {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        // } else if (dir === 'desc') {
        //   if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //     shouldSwitch = true;
        //     break;
        //   }
        }
      }
      if (shouldSwitch) {
        weather = this.doSwitch(i, weather);
        switching = true;
        // switchcount ++;
      // } else {
      //   if (switchcount === 0 && dir === 'asc') {
      //     dir = 'desc';
      //     switching = true;
      //   }
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
