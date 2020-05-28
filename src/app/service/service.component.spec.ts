import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryService } from './service.component';

describe('ServiceComponent', () => {
  let component: CategoryService;
  let fixture: ComponentFixture<CategoryService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
