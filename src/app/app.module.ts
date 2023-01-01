import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewBudgetComponent } from './components/new-budget/new-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NewExpenseComponent } from './components/expenses/new-expense/new-expense.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewBudgetComponent,
    ExpensesComponent,
    NewExpenseComponent,
    ListExpensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
