import { Component, inject, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../model/location';

@Component({
  imports: [],
  selector: 'app-location',
  styleUrl: './location.component.css',
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {
  private readonly locationService = inject(LocationService);
  protected locations: Location[] = [];

  ngOnInit() {
    this.locationService.findAll().subscribe((locations) => (this.locations = locations));
  }
}
