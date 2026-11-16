import { Component, inject, OnInit, signal } from '@angular/core';
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
  protected readonly locations = signal<Location[]>([]);

  ngOnInit() {
    this.locationService.findAll().subscribe((locations) => this.locations.set(locations));
  }
}
