import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  planets: object[] = [
    {id: 1, name:"Mars and phobos"},
    {id: 2, name:"Jupiter Moons"},
    {id: 3, name:"Saturn moons"},
    {id: 4, name:"Uranus Moons"},
    {id: 5, name:"Jupiter's Moons"},
    {id: 6, name:"Neptune Moons"},
  ];
  constructor() { }

  ngOnInit() {
  }

  //display de descrption of the packages selected
 // displayPackage(planet:object){

 // }
}
