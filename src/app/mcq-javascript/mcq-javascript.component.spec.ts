import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqJavascriptComponent } from './mcq-javascript.component';

describe('McqJavascriptComponent', () => {
  let component: McqJavascriptComponent;
  let fixture: ComponentFixture<McqJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqJavascriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
