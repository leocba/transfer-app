import { ComponentFixture, TestBed } from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import { EditTransferComponent } from './edit-transfer.component';
import {FormsModule} from '@angular/forms';

describe('EditTransferComponent', () => {
  let component: EditTransferComponent;
  let fixture: ComponentFixture<EditTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferComponent ],
      imports: [
        StoreModule.forRoot({}),
        FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
