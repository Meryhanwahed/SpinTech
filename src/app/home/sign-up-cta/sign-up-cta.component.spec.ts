import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCTAComponent } from './sign-up-cta.component';

describe('SignUpCTAComponent', () => {
  let component: SignUpCTAComponent;
  let fixture: ComponentFixture<SignUpCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpCTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
