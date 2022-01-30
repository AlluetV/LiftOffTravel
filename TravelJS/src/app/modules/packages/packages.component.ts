import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/destination';
import { Pack } from 'src/app/pack';
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/planets.service';
import { ActivatedRoute } from '@angular/router';
import {BookingService} from 'src/app/booking.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  


  destinationFromService!:PlanetsService;
  
  constructor(private route: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
   
   

   // this.display =true;
  }



  //display hidden data

  //dispaly hidden data when click the button
  //display: boolean = true;
  
  //changeData() {
    //this.display = !this.display;
  //}
}
