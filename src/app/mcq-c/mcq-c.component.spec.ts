import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqCComponent } from './mcq-c.component';

describe('McqCComponent', () => {
  let component: McqCComponent;
  let fixture: ComponentFixture<McqCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
