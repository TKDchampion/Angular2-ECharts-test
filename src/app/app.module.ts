import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EchartsNg2Module } from 'echarts-ng2';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    EchartsNg2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
