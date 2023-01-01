import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private _budget: number;
  private _reamining: number;
  private _expenses$ = new Subject<any>();
  constructor() {
    this._budget = 0;
    this._reamining = 0;
  }

  public get expenses$() {
    return this._expenses$;
  }

  public get budget() {
    return this._budget;
  }

  public set budget(value: number) {
    this._budget = value;
  }

  public get remaining() {
    return this._reamining;
  }

  public set remaining(value: number) {
    this._reamining = value;
  }

  public addExpense(expense: IExpense) {
    this.remaining = this.remaining - expense.amount;
    this.expenses$.next(expense);
  }

  public getExpenses(): Observable<any> {
    return this.expenses$.asObservable();
  }
}

interface IExpense {
  name: string;
  amount: number;
}
