import { Component } from '@angular/core';
import { AccessibilityService } from '../../core/services/accessibility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speech-toggle',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './speech-toggle.component.html',
  styleUrls: ['./speech-toggle.component.scss']
})
export class SpeechToggleComponent {
  isSpeechEnabled: boolean = true;

  constructor(private accessibilityService: AccessibilityService) {}

  toggleSpeech() {
    this.isSpeechEnabled = !this.isSpeechEnabled;
    this.accessibilityService.toggleSpeech(this.isSpeechEnabled);
  }
}
