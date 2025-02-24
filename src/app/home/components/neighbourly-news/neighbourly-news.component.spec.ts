import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighbourlyNewsComponent } from './neighbourly-news.component';

describe('NeighbourlyNewsComponent', () => {
  let component: NeighbourlyNewsComponent;
  let fixture: ComponentFixture<NeighbourlyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighbourlyNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighbourlyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
