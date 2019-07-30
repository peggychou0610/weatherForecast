import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { TodayComponent } from './today/today.component';
import { FilterPipe } from './filter.pipe';
import { TodayService } from './today/today.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchComponent,
    TodayComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    TodayService,
    SearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
