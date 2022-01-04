import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/planets';
import { planetJson } from 'src/app/mock-planets';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  planet = planetJson;

  constructor() { }

  ngOnInit() {
  }

}
