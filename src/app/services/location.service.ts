import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/location';

@Service()
export class LocationService {
  private readonly url: string = `${environment.HOST}/api/v1`;
  private readonly http: HttpClient = inject(HttpClient);

  findAll() {
    const locationEndpoint: string = `${this.url}/locations`;
    return this.http.get<Location[]>(locationEndpoint);
  }
}
