import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   
  entries:any = [
    {
      "id": 1,
      "date": "1996-01-01T07:00:00.000Z",
      "weight": 165,
      "bodyfat": 0.2
      },
      {
      "id": 2,
      "date": "1996-01-02T07:00:00.000Z",
      "weight": 164,
      "bodyfat": 0.19 
      },
      {
      "id": 3,
      "date": "1996-01-03T07:00:00.000Z",
      "weight": 164,
      "bodyfat": 0.19
      },
      {
      "id": 4,
      "date": "1996-01-12T07:00:00.000Z",
      "weight": 161,
      "bodyfat": 0.18
      },
      {
      "id": 5,
      "date": "1995-12-31T07:00:00.000Z",
      "weight": 167,
      "bodyfat": 0.2
      },
      {
      "id": 6,
      "date": "1995-12-01T07:00:00.000Z",
      "weight": 161,
      "bodyfat": 0.18
      } 
     
];
  ngOnInit() {
  }
 
  myWeightDate(weight, date){
    this.entries.push({
      
      weight: weight.value,
      date: date.value
    });
  }
  onRemove(i){
    this.entries.splice(i, 1);
  }
}