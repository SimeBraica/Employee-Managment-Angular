import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDropdownComponent } from './job-dropdown.component';

describe('JobDropdownComponent', () => {
  let component: JobDropdownComponent;
  let fixture: ComponentFixture<JobDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
