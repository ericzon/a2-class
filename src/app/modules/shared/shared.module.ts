import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './form/input-search/input-search.component';
import { GenericListComponent } from './generic-list/generic-list.component';

import { MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdListModule
  ],
  declarations: [InputSearchComponent, GenericListComponent],
  exports: [InputSearchComponent, GenericListComponent]
})
export class SharedModule { }
