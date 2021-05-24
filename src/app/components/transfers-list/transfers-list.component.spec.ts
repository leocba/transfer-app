import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { TransfersListComponent } from './transfers-list.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import { MatTableModule } from '@angular/material/table'
import {AngularIbanModule} from 'angular-iban';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {By} from '@angular/platform-browser';

let store$: MockStore;

fdescribe('TransfersListComponent', () => {
  let component: TransfersListComponent;
  let fixture: ComponentFixture<TransfersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersListComponent ],
      imports: [
        MatDialogModule,
        MatProgressBarModule,
        MatTableModule,
        MatInputModule,
        AngularIbanModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        HttpClientModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        provideMockStore({
          initialState: {
            transfers: {
              transfers: [
                {
                  id: '1fee3cde-a656-4f9b-9bac-a4dd5008f4fa',
                  accountHolder: 'Penelope Berry',
                  IBAN: 'DE63500105173833675741',
                  amount: 100.99,
                  date: '2021-06-12T00:00:00.000Z',
                  note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                  id: '0b360e7a-9c61-4843-a9e6-d7ebc83d8ed9',
                  accountHolder: 'Paul Clarkson',
                  IBAN: 'DE92500105174765356824',
                  amount: 250.8,
                  date: '2018-06-12T00:00:00.000Z',
                  note: 'Sed id consequat urna. Maecenas ac mattis neque. Suspendisse in luctus lectus.'
                },
                {
                  id: 'f51d52c3-4d86-448e-8e0d-0ae23703c9cc',
                  accountHolder: 'David Butler',
                  IBAN: 'DE82500105171946297899',
                  amount: 12000.99,
                  date: '2021-06-13T00:00:00.000Z',
                  note: 'Mauris egestas sagittis nunc eu condimentum.'
                },
                {
                  id: 'ee9e595e-d4e1-4cd5-a5db-e74634883962',
                  accountHolder: 'Sarah Davidson',
                  IBAN: 'DE05500105174921581158',
                  amount: 500,
                  date: '2021-07-13T00:00:00.000Z',
                  note: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.'
                },
                {
                  id: 'bbfff549-7ba5-4fcb-a5b9-7d31af417ef3',
                  accountHolder: 'Tracey Hunter',
                  IBAN: 'DE93500105176198859181',
                  amount: 68.25,
                  date: '2017-06-13T00:00:00.000Z',
                  note: 'Sed pulvinar ex nulla, in eleifend ex venenatis vel.'
                }
              ],
              loading: false,
              httpError: null
            }
          }
        })
      ]
    })
    .compileComponents();
    store$ = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial list', () => {
    expect(
      fixture.debugElement.queryAll(By.css('.mat-row'))
        .length
    ).toBe(5);
  });

  it('should display progress-bar on loading', () => {
    store$.setState({ transfers: {loading: true} });
    store$.refreshState();
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('mat-progress-bar'))
        .length
    ).toBe(1);
  });
});

