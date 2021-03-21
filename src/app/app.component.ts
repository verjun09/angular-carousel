import { Component } from '@angular/core';
import { data } from './helper/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = data;
}
