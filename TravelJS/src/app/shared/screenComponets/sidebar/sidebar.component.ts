import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  planets: object[] = [
    {name:"Mars"},
    {name:"Jupiter"},
    {name:"Saturn"},
    {name:"Uranus"},
    {name:"Jupiter"},
    {name:"Neptune"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
