export interface FinanceItem {
  name: string;
  price: number;
  type: `spent` | `desire`;
  repeatAt: Date;
}

export interface Account {
  userId: string;
  totalMoney: number;
  financeItems: FinanceItem[];
}
