import { Component } from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css','material-layouts.css'],
  directives:[ToolbarComponent]
})
export class AppComponent {
  displayMode:String = 'roster';

  modeChanged(value:String) {
    console.log("new mode: " + value);
    this.displayMode = value;
  }
}
