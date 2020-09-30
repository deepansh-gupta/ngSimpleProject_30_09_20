import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  comments = [
    {
    "id": 0,
    "commenter": "Bob",
    "comment": "Great job!!"
    },
    {
    "id": 1,
    "commenter": "Alex",
    "comment": "Your progress is inspiring!"
    },
    {
    "id": 2,
    "commenter": "Sherry",
    "comment": "Way to go so far!"
    },
    {
    "id": 3,
    "commenter": "Nicole",
    "comment": "Keep it up!"
    },
    {
    "id": 4,
    "commenter": "John",
    "comment": "How is the diet going?"
    }
    ];

  ngOnInit() {
  }
  }
