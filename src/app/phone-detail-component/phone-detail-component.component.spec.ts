import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailComponentComponent } from './phone-detail-component.component';

describe('PhoneDetailComponentComponent', () => {
  let component: PhoneDetailComponentComponent;
  let fixture: ComponentFixture<PhoneDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
