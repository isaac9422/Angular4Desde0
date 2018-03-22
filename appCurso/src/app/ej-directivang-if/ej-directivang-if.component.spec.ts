import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjDirectivangIfComponent } from './ej-directivang-if.component';

describe('EjDirectivangIfComponent', () => {
  let component: EjDirectivangIfComponent;
  let fixture: ComponentFixture<EjDirectivangIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjDirectivangIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjDirectivangIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
