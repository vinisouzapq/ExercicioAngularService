import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasDetalhesComponent } from './pessoas-detalhe.component';

describe('PessoasDetalhesComponent', () => {
  let component: PessoasDetalhesComponent;
  let fixture: ComponentFixture<PessoasDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});