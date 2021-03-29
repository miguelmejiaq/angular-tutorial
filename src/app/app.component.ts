import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'To do List';
  sidenavOptions = [];
  ngOnInit(){
    this.sidenavOptions = [
      { name: "Home", icon: "home", router:"home" },
      { name: "To do List", icon: "list", router:"to-do"},
      { name: "Calculator", icon: "calculate", router: "calculator"},
      { name: "Tabs", icon: "tab", router: "tabs"}
    ]
  }
}
