import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      Hello!
      <div>
        Here are your goals for today:
        <goals></goals>
      </div>
    </div>
  `
})
export class AppComponent {

}
