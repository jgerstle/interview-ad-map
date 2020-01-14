import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLogComponent } from './ad-log.component';

describe('AdLogComponent', () => {
  let component: AdLogComponent;
  let fixture: ComponentFixture<AdLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
