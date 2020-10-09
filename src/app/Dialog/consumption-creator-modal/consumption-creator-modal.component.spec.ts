import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCreatorModalComponent } from './consumption-creator-modal.component';

describe('ConsumptionCreatorModalComponent', () => {
  let component: ConsumptionCreatorModalComponent;
  let fixture: ComponentFixture<ConsumptionCreatorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionCreatorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCreatorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
