import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBoundComponent } from './data-bound.component';

describe('DataBoundComponent', () => {
  let component: DataBoundComponent;
  let fixture: ComponentFixture<DataBoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBoundComponent]
    });
    fixture = TestBed.createComponent(DataBoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
