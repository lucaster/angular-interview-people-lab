import { Component, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import 'zone.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent],
  template: `
    <h1>{{ name }}!</h1>
    <my-app></my-app>
  `,
})
export class AppRoot {
  name = 'Angular Interview';
}

bootstrapApplication(AppRoot, {
  providers: [provideHttpClient()],
});
