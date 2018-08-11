import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPromiseFallbackComponent } from './jokes-promise-fallback.component';

describe('JokesPromiseFallbackComponent', () => {
  let component: JokesPromiseFallbackComponent;
  let fixture: ComponentFixture<JokesPromiseFallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesPromiseFallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPromiseFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
