import {AfterViewInit, Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';

import { ITransfer } from '../../ITransfer';
import { TransferService } from '../../services/transfer.service';
import { Store, select } from '@ngrx/store';

import {
  DeleteTransfer,
  LoadTransfers
} from '../../store/actions/transfers.action';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import {getAllTransfers} from '../../store/reducers';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {AddTransferDialogComponent} from '../add-transfer-dialog/add-transfer-dialog.component';
import {EditTransferDialogComponent} from '../edit-transfer-dialog/edit-transfer-dialog.component';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})

export class TransfersListComponent implements OnInit {
  @Input() list?: ITransfer[];
  @ViewChild(MatSort) sort: MatSort;

  transfers$: Observable<ITransfer[]>;

  displayedColumns: string[] = ['id', 'accountHolder', 'IBAN', 'amount', 'date', 'note', 'actions'];
  dataSource: MatTableDataSource<ITransfer>;

  transfers: ITransfer[];

  constructor(
    private transferService: TransferService,
    private store: Store,
    public dialog: MatDialog
  ) {
    this.transfers$ = this.store.select(getAllTransfers);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.store.dispatch(new DeleteTransfer(id));
      }
      console.log(`Dialog result: ${result} ${id}`);
    });
  }

  openEditDialog(transfer: ITransfer) {
    this.dialog.open(EditTransferDialogComponent, {
      width: '250px',
      data: { transfer }
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddTransferDialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result){
    //     this.store.dispatch(new DeleteTransfer(id));
    //   }
    //   console.log(`Dialog result: ${result} ${id}`);
    // });
  }

  ngOnInit() {
    this.transfers$.subscribe((transfers) => {
      this.dataSource = new MatTableDataSource(transfers);
      this.dataSource.sort = this.sort;

      this.dataSource.filterPredicate = (data: ITransfer, filter: string) => {
        return data.accountHolder.toLowerCase().indexOf(filter) !== -1 || data.note.toLowerCase().indexOf(filter) !== -1;
      };
    });
    // this.transferService
    //   .getAll()
    //   .subscribe((transfers) => {
    //     this.store.dispatch(new LoadTransfers(transfers.list));
    //     this.transfers = transfers.list;
    //
    //     this.dataSource = new MatTableDataSource(transfers.list);
    //     this.dataSource.sort = this.sort;
    //
    //     this.dataSource.filterPredicate = (data: ITransfer, filter: string) => {
    //       return data.accountHolder.toLowerCase().indexOf(filter) !== -1 || data.note.toLowerCase().indexOf(filter) !== -1;
    //     };
    //   });
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
