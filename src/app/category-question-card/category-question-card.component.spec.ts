import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryQuestionCardComponent } from './category-question-card.component';

describe('CategoryQuestionCardComponent', () => {
  let component: CategoryQuestionCardComponent;
  let fixture: ComponentFixture<CategoryQuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryQuestionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
