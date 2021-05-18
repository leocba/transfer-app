import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';

import { ITransfer } from '../../ITransfer';
import { TransferService } from '../../services/transfer.service';
import { Store, select } from '@ngrx/store';

import {
  LoadTransfers
} from '../../store/actions/transfers.action';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})

export class TransfersListComponent implements OnInit {
  @Input() list?: ITransfer[];
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'accountHolder', 'note'];
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

        this.dataSource.filterPredicate = (data: ITransfer, filter: string) => {
          return data.accountHolder.toLowerCase().indexOf(filter) !== -1 || data.note.toLowerCase().indexOf(filter) !== -1;
        };
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
