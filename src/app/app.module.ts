import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTransferComponent } from './components/add-transfer/add-transfer.component';
import { EditTransferComponent } from './components/edit-transfer/edit-transfer.component';
import { TransfersListComponent } from './components/transfers-list/transfers-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import * as fromTransferStore from './store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

import { AngularIbanModule } from 'angular-iban';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { AddTransferDialogComponent } from './components/add-transfer-dialog/add-transfer-dialog.component';

// import ngCurrency from 'ng-currency';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { EditTransferDialogComponent } from './components/edit-transfer-dialog/edit-transfer-dialog.component';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

// import { AppModule } from './app/app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// platformBrowserDynamic().bootstrapModule(AppModule, {
//   providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
// });

@NgModule({
  declarations: [
    AppComponent,
    AddTransferComponent,
    EditTransferComponent,
    TransfersListComponent,
    ConfirmDialogComponent,
    AddTransferDialogComponent,
    EditTransferDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('transfers', fromTransferStore.reducer),
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AngularIbanModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CurrencyMaskModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-DE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
