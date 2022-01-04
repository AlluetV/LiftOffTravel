import { Component, Input, OnInit } from '@angular/core';
import { Planets } from 'src/app/planets';
import { planetJson } from 'src/app/mock-planets';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  planet = planetJson;

  selectedPlanet!: Planets;
 
  @Input() item?:Planets;
  
  //dispaly hidden data when click the button
  display: boolean = true;

  constructor() { }

  ngOnInit() {
    this.display =true;
  }

  //selected planet 
  onSelect(item: Planets): void {
    this.selectedPlanet = item;
  }

  //display hidden data

  changeData() {
    this.display = !this.display;
  }
}
