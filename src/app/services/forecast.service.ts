import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../models/daily';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private readonly FORECAST_DAILY_API: string;

  constructor(private httpClient: HttpClient) { 
    this.FORECAST_DAILY_API = 'https://api.open-meteo.com/v1/forecast?latitude=';
  }

  public getForecastDailyDatas(latitude: number, longitude: number): Observable<Root> {
    return this.httpClient.get<Root>(this.FORECAST_DAILY_API + latitude + '&longitude=' + longitude + '&timezone=auto&daily=weathercode');
  }

}
