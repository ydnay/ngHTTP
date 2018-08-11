import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesChainOperatorComponent } from './jokes-chain-operator.component';

describe('JokesChainOperatorComponent', () => {
  let component: JokesChainOperatorComponent;
  let fixture: ComponentFixture<JokesChainOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesChainOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesChainOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
