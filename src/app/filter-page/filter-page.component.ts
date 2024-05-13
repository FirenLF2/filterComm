import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter } from '../shared/models/filters';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-filter-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.css',
})
export class FilterPageComponent implements OnInit {
  filter: Filter | undefined;
  filterId!: string;

  constructor(
    private filterService: FiltersService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.filterId = paramMap.get('id')!;
      this.filter = this.filterService.getFilterById(this.filterId);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.filter!);
    this.router.navigateByUrl('/cart-page');
  }
}
