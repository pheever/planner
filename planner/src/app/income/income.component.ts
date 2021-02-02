import { Component, OnInit, Input } from '@angular/core';
import '../../assets/string.extensions'

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})

export class IncomeComponent implements OnInit {

  @Input() bonus: number = 0
  @Input() thirteen: boolean = false
  @Input() monthlyIncome: number = 0
  
  constructor() { }

  grossIncome = () => this.monthlyIncome * (this.thirteen ? 13 : 12) + this.bonus;

  ngOnInit(): void { }

}
