import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/HomeComponent';

const routes: Routes = [{ path: '', component: HomeComponent }];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
})
export class AppComponent {
  constructor() {}
  title = 'filterComm';
}
