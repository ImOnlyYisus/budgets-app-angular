import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NewBudgetComponent } from './components/new-budget/new-budget.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-expense', pathMatch: 'full' },
  { path: 'new-expense', component: NewBudgetComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: '/new-expense', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
