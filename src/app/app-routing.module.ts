import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfersListComponent } from './components/transfers-list/transfers-list.component';
import { EditTransferComponent } from './components/edit-transfer/edit-transfer.component';
import { AddTransferComponent } from './components/add-transfer/add-transfer.component';

const routes: Routes = [
  { path: '', redirectTo: 'transfers', pathMatch: 'full' },
  { path: 'transfers', component: TransfersListComponent },
  { path: 'transfers/:id', component: EditTransferComponent },
  { path: 'add', component: AddTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
