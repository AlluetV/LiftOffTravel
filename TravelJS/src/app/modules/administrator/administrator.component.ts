import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdministratorService } from 'src/app/administrator.service';
import { Destination } from 'src/app/destination';
import { PlanetsService } from 'src/app/planets.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  
  //get 
  planets$!:Observable<Destination[]>;
 
  //post
  addedDestination! : Destination;

  confirmation! : Destination;



  constructor( private route : ActivatedRoute, private planetService: PlanetsService, private administratorService: AdministratorService, private formBuilder:FormBuilder) {}

  ngOnInit(){
  //get
    this.planets$ = this.planetService.getPlanetDetails();
    console.log(this.planets$);
  //post
     this.addedDestination = {id:this.addedDestination.id , name: this.addedDestination.name, description: this.addedDestination.description, url: this.addedDestination.url};
  }

  onSubmitAdmin(){
    console.log("on submit");
    console.log(this.addedDestination);
    this.administratorService.addedDestination(this.addedDestination);
  }

}
