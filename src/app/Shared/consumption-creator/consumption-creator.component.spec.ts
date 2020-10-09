import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionCreatorComponent } from './consumption-creator.component';

describe('ConsumptionCreatorComponent', () => {
  let component: ConsumptionCreatorComponent;
  let fixture: ComponentFixture<ConsumptionCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
