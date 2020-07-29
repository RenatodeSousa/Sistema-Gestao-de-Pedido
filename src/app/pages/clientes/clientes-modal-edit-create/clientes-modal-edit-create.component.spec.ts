import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesModalEditCreateComponent } from './clientes-modal-edit-create.component';

describe('ClientesModalEditCreateComponent', () => {
  let component: ClientesModalEditCreateComponent;
  let fixture: ComponentFixture<ClientesModalEditCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesModalEditCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesModalEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
