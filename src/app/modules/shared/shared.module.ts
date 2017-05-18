import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './form/input-search/input-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent]
})
export class SharedModule { }
