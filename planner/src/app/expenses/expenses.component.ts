import { Component, OnInit, Input } from '@angular/core';

interface Expense {
  name: string
  amount: number
  perc: number
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {

  @Input() netAnnualIncome = 0
  @Input() netMonthlyIncome = 0

  monthlyExpenses: Expense[] = []
  annualExpenses: Expense[] = []

  createExpense = (isMonthly: boolean) => {
    if (isMonthly) {
      this.monthlyExpenses.push({
        name: '',
        amount: 0,
        perc: 0
      })
    } else {
      this.annualExpenses.push({
        name: '',
        amount: 0,
        perc: 0
      })
    }
  }

  removeExpense = (isMonthly: boolean, i: number) =>
    isMonthly ?
      this.monthlyExpenses.splice(i, 1) :
      this.annualExpenses.splice(i, 1);

  totalExpenses = (isMonthly: boolean) =>
    isMonthly ?
      this.monthlyExpenses.reduce((a, c) => a + c.amount, 0) :
      this.monthlyExpenses.reduce((a, c) => a + c.amount * 12, 0) + this.annualExpenses.reduce((a, c) => a + c.amount, 0);

  expensePerc = (isMonthly: boolean, amount: number) =>
    isMonthly ?
      amount / this.netMonthlyIncome * 100 :
      amount / this.netAnnualIncome * 100

  totalExpensesPerc = (isMonthly: boolean) =>
    isMonthly ?
      this.totalExpenses(isMonthly) / this.netMonthlyIncome * 100 :
      this.totalExpenses(isMonthly) / this.netAnnualIncome * 100

  constructor() { }
  ngOnInit(): void { }
}
