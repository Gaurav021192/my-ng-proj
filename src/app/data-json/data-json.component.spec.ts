import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataJsonComponent } from './data-json.component';

describe('DataJsonComponent', () => {
  let component: DataJsonComponent;
  let fixture: ComponentFixture<DataJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
