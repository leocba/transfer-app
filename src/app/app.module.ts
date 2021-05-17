import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTransferComponent } from './components/add-transfer/add-transfer.component';
import { TransferDetailsComponent } from './components/transfer-details/transfer-details.component';
import { TransfersListComponent } from './components/transfers-list/transfers-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import * as fromTransferStore from './store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AddTransferComponent,
    TransferDetailsComponent,
    TransfersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('transfers', fromTransferStore.reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
