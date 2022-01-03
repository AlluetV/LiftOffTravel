import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-bar',
  templateUrl: './description-bar.component.html',
  styleUrls: ['./description-bar.component.css']
})
export class DescriptionBarComponent implements OnInit {
  planetDescription: object[] = [
    {description1:"Mars is the forth planet ...."},
    {description2:"jupiter is the fifth planet ...."},
  ];
  constructor() { }

  ngOnInit() {
  }

}
