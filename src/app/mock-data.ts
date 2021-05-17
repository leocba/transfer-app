import { ITransfer } from './ITransfer';

export const TRANSFERS: ITransfer[] = [
  { id: 1, accountHolder: 'Penelope Berry', IBAN: 'DE63500105173833675741', amount: 10.99, date: new Date(), note: '1 transfer'},
  { id: 2, accountHolder: 'Paul Clarkson', IBAN: 'DE92500105174765356824', amount: 250.80, date: new Date(), note: '2 transfer'},
  { id: 3, accountHolder: 'David Butler', IBAN: 'DE82500105171946297899', amount: 1000.99, date: new Date(), note: '3 transfer'},
  { id: 4, accountHolder: 'Sarah Davidson', IBAN: 'DE05500105174921581158', amount: 500, date: new Date(), note: '4 transfer'},
  { id: 5, accountHolder: 'Tracey Hunter', IBAN: 'DE93500105176198859181', amount: 68.25, date: new Date(), note: '5 transfer'}
];
