import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/planets';
import { PlanetsService } from 'src/app/planets.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  planets$!:Observable<Planet[]>;
  


  //@Input() item?:Planets;

  //addPlanet(planets:Planets){
   // this.item.push(planets);

 // }
  
  constructor( private route: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.getPlanetDetails();
    console.log(this.planets$);
  }

}
