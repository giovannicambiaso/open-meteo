import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private readonly GEOCODING_API: string;
  private readonly GEOCODING_COUNT: string;

  constructor(private httpClient: HttpClient) { 
    this.GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search?name=';
    this.GEOCODING_COUNT = '&count=1';
  }

  public getGeocodingDatas(cityName: string): Observable<Root> {
    return this.httpClient.get<Root>(this.GEOCODING_API + cityName + this.GEOCODING_COUNT);
  }

}
