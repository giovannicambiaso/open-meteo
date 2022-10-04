import { Component, OnInit } from '@angular/core';

import { GeocodingService } from 'src/app/services/geocoding.service';
import { Result } from 'src/app/models/result';
import { ForecastService } from 'src/app/services/forecast.service';
import { Daily } from 'src/app/models/daily';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  public cityName: string;
  public results: Result[];
  public daily: Daily;

  constructor(
    private geocodingService: GeocodingService, 
    private forecastService: ForecastService) { 
      this.cityName = 'Genoa';
      this.results = [];
      this.daily = {
        time: [],
        weathercode: []
      };
  }

  ngOnInit(): void { 
    this.getGeocodingDatas();
    this.getForecastDailyDatas();
  }

  public getGeocodingDatas(): void {
    this.geocodingService.getGeocodingDatas(this.cityName).subscribe({
      next: root => this.results = root.results,
      error: error => console.error(error)
    });
  }

  public getForecastDailyDatas(): void {
    this.geocodingService.getGeocodingDatas(this.cityName).subscribe({
      next: root =>
        this.forecastService.getForecastDailyDatas(
          root.results[0].latitude, 
          root.results[0].longitude).subscribe({
            next: root => this.daily = root.daily,
            error: error => console.error(error)
        }),
      error: error => console.error(error)
    });
  }

}
