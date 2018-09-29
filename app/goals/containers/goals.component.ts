import { Component, OnInit } from '@angular/core';

import { Goal } from '../../models/goal.interface';

@Component({
    selector: 'goals',
    styleUrls: ['goals.component.scss'],
    template: `
        <div class="goals" *ngFor="let goal of goals;">
            <goal-info [goal]="goal"></goal-info>
            <goal-form [goal]="goal"></goal-form>
        </div>
    `
})
export class GoalsComponent implements OnInit {
    goals: Goal[];

    ngOnInit() {
        this.goals = [
            {
                isAdded: false,
                name: 'Goal 1',
                points: [
                    'Goal 1 Point 1',
                    'Goal 1 Point 2',
                    'Goal 1 Point 3'
                ]
            }, {
                isAdded: false,
                name: 'Goal 2',
                points: [
                    'Goal 2 Point 1',
                    'Goal 2 Point 2',
                    'Goal 2 Point 3'
                ]
            }, {
                isAdded: false,
                name: 'Goal 3',
                points: [
                    'Goal 3 Point 1',
                    'Goal 3 Point 2',
                    'Goal 3 Point 3'
                ]
            }
        ]
    }
}