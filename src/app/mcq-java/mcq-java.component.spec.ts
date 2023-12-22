import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqJavaComponent } from './mcq-java.component';

describe('McqJavaComponent', () => {
  let component: McqJavaComponent;
  let fixture: ComponentFixture<McqJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqJavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
