import { Component, effect, inject, viewChild } from '@angular/core';
import { LocationStore } from '../../store/location.store';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Location } from '../../model/location';

/**
 * The LocationComponent is an Angular component that displays a list of locations in a table format.
 * It uses Angular Material components for the table, input fields, pagination,
 * and sorting functionalities. The component interacts with the LocationStore to fetch and
 * manage location data.
 */
@Component({
  imports: [MatTableModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatSortModule],
  selector: 'app-location',
  styleUrl: './location.component.css',
  templateUrl: './location.component.html',
  providers: [LocationStore],
})
export class LocationComponent {
  private readonly locationStore = inject(LocationStore);
  protected readonly $locations = this.locationStore.$locations;
  protected readonly dataSource = new MatTableDataSource<Location>();
  protected readonly $paginator = viewChild(MatPaginator);
  protected readonly $sort = viewChild(MatSort);
  protected readonly displayedColumns: string[] = ['id', 'code', 'description'];

  /**
   * Initializes the LocationComponent.
   * Sets up an effect to update the data source whenever the paginator, sort, or locations change.
   */
  constructor() {
    effect(() => {
      const paginator = this.$paginator();
      const sort = this.$sort();

      this.dataSource.paginator = paginator;
      this.dataSource.sort = sort;
      this.dataSource.data = this.$locations();
    });
  }

  /**
   * Applies a filter to the data source based on the user's input.
   * @param event The input event containing the filter value.
   */
  applyFilter(event: any) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
