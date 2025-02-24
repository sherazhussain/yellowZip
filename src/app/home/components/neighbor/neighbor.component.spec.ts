import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborComponent } from './neighbor.component';

describe('NeighborComponent', () => {
  let component: NeighborComponent;
  let fixture: ComponentFixture<NeighborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
