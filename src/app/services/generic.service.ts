import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * GenericService is an abstract class that provides basic CRUD operations for a specific entity
 * type T.
 * It uses Angular's HttpClient to perform HTTP requests to a specified URL (utl) for the entity.
 *
 * @template T - The type of the entity that this service will manage.
 */
@Service({ autoProvided: false })
export abstract class GenericService<T> {
  protected httpClient = inject(HttpClient);
  protected abstract url: string;

  /**
   * Gets the resource URL for the entity type T.
   */
  get resourceUrl(): string {
    return this.url;
  }

  /**
   * Finds all entities of type T.
   */
  findAll() {
    return this.httpClient.get<T[]>(this.url);
  }

  /**
   * Finds an entity of type T by its ID.
   */
  findById(id: number) {
    return this.httpClient.get<T>(`${this.url}/${id}`);
  }

  /**
   * Saves a new entity of type T.
   */
  save(entity: T) {
    return this.httpClient.post<T>(this.url, entity);
  }

  /**
   * Updates an existing entity of type T by its ID.
   */
  update(id: number, entity: T) {
    return this.httpClient.put<T>(`${this.url}/${id}`, entity);
  }

  /**
   * Deletes an entity of type T by its ID.
   */
  delete(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
