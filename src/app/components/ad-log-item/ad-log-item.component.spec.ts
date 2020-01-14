import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLogItemComponent } from './ad-log-item.component';

describe('AdLogItemComponent', () => {
  let component: AdLogItemComponent;
  let fixture: ComponentFixture<AdLogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdLogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdLogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
