import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { GoalsModule } from './goals/goals.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    GoalsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}