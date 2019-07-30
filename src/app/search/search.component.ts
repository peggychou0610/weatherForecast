import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <table class="search">
        <tr>
          <th colspan="2" style="text-align: left;">查詢條件</th>
        </tr>
        <tr>
          <td>地區：<input (keyup)="onKey($event)" type="text" placeholder="Search for..."></td>
          <td>日期：<input type="date"></td>
        </tr>
      </table>
      <app-weather [childMessage]="parentMessage"></app-weather>
    </div>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  parentMessage: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    // childMessage: weather component
    this.parentMessage = event.target.value;
  }

}
