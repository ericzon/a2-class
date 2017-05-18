import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './form/input-search/input-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent]
})
export class SharedModule { }
