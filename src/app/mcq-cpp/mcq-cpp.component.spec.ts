import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqCppComponent } from './mcq-cpp.component';

describe('McqCppComponent', () => {
  let component: McqCppComponent;
  let fixture: ComponentFixture<McqCppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqCppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqCppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
