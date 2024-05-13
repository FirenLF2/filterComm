import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Filter } from '../shared/models/filters';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, SearchComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchTerm: String | null = '';
  filters: Filter[] = [];

  constructor(
    private filterService: FiltersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.searchTerm = paramMap.get('searchTerm');
      if (this.searchTerm) {
        // @ts-ignore
        this.filters = this.filterService
          .getAll()
          .filter((filter) =>
            filter.name.toLowerCase().includes(this.searchTerm!.toLowerCase())
          );
      } else {
        this.filters = this.filterService.getAll();
      }
    });
  }
}
