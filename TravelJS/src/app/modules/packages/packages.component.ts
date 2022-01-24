import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/destination';
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/planets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  planets$!:Observable<Destination[]>;

  selectedDestination!: Destination;
 
  @Input() item!:Destination;
  
  constructor(private route: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.getPlanetDetails();
    console.log(this.planets$);

   // this.display =true;
  }

  //selected planet 
  onSelect(item: Destination): void {
    this.selectedDestination = item;
  }

  //display hidden data

  //dispaly hidden data when click the button
  //display: boolean = true;
  
  //changeData() {
    //this.display = !this.display;
  //}
}
