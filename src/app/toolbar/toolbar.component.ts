import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css', 'material-layout.css']
})
export class ToolbarComponent implements OnInit {
  @Input() mode: String;
  @Output() onModeChange = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  changeMode(value:String) {
    console.log("inside changeMode: " + value);
    this.onModeChange.emit(value);
  }

}
