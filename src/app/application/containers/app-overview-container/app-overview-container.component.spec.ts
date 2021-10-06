import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOverviewContainerComponent } from './app-overview-container.component';

describe('AppOverviewContainerComponent', () => {
  let component: AppOverviewContainerComponent;
  let fixture: ComponentFixture<AppOverviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOverviewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
