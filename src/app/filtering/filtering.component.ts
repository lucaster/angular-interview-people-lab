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
    // TODO use the injected service
    return ['implement me'];
  }
}
