import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GoalsComponent } from "./containers/goals.component";
import { GoalInfoComponent } from "./components/goal-info/goal-info.component";
import { GoalFormComponent } from "./components/goal-form/goal-form.component";

@NgModule({
    declarations: [
        GoalsComponent,
        GoalInfoComponent,
        GoalFormComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GoalsComponent
    ]
})
export class GoalsModule {}