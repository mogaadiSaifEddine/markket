import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnegoodComponent } from './onegood.component';

describe('OnegoodComponent', () => {
  let component: OnegoodComponent;
  let fixture: ComponentFixture<OnegoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnegoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnegoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
