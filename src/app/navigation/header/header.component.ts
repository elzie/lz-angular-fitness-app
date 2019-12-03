import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // output() makes the eventemitter listenable from outside
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  // Emit a custom event in header component
  // To which we can listen, from the app-component
  onToggleSidenav() {
    this.sidenavToggle.emit();
    // Now emitting event whenever clicking a menu btn
  }

}
