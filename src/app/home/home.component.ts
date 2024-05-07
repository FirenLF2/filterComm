import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { Filter } from '../shared/models/filters';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  filters: Filter[] = [];
  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {
    this.filters = this.filterService.getAll();
  }
}
