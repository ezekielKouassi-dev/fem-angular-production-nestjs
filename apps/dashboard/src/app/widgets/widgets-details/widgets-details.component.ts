import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.scss']
})
export class WidgetsDetailsComponent implements OnInit {
  currentWidget: widget;
  originalTitle = '';
  @Input() set widget(value: widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
