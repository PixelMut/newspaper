import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedArticlesComponent } from './saved-articles.component';

describe('SavedArticlesComponent', () => {
  let component: SavedArticlesComponent;
  let fixture: ComponentFixture<SavedArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
