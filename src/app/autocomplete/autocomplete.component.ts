import { Component } from '@angular/core';
import { AutocompleteService } from './autocomplete.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  standalone: true,
  providers: [AutocompleteService],
  imports: [CommonModule, AsyncPipe],
})
export class AutocompleteComponent {
  constructor(private readonly autocompleteService: AutocompleteService) {}

  getSuggestions(hint: string): Observable<string[]> {
    // use an injected FilteringService and use tis filterByLength(words, length) method.
    return this.autocompleteService.autocomplete(hint);
  }
}
