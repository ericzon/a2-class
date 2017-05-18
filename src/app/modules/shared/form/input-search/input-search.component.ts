import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Input() placeholder: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  searchTxt: string;

  constructor() { }

  ngOnInit() {
    this.placeholder = "Search";
  }

  valueUpdated(e) {
    console.log("valueUpdated! -> ",this.searchTxt);
    this.onValueChange.emit(this.searchTxt);
  }

}
