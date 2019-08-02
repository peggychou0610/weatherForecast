import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <table class="search">
        <tr>
          <th colspan="9" style="text-align: left;">查詢條件</th>
        </tr>
        <tr>
          <td>地區：<input (keyup)="onKey($event)" type="text" placeholder="Search for..."></td>
          <td>日期：</td>
          <td *ngFor="let date of arr">
            <input type="checkbox" (checked)="checkDate()" name="{{ date }}" value="{{ date }}" checked>{{ date }}
          </td>
        </tr>
      </table>
      <app-weather [childMessage]="parentMessage" [childDate]="parentDate"></app-weather>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentMessage: string;
  parentDate: string;
  arr = [];

  constructor() { }

  ngOnInit() {
    this.getDates();
  }

  onKey(event) {
    // childMessage: weather component
    this.parentMessage = event.target.value;
  }

  checkDate() {
    // childDate: weather component
    this.parentDate = 'checked';
  }

  getDates() {
    const today = new Date();
    for (var i = 0; i < 7; i++) {
      const temp = new Date();
      temp.setDate(today.getDate() + i);
      this.arr[i] = temp.toLocaleDateString('fr-CA');
    }
  }

}
