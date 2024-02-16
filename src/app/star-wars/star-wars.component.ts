import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
  standalone: true,
})
export class StarWarsComponent {
  constructor(private readonly starWarsService: StarWarsService) {}
  // TODO
}
