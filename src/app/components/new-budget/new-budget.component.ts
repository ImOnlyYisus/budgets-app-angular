import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent {
  amount: number;
  incorrectAmount: boolean;

  constructor(private budgetService: BudgetService, private router: Router) {
    this.amount = 0;
    this.incorrectAmount = false;
  }

  add() {
    if (this.amount <= 0) {
      this.incorrectAmount = true;
    } else {
      this.budgetService.budget = this.amount;
      this.budgetService.remaining = this.amount;

      this.router.navigate(['/expenses'])
    }
  }
}
