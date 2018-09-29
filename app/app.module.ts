/* Angular Modules */
import { NgModule } from "@angular/core"; // Used to create our app module
import { BrowserModule } from '@angular/platform-browser'; // Used to run ts directly in browser
import { CommonModule } from "@angular/common"; // Used to fetch all angular provided directives, pipes etc.

/* Our Modules */
import { GoalsModule } from "./goals/goals.module";

/* Our Component */
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    GoalsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {};