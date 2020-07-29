import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEnderecoFormComponent } from './base-endereco-form.component';

describe('BaseEnderecoFormComponent', () => {
  let component: BaseEnderecoFormComponent;
  let fixture: ComponentFixture<BaseEnderecoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseEnderecoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
