import { Service } from '@angular/core';
import { GenericService } from './generic.service';
import { Location } from '../model/location';
import { environment } from '../../environments/environment';

/**
 * LocationService is a service class that extends the GenericService to provide CRUD operations
 * specifically for the Location entity. It defines the base URL for the Location API endpoints
 * and utilizes the methods inherited from GenericService to perform HTTP requests.
 */
@Service()
export class LocationService extends GenericService<Location>{
  protected override url = `${environment.HOST}/api/v1/locations`;
}
