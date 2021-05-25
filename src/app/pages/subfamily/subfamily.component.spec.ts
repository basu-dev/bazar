import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfamilyComponent } from './subfamily.component';

describe('SubfamilyComponent', () => {
  let component: SubfamilyComponent;
  let fixture: ComponentFixture<SubfamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubfamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
