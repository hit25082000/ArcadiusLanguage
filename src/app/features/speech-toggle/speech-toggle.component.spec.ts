import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechToggleComponent } from './speech-toggle.component';

describe('SpeechToggleComponent', () => {
  let component: SpeechToggleComponent;
  let fixture: ComponentFixture<SpeechToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeechToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
