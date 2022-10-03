import { Component, OnInit } from '@angular/core';

import { GeocodingService } from 'src/app/services/geocoding.service';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  private cityLatitude: number;
  private cityLongitude: number;

  public cityName: string;
  public results: Result[];

  constructor(private geocodingService: GeocodingService) { 
    this.cityLatitude = 0;
    this.cityLongitude = 0;
    this.cityName = '';
    this.results = [];
  }

  ngOnInit(): void { }

  public getGeocodingDatas(): void {
    this.geocodingService.getGeocodingDatas(this.cityName).subscribe({
      next: root => this.results = root.results,
      error: error => console.error(error)
    });
  }

}
