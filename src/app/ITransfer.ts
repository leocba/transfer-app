export interface ITransfer {
  id: number;
  accountHolder: string;
  IBAN: string;
  amount: number;
  date: Date;
  note: string;
}
