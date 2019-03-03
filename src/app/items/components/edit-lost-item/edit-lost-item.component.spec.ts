import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLostItemComponent } from './edit-lost-item.component';

describe('EditLostItemComponent', () => {
  let component: EditLostItemComponent;
  let fixture: ComponentFixture<EditLostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLostItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
