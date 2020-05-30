import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseThisPlanComponent } from './choose-this-plan.component';

describe('ChooseThisPlanComponent', () => {
  let component: ChooseThisPlanComponent;
  let fixture: ComponentFixture<ChooseThisPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseThisPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseThisPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
