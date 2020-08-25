import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from "@angular/router/testing";

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the choose-plan component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-choose-plan')).not.toBe(null);
  }));

  it('should contain the user-type component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-user-type')).not.toBe(null);
  }));

  it('should contain the current-plan component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-current-plan')).not.toBe(null);
  }));
});
