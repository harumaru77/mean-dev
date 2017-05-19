import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <car-parts></car-parts>
    <car-footer></car-footer>
  `,
})
export class AppComponent  {
  title = 'Ultra Racing';
}
