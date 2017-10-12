import { Component } from '@angular/core';

@Component({
  // takes in a metadata object
  // to decorate a component, you need to provide two properties as a minimum
  selector: 'app',
  template: '<h1>App</h1>'
})
export class AppComponent {}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent { }
*/
