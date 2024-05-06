import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  filters: String[] = [];
  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {
    this.filters = this.filterService.getAll();
  }
}
