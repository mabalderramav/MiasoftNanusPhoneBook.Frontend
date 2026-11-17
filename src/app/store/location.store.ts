import { inject, Service } from '@angular/core';
import { LocationService } from '../services/location.service';
import { httpResource } from '@angular/common/http';
import { Location } from '../model/location';

/**
 * LocationStore is a service class that manages the state of location data in the application.
 * It uses the LocationService to fetch location data from the backend and provides reactive
 * properties for components to subscribe to. The store also handles loading and error states.
 */
@Service({ autoProvided: false })
export class LocationStore {
  private readonly locationService = inject(LocationService);
  readonly locationsResource = httpResource<Location[]>(() => this.locationService.resourceUrl, {
    defaultValue: [] as Location[],
  });

  readonly $locations = this.locationsResource.value;
  readonly $loading = this.locationsResource.isLoading;
  readonly $error = this.locationsResource.error;

  /**
   * Reloads the location data by invoking the reload method of the locationsResource.
   * This method can be called to refresh the location data in the store.
   * It will trigger a new HTTP request to fetch the latest location data from the backend.
   * The reactive properties ($locations, $loading, $error) will be updated accordingly.
   */
  reload() {
    this.locationsResource.reload();
  }
}
