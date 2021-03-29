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
      {name: "Home", icon: "home", router:"home"}
    ]
  }
}
