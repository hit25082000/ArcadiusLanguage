import { Component } from '@angular/core';
import { AccessibilityService } from '../../core/services/accessibility.service';

@Component({
  selector: 'app-Games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  constructor(private accessibilityService: AccessibilityService) {}

  onButtonClick(text : string) {
    this.accessibilityService.speak(text);
  }
}
