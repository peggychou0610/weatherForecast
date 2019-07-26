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
          <td>搜尋：<input (keyup)="onKey($event)" type="text" placeholder="Search for..."></td>
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
    this.parentMessage = event.target.value;
  }

}



// <div class="dropdown">
// <button class="dropbtn">地區</button>
// <div class="dropdown_City">
//   <button class="dropbtn">北部地區</button>
//   <div class="region">
//     <a href="#Yilan">宜蘭縣</a>
//     <a href="#Keelung">基隆市</a>
//     <a href="#Taipei">台北市</a>
//     <a href="#NewTaipei">新北市</a>
//     <a href="#Taoyuan">桃園市</a>
//     <a href="#Hsinchu">新竹市</a>
//     <a href="#HsinchuCounty">新竹縣</a>
//     <a href="#Miaoli">苗栗縣</a>
//   </div>
//   <button class="dropbtn">中部地區</button>
//   <div class="region">
//     <a href="#Taichung">台中市</a>
//     <a href="#Changhua">彰化縣</a>
//     <a href="#Nantou">南投縣</a>
//     <a href="#Yunlin">雲林縣</a>
//   </div>
//   <button class="dropbtn">南部地區</button>
//   <div class="region">
//     <a href="#Chiayi">嘉義市</a>
//     <a href="#ChiayiCounty">嘉義縣</a>
//     <a href="#Tainan">臺南市</a>
//     <a href="#Kaohsiung">高雄市</a>
//     <a href="#Pingtung">屏東縣</a>
//   </div>
//   <button class="dropbtn">東部地區</button>
//   <div class="region">
//     <a href="#Hualien">花蓮縣</a>
//     <a href="#Taitung">臺東縣</a>
//   </div>
//   <button class="dropbtn">離島</button>
//   <div class="region">
//     <a href="#Penghu">澎湖縣</a>
//     <a href="#Kinmen">金門縣</a>
//     <a href="#Lienchiang">連江縣</a>
//   </div>
// </div>
// </div>
