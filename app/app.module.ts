import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import {NgSelectFormFieldControlDirective} from './ng-select.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgSelectModule, MatInputModule,    BrowserAnimationsModule, ],
  declarations: [ AppComponent, NgSelectFormFieldControlDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
