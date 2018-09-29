import { Component, OnInit } from '@angular/core';

import { Goal } from '../../../models/goal.interface';

@Component({
    selector: 'goals',
    styleUrls: ['goals.component.scss'],
    templateUrl: 'goals.component.html'
})
export class GoalsComponent implements OnInit {
    goals: Goal[];

    ngOnInit() {
        console.log('ngOnInit');
        this.goals = [{
            id: 0,
            title: " Protect my income",
            description: "When something happens, like getting sick or injured, you still need to cover the important things like your household expenses and loan repayments",
            points: [
                "How much insurance do I need?",
                "What might I be covered?",
                "How do I get insurance?"
            ],
            image: "assets/images/goal1.jpg",
            isAdded: false
        }, {
            id: 1,
            image: "assets/images/goal2.jpg",
            title: " Simplify my finances",
            description: "Simplifying and streamlining your financial life could make it easier to keep track of and grow your money",
            points: [
                "Have I got direct debits set up so my bills are paid on time?",
                "Do I have a budget and savings plan in place?",
                "Would consolidating my debits make things easier?"
            ],
            isAdded: true,
            amount: 20000,
            timeframe: '2 - 5 Years'
        }, {
            id: 2,
            image: "assets/images/goal3.jpg",
            title: " Retire right",
            description: "As Australia's cost of living continues to rise, it's important to make sure your money goes the distance in retirement to give you the lifestyle you want.",
            points: [
                "Will I have enough super?",
                "Will I be eligible for the Age Pension?",
                "Will I work less, stop working or do something different?"
            ],
            isAdded: false
        }];
    }

    onAdd(index: number) {
        console.log('Adding goal : ', index);
        this.goals[index].isAdded = true;
    }

    handleRemove(event: number) {
        console.log('Removing goal : ', event);
        this.goals[event].isAdded = false;
    }
}