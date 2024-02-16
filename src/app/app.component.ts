import { Component } from '@angular/core';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { FilteringComponent } from './filtering/filtering.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [StarWarsComponent, FilteringComponent, AutocompleteComponent],
})
export class AppComponent {
  // TODO
}
