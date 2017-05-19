import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TooLongPipe} from './shared/toolong.pipe';
import {CarPartsComponent} from './car-parts/car-parts.component';
import {CarFooterComponet} from './car-footer/car-footer.component';
import {CarSerice} from "./shared/car.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
      BrowserModule,
      HttpModule
  ],
  declarations: [
    AppComponent,
    TooLongPipe,
    CarPartsComponent,
    CarFooterComponet,
  ],
  providers: [
    CarSerice
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
