import { Component, Input, OnInit } from '@angular/core';
import { Planets } from 'src/app/planets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  @Input() planets: Planets[] =[
    {
      id: 1,
      name: 'Mars',
      description: 'Forth palnet',
      pack: 'Mars , phobos and deimos',
      departure: 'First saturday of each month',
      duration: '3 years',
      price: 100000,
      
    },
    {
      id: 2,
      name: 'Jupiter',
      description: 'Fifth palnet',
      pack: 'Jupiter Moons',
      departure: 'Second saturday of April and August',
      duration: '5 years',
      price: 200000,
    },
    {
      id: 3,
      name: 'Saturn',
      description: 'Sixth palnet',
      pack: 'Moons of saturn',
      departure: 'Third saturday of April',
      duration: '8 years',
      price: 300000
    }   
    ];


  constructor() { }

  ngOnInit() {
  }

}
