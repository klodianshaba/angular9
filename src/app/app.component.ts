import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9';

  press() {
    alert('press');
  }

  keyup() {
    alert('up');
  }
}
