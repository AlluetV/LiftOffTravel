import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Destination } from 'src/app/destination';
import { PlanetsService } from 'src/app/planets.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  planets$!:Observable<Destination[]>;
  
  constructor( private route: ActivatedRoute, private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.getPlanetDetails();
    console.log(this.planets$);
  }

  selectDestination(){
  }

}
