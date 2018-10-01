/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

/* Container Component */
import { GoalsComponent } from './containers/goals/goals.component';

/* Sub Components */
import { GoalInformationComponent } from './components/goal-information/goal-information.component';
import { GoalInvestmentCalculatorComponent } from './components/goal-investment-calculator/goal-investment-calculator.component';

/* Providers */
import { GoalsService } from './providers/goals.service';

@NgModule({
    declarations: [
        GoalsComponent,
        GoalInformationComponent,
        GoalInvestmentCalculatorComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        GoalsService
    ],
    exports: [
        GoalsComponent
    ]
})
export class GoalsModule {}