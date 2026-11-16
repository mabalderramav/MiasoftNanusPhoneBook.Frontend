import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { LocationService } from './services/location.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: LocationService,
          useValue: {
            findAll: () => of([{ id: '1', code: 'LPZ', description: 'La Paz' }]),
          },
        },
      ],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render locations', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-location li')?.textContent?.trim()).toBe('LPZ');
  });
});
