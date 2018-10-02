import { Component, OnInit } from "@angular/core";

import { GoalsService } from "../../providers/goals.service";
import { Goal } from "../../../models/goal.interface";

@Component({
    selector: 'goal-viewer',
    styleUrls: ['goal-viewer.component.scss'],
    templateUrl: 'goal-viewer.component.html'
})
export class GoalViewerComponent implements OnInit {
    goal: Goal;
    constructor(private goalService: GoalsService) { }
    ngOnInit() {
        this.goalService
            .getGoal(0)
            .subscribe((data: Goal) => this.goal = data);
    }
    onUpdateGoal(event: Goal) {
        console.log('onUpdateGoal: ', event);
        this.goalService
            .updateGoal(event)
            .subscribe((data: Goal) => this.goal = data);
    }
}