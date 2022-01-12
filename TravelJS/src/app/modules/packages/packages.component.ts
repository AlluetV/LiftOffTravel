import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/planets';
import { Observable } from 'rxjs';
import { PlanetsService } from 'src/app/planets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  planets$!:Observable<Planet[]>;

 // planet = planetJson;

  selectedPlanet!: Planet;
 
  @Input() item?:Planet;
  
  //dispaly hidden data when click the button
  display: boolean = true;

  constructor(private route: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.getPlanetDetails();
    console.log(this.planets$);

    this.display =true;
  }

  //selected planet 
  onSelect(item: Planet): void {
    this.selectedPlanet = item;
  }

  //display hidden data

  changeData() {
    this.display = !this.display;
  }
}
