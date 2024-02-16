import { Component } from '@angular/core';
import { FilteringService } from './filtering.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
  standalone: true,
  providers: [FilteringService],
  imports: [JsonPipe],
})
export class FilteringComponent {
  readonly length = 3;

  readonly brands = [
    'Toyota',
    'Suzuki',
    'FCA',
    'Jaguar',
    'BMW',
    'GMC',
    'Lexus',
  ];

  get filtered() {
    // use an injected FilteringService and use tis filterByLength(words, length) method.
    return ['implement me'];
  }
}
