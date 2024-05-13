import { Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'filter/:id', component: FilterPageComponent },
  { path: 'cart-page', component: CartPageComponent },
];
