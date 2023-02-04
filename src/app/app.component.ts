import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <p>Start editing to see some magic happen. :)</p>
  `
})
export class AppComponent {
  name = `Angular ${VERSION.major}`;
}