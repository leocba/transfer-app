import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransferDialogComponent } from './edit-transfer-dialog.component';

describe('EditTransferDialogComponent', () => {
  let component: EditTransferDialogComponent;
  let fixture: ComponentFixture<EditTransferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
