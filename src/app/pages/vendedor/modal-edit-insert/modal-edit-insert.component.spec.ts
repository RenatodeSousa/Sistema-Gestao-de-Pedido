import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditInsertComponent } from './modal-edit-insert.component';

describe('ModalEditInsertComponent', () => {
  let component: ModalEditInsertComponent;
  let fixture: ComponentFixture<ModalEditInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
