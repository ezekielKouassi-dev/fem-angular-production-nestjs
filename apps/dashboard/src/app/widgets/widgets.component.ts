import { Component, OnInit } from '@angular/core';
import { widget } from '@fem-production-angular/api-interfaces';

const mockWidgets: widget[] = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' },
];

const emptyWidget: widget = {
  id: null,
  title: '',
  description: '',
}


@Component({
  selector: 'fem-production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets: widget[];
  selectedWidget: widget;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets = mockWidgets;
  }

  saveWidget(widget: widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: widget) {
    const newWidget = Object.assign({}, widget, { id: this.getRandomID()})
    this.widgets = [...this.widgets, newWidget];
    this.resetForm();
  }

  updateWidget(widget: widget) {
    this.widgets = this.widgets.map(w => {
      return (widget.id === w.id) ? widget : w;
    });
    this.resetForm();
  }

  deleteWidget(widget: widget) {
    this.widgets = this.widgets.filter(w => widget.id !== w.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }

}
