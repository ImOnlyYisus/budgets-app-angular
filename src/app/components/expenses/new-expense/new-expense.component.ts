import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent {
  protected expenseName: string;
  protected expenseAmount: number;
  protected incorrectField: boolean;
  protected incorrectFieldText: string;

  constructor(private budgetService: BudgetService) {
    this.expenseAmount = 0;
    this.incorrectField = false;
    this.incorrectFieldText = "Cantidad o algo incorrecto";
    this.expenseName = '';
  }

  protected addExpense() {
    if (this.isCorrectFields()) {
      this.incorrectField = true;
      this.incorrectFieldText = "El nombre o el gasto son incorrecto";
      return;
    } else {
      if (this.isCorrectAmount()) {
        this.incorrectField = true;
        this.incorrectFieldText = "El gasto es mayor a la cantidad restante";
        return;
      }

      const expense: IExpense = {
        name: this.expenseName,
        amount: this.expenseAmount
      };

      this.budgetService.addExpense(expense);

      this.incorrectField = false;
      this.expenseName = "";
      this.expenseAmount = 0;
    }
  }

  private isCorrectFields() {
    return this.expenseName === '' || this.expenseAmount <= 0;
  }

  private isCorrectAmount() {
    return this.expenseAmount > this.budgetService.remaining;
  }

}

interface IExpense {
  name: string;
  amount: number;
}
