import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAreasComponent } from './training-areas.component';

describe('TrainingAreasComponent', () => {
  let component: TrainingAreasComponent;
  let fixture: ComponentFixture<TrainingAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
