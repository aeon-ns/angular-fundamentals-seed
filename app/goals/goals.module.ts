import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsComponent } from './containers/goals/goals.component';

import { GoalInformationComponent } from './components/goal-information/goal-information.component';
import { GoalInvestmentCalculatorComponent } from './components/goal-investment-calculator/goal-investment-calculator.component';

@NgModule({
    declarations: [
        GoalsComponent,
        GoalInformationComponent,
        GoalInvestmentCalculatorComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GoalsComponent
    ]
})
export class GoalsModule {}