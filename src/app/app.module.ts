import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './modules/shared/form/input-search/input-search.component';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { GenericListComponent } from './modules/shared/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
