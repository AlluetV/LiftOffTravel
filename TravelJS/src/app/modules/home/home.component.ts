import { Component, Input, OnInit } from '@angular/core';
import { planetJson } from 'src/app/mock-planets';
import { Planets } from 'src/app/planets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  planet = planetJson;

  @Input() item?:Planets;
  
  constructor() { }

  ngOnInit() {
  }

}
