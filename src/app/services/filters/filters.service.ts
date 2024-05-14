import { Injectable } from '@angular/core';
import { Filter } from '../../shared/models/filters';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  getFilterById(id: string): Filter | undefined {
    return this.getAll().find((filter) => filter.id === +id);
  }

  getAll(): Filter[] {
    return [
      {
        id: 1,
        name: 'Filter Bag M25-E',
        cookTime: '10-20',
        price: 4.35,
        favorite: false,
        origins: [
          'long filter bag, M25 style, hard top ring, water/oil resistant',
        ],
        stars: 4.5,
        imageUrl: '/assets/images/filters/filter-1.png',
        tags: ['Oil-Filter', 'Bag', 'HardFilz'],
      },
      {
        id: 2,
        name: 'Oil Filter R300 Engine',
        price: 25.89,
        cookTime: '20-30',
        favorite: true,
        origins: [
          'Engine supportive Oil Filter, type R300, full-proof, rubber sealing ring, non-oil leakage, long service life, backflow suppression valve, high quality',
        ],
        stars: 4.7,
        imageUrl: '/assets/images/filters/filter-2.png',
        tags: ['Engine', 'Oil-Filter'],
      },
      {
        id: 3,
        name: 'Donaldson Heavy Duty Air Filter',
        price: 135.5,
        cookTime: '10-15',
        favorite: false,
        origins: [
          'durable and reliable, high quality, dependable filter, filters impurities and harmful particles',
        ],
        stars: 3.5,
        imageUrl: '/assets/images/filters/filter-3.png',
        tags: ['Engine', 'Air-Filter', 'Donaldson'],
      },
      {
        id: 4,
        name: 'Air Filter Dust Collector T-LW200',
        price: 99.95,
        cookTime: '15-20',
        favorite: true,
        origins: [
          'High Efficiency Blended Filter Media, 13.8" OD x 18 H Open/Closed Endcap Configuration',
        ],
        stars: 3.3,
        imageUrl: '/assets/images/filters/filter-4.png',
        tags: ['Dust Filter', 'Air-Filter'],
      },
      {
        id: 5,
        name: 'Air Filter OEM',
        price: 44.99,
        cookTime: '40-50',
        favorite: false,
        origins: [
          'highly durable, non-clogging mechanism, OEM Performance, off-road filtration',
        ],
        stars: 3.0,
        imageUrl: '/assets/images/filters/filter-5.png',
        tags: ['Engine', 'Air-Filter', 'OEM'],
      },
      {
        id: 6,
        name: 'Briggs Stratton Air Catridge Filter',
        price: 47.58,
        cookTime: '40-50',
        favorite: false,
        origins: [
          'Oval style pleated paper air filter, Filters out dirt and debris, OEM Performance, high quality',
        ],
        stars: 4.0,
        imageUrl: '/assets/images/filters/filter-6.png',
        tags: ['Air-Filter', '4-Cycle', 'Engine'],
      },
    ];
  }
}
