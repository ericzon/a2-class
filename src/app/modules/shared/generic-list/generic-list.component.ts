import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from './generic-list-item.interface';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {
  @Input() items: ListItem[];
  @Output() onItemClick: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  constructor() { }

  ngOnInit() {
  }
  
  viewInfo(item: ListItem) {
    console.log("item click: ",item);
    this.onItemClick.emit(item);
  }
}
