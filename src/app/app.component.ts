import { Component } from '@angular/core';

import {ConfigService} from './config.service'; //my added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  constructor() {
    
  }
  
}
