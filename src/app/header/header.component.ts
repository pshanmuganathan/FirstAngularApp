import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
OnSelected(selectedfeature: string) {
  this.selectedValue.emit(selectedfeature);
}
}
