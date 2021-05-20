import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferDialogComponent } from './add-transfer-dialog.component';

describe('AddTransferDialogComponent', () => {
  let component: AddTransferDialogComponent;
  let fixture: ComponentFixture<AddTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
