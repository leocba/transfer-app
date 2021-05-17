import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfersListComponent } from './components/transfers-list/transfers-list.component';
import { TransferDetailsComponent } from './components/transfer-details/transfer-details.component';
import { AddTransferComponent } from './components/add-transfer/add-transfer.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'transfers', component: TransfersListComponent },
  { path: 'transfers/:id', component: TransferDetailsComponent },
  { path: 'add', component: AddTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
