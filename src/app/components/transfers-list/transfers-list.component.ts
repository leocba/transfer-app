import { Component, OnInit } from '@angular/core';

import { ITransfer } from '../../ITransfer';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfers-list',
  templateUrl: './transfers-list.component.html',
  styleUrls: ['./transfers-list.component.scss']
})
export class TransfersListComponent implements OnInit {
  transfers: ITransfer[];

  constructor(private transferService: TransferService) { }

  ngOnInit() {
    this.getTransfers();
  }

  getTransfers(): void {
    this.transfers = this.transferService.getAll();
  //   this.heroService.getAll()
  //     .subscribe(heroes => this.heroes = heroes);
  }

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

}
