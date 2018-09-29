import { Component, Input } from "@angular/core";
import { Goal } from "../../../models/goal.interface";

@Component({
    selector: 'goal-form',
    styleUrls:['goal-form.component.scss'],
    template: `
        <table class="goal-form-box">
            <tbody>
                <tr>
                    <td>
                        <label>Amount</label>
                    </td>
                    <td>
                        <input type="number" name="amount" id="amount" #amount>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Timeframe</label>
                    </td>
                    <td>
                        <input type="text" name="timeframe" id="timeframe" #timeframe>
                    </td>
                </tr>
            </tbody>
        </table>    
    `
})
export class GoalFormComponent {
    @Input() goal: Goal;
}