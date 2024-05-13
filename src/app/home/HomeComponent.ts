import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { CommonModule } from '@angular/common';
import { Filter } from '../shared/models/filters';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  filters: Filter[] = [];
  constructor(
    private filterService: FiltersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.searchTerm)
        this.filters = this.filterService
          .getAll()
          .filter((filter) =>
            filter.name.toLowerCase().includes(params.searchTerm.toLowerCase())
          );
      else this.filters = this.filterService.getAll();
    });
  }
}
