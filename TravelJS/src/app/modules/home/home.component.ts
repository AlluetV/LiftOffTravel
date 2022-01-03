import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
