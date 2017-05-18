import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from './generic-list-item.interface';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {
  @Input() items: ListItem[];
  constructor() { }

  ngOnInit() {
  }

}
