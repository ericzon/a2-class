import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './form/input-search/input-search.component';

@NgModule({
  imports: [
    CommonModule,
    NgForm
  ],
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent]
})
export class SharedModule { }
