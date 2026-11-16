import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Location } from '../../model/location';
import { LocationService } from '../../services/location.service';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  it('renders locations when data arrives after the initial render', async () => {
    const locations = new Subject<Location[]>();
    TestBed.configureTestingModule({
      imports: [LocationComponent],
      providers: [{ provide: LocationService, useValue: { findAll: () => locations } }],
    });

    const fixture = TestBed.createComponent(LocationComponent);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('li')).toHaveLength(0);

    locations.next([
      { id: '1', code: 'LPZ', description: 'La Paz' },
      { id: '2', code: 'SCZ', description: 'Santa Cruz' },
    ]);
    locations.complete();
    await fixture.whenStable();

    expect(Array.from(element.querySelectorAll('li'), (item) => item.textContent?.trim()))
      .toEqual(['LPZ', 'SCZ']);
  });
});
