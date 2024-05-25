import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter } from '../shared/models/filters';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-filter-page',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.css'],
})
export class FilterPageComponent implements OnInit {
  filter: Filter | undefined;
  filterId!: string;
  isInCart: boolean = false;

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
      this.checkIfInCart();
    });
  }

  checkIfInCart() {
    if (this.filter) {
      this.isInCart = this.cartService.isItemInCart(this.filter.id);
    }
  }

  addToCart() {
    if (this.filter && !this.isInCart) {
      this.cartService.addToCart(this.filter);
      this.router.navigateByUrl('/cart-page');
    }
  }
}
