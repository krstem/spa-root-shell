import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app11-root',
  template: `
    <div class="root">
      <h1>{{title}}</h1>
      <div>Angular {{ ngVersion.full }}</div>
      <div>
        [<a routerLink="angular">Home</a>]
        [<a routerLink="angular/hello">Hello</a>]
        [<a routerLink="angular/lazy">Lazy</a>]
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [ `
    .root {
      border: 1px solid red;
      padding: 1em;
    }
    router-outlet {
      margin-top: 0.5em;
    }
  ` ],
})
export class AppComponent {
  title = 'Angular app';
  ngVersion = VERSION;
}
