import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnDestroy, OnInit {
  protected subscription: Subscription;
  protected budget: number;
  protected remaining: number;
  protected expenseList: any[] = [];

  constructor(private budgetService: BudgetService) {
    this.budget = 0;
    this.remaining = 0;

    this.subscription = this.budgetService.getExpenses().subscribe(data => {
      this.remaining -= data.amount;
      this.expenseList.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this.budgetService.budget;
    this.remaining = this.budgetService.remaining;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected remainingColor() {
    const color = {
      red: "red",
      yellow: "yellow",
      green: "green"
    }

    if (this.budget / 4 > this.remaining) {
      return color.red;
    } else if (this.budget / 2 > this.remaining) {
      return color.yellow;
    } else {
      return color.green;
    }
  }
}
