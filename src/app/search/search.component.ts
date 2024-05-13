import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
@Input() searchTerm: String | null = "";
constructor(private route: ActivatedRoute,  private router: Router) { }

  search(): void {
    if (this.searchTerm) {
      this.router.navigate([`/search/${this.searchTerm}`]);
    }
  }
}
