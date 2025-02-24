import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesAndBrandsComponent } from './agencies-and-brands.component';

describe('AgenciesAndBrandsComponent', () => {
  let component: AgenciesAndBrandsComponent;
  let fixture: ComponentFixture<AgenciesAndBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesAndBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciesAndBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
