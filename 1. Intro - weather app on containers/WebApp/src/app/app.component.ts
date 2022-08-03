import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  weatherData$: Observable<Weather[]>;

  constructor (private httpClient:HttpClient) {

    this.weatherData$ = this.httpClient.get<Weather[]>('http://localhost:15000/weatherforecast');

  }
}


interface Weather {
  date: string;
  temperatureC:number;
  temperatureF:number;
  summary:string;
}
