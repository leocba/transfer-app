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

import {initialState} from '../../utils/initialState';

import {By} from '@angular/platform-browser';

let store$: MockStore;

describe('TransfersListComponent', () => {
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
        provideMockStore(initialState)
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

