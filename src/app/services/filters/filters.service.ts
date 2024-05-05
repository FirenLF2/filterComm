import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  getAll(): String[] {
    return [
      '/assets/images/filters/filter-1.jpg',
      '/assets/images/filters/filter-2.jpg',
      '/assets/images/filters/filter-3.jpg',
      '/assets/images/filters/filter-4.jpeg',
      '/assets/images/filters/filter-5.jpg',
      '/assets/images/filters/filter-6.jpg',
    ];
  }
}
