import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLostItemComponent } from './add-lost-item.component';

describe('AddLostItemComponent', () => {
  let component: AddLostItemComponent;
  let fixture: ComponentFixture<AddLostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
