import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  protected budget: number;
  constructor(private budgetService: BudgetService, private router: Router) {
    if (this.budgetService.budget === 0) {
      this.router.navigate(['/new-expense']);
    }
    this.budget = budgetService.budget;
  }
}
