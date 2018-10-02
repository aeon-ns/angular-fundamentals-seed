/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

/* Container Component */
import { GoalsComponent } from './containers/goals/goals.component';
import { GoalViewerComponent } from './containers/goal-viewer/goal-viewer.component';

/* Sub Components */
import { GoalInformationComponent } from './components/goal-information/goal-information.component';
import { GoalInvestmentCalculatorComponent } from './components/goal-investment-calculator/goal-investment-calculator.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';

/* Providers */
import { GoalsService } from './providers/goals.service';

@NgModule({
    declarations: [
        GoalsComponent,
        GoalInformationComponent,
        GoalInvestmentCalculatorComponent,
        /* Viewer / Forms */
        GoalViewerComponent,
        GoalFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        GoalsService
    ],
    exports: [
        GoalsComponent,
        GoalViewerComponent
    ]
})
export class GoalsModule {}