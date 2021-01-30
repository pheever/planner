import { Component, Input, OnInit } from '@angular/core';
import { Employments, Employment } from '../contributions'

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})

export class DeductionsComponent implements OnInit {

  @Input() anualIncome: number = 0
  @Input() monthlyIncome: number = 0


  employmentTypes = Employments
  selectedStatus: Employment = Employments.filter(v => v.status == "employee")[0]

  tax: number = 0
  constructor() { }

  onSelect = (status: Employment) => this.selectedStatus = status
  monthlyDeductions = () => Math.fround(this.monthlyIncome * (this.selectedStatus.si + this.selectedStatus.ghs) / 100);
  anualDeductions = () => Math.fround(this.anualIncome * (this.selectedStatus.si + this.selectedStatus.ghs) / 100);

  ngOnInit(): void {
  }

}
