import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCoachesComponent } from './expert-coaches.component';

describe('ExpertCoachesComponent', () => {
  let component: ExpertCoachesComponent;
  let fixture: ComponentFixture<ExpertCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertCoachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
