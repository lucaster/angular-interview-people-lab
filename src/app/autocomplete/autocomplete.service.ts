import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {
  /**
   * Implementation provided not important
   */
  autocomplete(searchText: string): Observable<string[]> {
    const results: string[] = [];
    for (let i = 0; i < 10; i++) {
      results.push(searchText + '_' + i);
    }
    console.log(searchText, results);
    const delayMs = 500 + 200 * Math.random();
    return of(results).pipe(delay(delayMs));
  }
}
