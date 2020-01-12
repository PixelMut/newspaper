import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherspageComponent } from './publisherspage.component';

describe('PublisherspageComponent', () => {
  let component: PublisherspageComponent;
  let fixture: ComponentFixture<PublisherspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
