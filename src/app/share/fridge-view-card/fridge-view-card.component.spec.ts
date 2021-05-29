import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeViewCardComponent } from './fridge-view-card.component';

describe('FridgeViewCardComponent', () => {
  let component: FridgeViewCardComponent;
  let fixture: ComponentFixture<FridgeViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FridgeViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
