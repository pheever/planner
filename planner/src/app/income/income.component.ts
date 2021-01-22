import { Component, OnInit, Input } from '@angular/core';
import { CONTRIBUTIONS } from '../si-contributions'




@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  anualInclome = 0
  @Input() monthlyIncome = 0
  @Input() bonus = 0
  @Input() thirteen = false
  @Input() si = 0
  socialInsurance = CONTRIBUTIONS

  onSelect(si:number){
    this.si = si
  }

  constructor() { }

  ngOnInit(): void {
  }

}
