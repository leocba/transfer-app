export interface ITransfer {
  id: string;
  accountHolder: string;
  IBAN: string;
  amount: number;
  date: Date;
  note: string;
}
