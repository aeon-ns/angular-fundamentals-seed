import { Component, Input } from "@angular/core";
import { Goal } from "../../../models/goal.interface";

@Component({
    selector: 'goal-info',
    template: `
        <div class="goal-info-box">
            <h3>{{goal.name}}</h3>
        </div>
    `
})
export class GoalInfoComponent {
    @Input() goal: Goal;
}