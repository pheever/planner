export interface Employment {
  status: string
  si: number,
  ghs: number
}

export const Employments: Employment[] = [
  {
    status: "self employed",
    si: 15.6,
    ghs: 4
  },
  {
    status: "employee",
    si: 8.3,
    ghs: 2.65
  }
]
