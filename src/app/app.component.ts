import { Component } from '@angular/core';
import { fadeInOut } from './animation/onLoad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})
export class AppComponent {
  title = 'client';
}
