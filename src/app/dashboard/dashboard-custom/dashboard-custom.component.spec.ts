import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCustomComponent } from './dashboard-custom.component';

describe('DashboardCustomComponent', () => {
  let component: DashboardCustomComponent;
  let fixture: ComponentFixture<DashboardCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCustomComponent]
    });
    fixture = TestBed.createComponent(DashboardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
