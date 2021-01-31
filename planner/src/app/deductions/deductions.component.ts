import { Component, Input, OnInit } from '@angular/core';
import { Employments, Employment } from '../contributions'

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})

export class DeductionsComponent implements OnInit {

  @Input() annualIncome: number = 0
  @Input() monthlyIncome: number = 0

  @Input() providentFund: number = 0

  employmentTypes = Employments
  selectedStatus: Employment = Employments.filter(v => v.status == "employee")[0]

  tax: number = 0
  getTax(tax: number) { this.tax = tax }

  constructor() { }
  totalDeductions = () => this.selectedStatus.si + this.selectedStatus.ghs + this.providentFund;
  numberWithCommas = (x: string) => x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  onSelect = (status: Employment) => this.selectedStatus = status
  monthlyDeductions = () => (this.monthlyIncome * this.totalDeductions() / 100);
  monthlySI = () => (this.monthlyIncome * this.selectedStatus.si / 100);
  monthlyGHS = () => (this.monthlyIncome * this.selectedStatus.ghs / 100);
  monthlyPF = () => (this.monthlyIncome * this.providentFund / 100);
  monthlyTax = () => this.tax / 12;
  monthlyTaxP = () => (this.tax / 12) / this.monthlyIncome * 100;
  annualDeductions = () => (this.annualIncome * this.totalDeductions() / 100);
  annualSI = () => (this.annualIncome * this.selectedStatus.si / 100);
  annualGHS = () => (this.annualIncome * this.selectedStatus.ghs / 100);
  annualPF = () => (this.annualIncome * this.providentFund / 100);
  annualTax = () => this.tax;

  netMonthlyIncome = () => this.monthlyIncome - this.monthlyDeductions() - this.monthlyTax();
  netAnnualIncome = () => this.annualIncome - this.annualDeductions() - this.annualTax();


  ngOnInit(): void {
  }

}
