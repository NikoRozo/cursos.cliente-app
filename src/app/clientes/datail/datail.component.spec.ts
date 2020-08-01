import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailComponent } from './datail.component';

describe('DatailComponent', () => {
  let component: DatailComponent;
  let fixture: ComponentFixture<DatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
