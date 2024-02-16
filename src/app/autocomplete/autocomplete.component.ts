import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AutocompleteService } from './autocomplete.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  standalone: true,
  providers: [AutocompleteService],
  imports: [CommonModule, AsyncPipe],
})
export class AutocompleteComponent {
  constructor(private readonly autocompleteService: AutocompleteService) {}

  words$: Observable<string[]> = this.getSuggestions('a');

  get getWords$(): Observable<string[]> {
    return this.getSuggestions('a');
  }

  getSuggestions(hint: string): Observable<string[]> {
    // TODO use the injected service
    return this.autocompleteService.autocomplete(hint);
  }
}
