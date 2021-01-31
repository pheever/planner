export interface TaxBracket {
  upto: number,
  tax: number,
  payable: number
}

export const Taxes: TaxBracket[] = [
  {
    upto: 19500,
    tax: 0,
    payable: 0
  },
  {
    upto: 28000,
    tax: 20,
    payable: 0
  },
  {
    upto: 36300,
    tax: 25,
    payable: 0
  },
  {
    upto: 60000,
    tax: 30,
    payable: 0
  },
  {
    upto: Number.MAX_SAFE_INTEGER,
    tax: 35,
    payable: 0
  }
]
