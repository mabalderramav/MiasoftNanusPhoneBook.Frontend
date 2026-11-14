import { Component, signal } from '@angular/core';
import { LocationComponent } from './pages/location/location.component';

@Component({
  imports: [LocationComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Phonebook');
}
