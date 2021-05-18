import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';

import { ITransfer } from '../../ITransfer';
import { TransferService } from '../../services/transfer.service';
import { Store, select } from '@ngrx/store';
// import {LoadTransfers} from "../../store/actions";

import {
  LoadTransfers
} from '../../store/actions/transfers.action';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



// const TRANSFERS: ITransfer[] = [
//   { id: 1, accountHolder: 'PenelopeHard Berry', IBAN: 'DE63500105173833675741', amount: 10.99, date: new Date(), note: '1 transfer'},
//   { id: 2, accountHolder: 'Paul Clarkson', IBAN: 'DE92500105174765356824', amount: 250.80, date: new Date(), note: '2 transfer'},
//   { id: 3, accountHolder: 'David Butler', IBAN: 'DE82500105171946297899', amount: 1000.99, date: new Date(), note: '3 transfer'},
//   { id: 4, accountHolder: 'Sarah Davidson', IBAN: 'DE05500105174921581158', amount: 500, date: new Date(), note: '4 transfer'},
//   { id: 5, accountHolder: 'Tracey Hunter', IBAN: 'DE93500105176198859181', amount: 68.25, date: new Date(), note: '5 transfer'}
// ];

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})

export class TransfersListComponent implements AfterViewInit, OnInit {
  @Input() list?: ITransfer[];
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'accountHolder'];
  dataSource: MatTableDataSource<ITransfer>;

  transfers: ITransfer[];

  constructor(
    private transferService: TransferService,
    private store: Store
  ) { }

  ngOnInit() {
    this.transferService
      .getAll()
      .subscribe((transfers) => {
        this.store.dispatch(new LoadTransfers(transfers.list));
        this.transfers = transfers.list;

        this.dataSource = new MatTableDataSource(transfers.list);
        this.dataSource.sort = this.sort;
      });
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
}


// export class TransfersListComponent implements OnInit {
//   transfers: ITransfer[];
//
//   constructor(
//     private transferService: TransferService,
//     private store: Store
//   ) { }
//
//   ngOnInit() {
//     this.transferService
//       .getAll()
//       .subscribe((transfers) => {
//         this.store.dispatch(new LoadTransfers(transfers.list));
//         this.transfers = transfers.list;
//       });
//   }

  // getTransfers(): void {
  //   this.transfers = this.transferService.getAll();

  //   this.heroService.getAll()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
  //
  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }

// }
