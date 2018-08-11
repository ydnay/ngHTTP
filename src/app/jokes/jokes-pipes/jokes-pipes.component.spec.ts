import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPipesComponent } from './jokes-pipes.component';

describe('JokesPipesComponent', () => {
  let component: JokesPipesComponent;
  let fixture: ComponentFixture<JokesPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
