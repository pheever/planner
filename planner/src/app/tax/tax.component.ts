import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TaxBracket, Taxes } from '../tax-brackets'

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit, OnChanges {
  taxes: TaxBracket[] = Taxes;
  @Input() annualIncome: number = 0
  @Input() totalDeductions: number = 0
  @Output() tax = new EventEmitter<number>();

  payableTaxPerBracket = (): TaxBracket[] => {
    let taxable = this.annualIncome * (1 - Math.min(this.totalDeductions, 20) / 100);
    this.taxes = this.taxes.sort((a, b) => a.upto - b.upto);
    return this.taxes.map((v, i, a) => {
      let prev = i > 0 ? a[i - 1].upto : 0;
      v.payable = taxable > prev ? Math.min(taxable - prev, v.upto - prev) * v.tax / 100 : 0;
      return v
    });
  }

  taxBracketsFiletered = () => this.payableTaxPerBracket().filter(v => v.payable > 0)

  totalTax = () => this.payableTaxPerBracket().reduce((a, v) => a + v.payable, 0);

  getMaxTaxableBracket = () => this.payableTaxPerBracket().reduce((a, v) => v.upto !== Number.MAX_SAFE_INTEGER && v.upto > a ? v.upto : a, 0)

  constructor() { }
  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    this.tax.emit(this.totalTax())
  }
}
