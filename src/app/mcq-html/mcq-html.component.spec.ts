import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqHtmlComponent } from './mcq-html.component';

describe('McqHtmlComponent', () => {
  let component: McqHtmlComponent;
  let fixture: ComponentFixture<McqHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McqHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McqHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
