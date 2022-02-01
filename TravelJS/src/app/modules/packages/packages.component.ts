import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/destination';
import { Pack } from 'src/app/pack';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {BookingService} from 'src/app/booking.service';
import { PackService } from 'src/app/pack.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  packages$! : Observable< Pack[] >;

  destination!: Destination;

  constructor(private route: ActivatedRoute, private packService : PackService , private bookingService : BookingService) {

  }

  ngOnInit() {

    this.packages$ = this.packService.getPackDetails();
    console.log(this.packages$);
    
    this.destination = this.bookingService.selectedDestination;

   // this.display =true;
  }



  //display hidden data

  //dispaly hidden data when click the button
  //display: boolean = true;
  
  //changeData() {
    //this.display = !this.display;
  //}
}
