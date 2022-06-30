import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello name="{{ name }}"></hello>
    <p>Start editing to see some magic happen. :)</p>
  `
})
export class AppComponent {
  name = `Angular ${VERSION.major}`;
}