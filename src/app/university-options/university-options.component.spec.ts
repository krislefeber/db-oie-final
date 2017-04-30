import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOptionsComponent } from './university-options.component';

describe('UniversityOptionsComponent', () => {
  let component: UniversityOptionsComponent;
  let fixture: ComponentFixture<UniversityOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
