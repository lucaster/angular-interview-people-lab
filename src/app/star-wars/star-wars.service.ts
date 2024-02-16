import { Injectable, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from './star-wars.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  constructor(private readonly http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    const url = 'https://swapi.dev/api/films';
    // TODO get all films
    return EMPTY;
  }
}

interface FilmsResponse {
  readonly count: number;
  readonly results: Film[];
}
