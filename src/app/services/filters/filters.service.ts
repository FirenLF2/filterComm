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
        price: 4.35,
        favorite: false,
        descriptor: [
          'long filter bag, M25 style, hard top ring, water/oil resistant',
        ],
        imageUrl: '/assets/images/filters/filter-1.png',
        tags: ['Oil-Filter', 'Bag', 'HardFilz'],
      },
      {
        id: 2,
        name: 'Oil Filter R300 Engine',
        price: 25.89,
        favorite: true,
        descriptor: [
          'Engine supportive Oil Filter, type R300, full-proof, rubber sealing ring, non-oil leakage, long service life, backflow suppression valve, high quality',
        ],
        imageUrl: '/assets/images/filters/filter-2.png',
        tags: ['Engine', 'Oil-Filter'],
      },
      {
        id: 3,
        name: 'Donaldson Heavy Duty Air Filter',
        price: 135.5,
        favorite: false,
        descriptor: [
          'durable and reliable, high quality, dependable filter, filters impurities and harmful particles',
        ],
        imageUrl: '/assets/images/filters/filter-3.png',
        tags: ['Engine', 'Air-Filter', 'Donaldson'],
      },
      {
        id: 4,
        name: 'Air Filter Dust Collector T-LW200',
        price: 99.95,
        favorite: true,
        descriptor: [
          'High Efficiency Blended Filter Media, 13.8" OD x 18 H Open/Closed Endcap Configuration',
        ],
        imageUrl: '/assets/images/filters/filter-4.png',
        tags: ['Dust Filter', 'Air-Filter'],
      },
      {
        id: 5,
        name: 'Air Filter OEM',
        price: 44.99,
        favorite: false,
        descriptor: [
          'highly durable, non-clogging mechanism, OEM Performance, off-road filtration',
        ],
        imageUrl: '/assets/images/filters/filter-5.png',
        tags: ['Engine', 'Air-Filter', 'OEM'],
      },
      {
        id: 6,
        name: 'Briggs Stratton Air Catridge Filter',
        price: 47.58,
        favorite: false,
        descriptor: [
          'Oval style pleated paper air filter, Filters out dirt and debris, OEM Performance, high quality',
        ],
        imageUrl: '/assets/images/filters/filter-6.png',
        tags: ['Air-Filter', '4-Cycle', 'Engine'],
      },
    ];
  }
}
