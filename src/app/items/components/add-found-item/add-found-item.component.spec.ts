import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoundItemComponent } from './add-found-item.component';

describe('AddFoundItemComponent', () => {
  let component: AddFoundItemComponent;
  let fixture: ComponentFixture<AddFoundItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoundItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoundItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
