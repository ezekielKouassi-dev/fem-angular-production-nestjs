import { Component, OnInit } from '@angular/core';
import { widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  widgets: widget[] = [
    { id: '1', title: 'widget 01', description: 'pending'},
    { id: '2', title: 'widget 02', description: 'pending'},
    { id: '3', title: 'widget 03', description: 'pending'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
