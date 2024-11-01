import { AccessibilityService } from './../../core/services/accessibility.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule,RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private authService: AuthService, private accessibilityService : AccessibilityService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isAdmin$ = this.authService.isAdmin$;
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.user$.pipe(
      map(user => !!user)
    );
  }

  speach(text : string) {
    this.accessibilityService.speak(text);
  }



  logout() {
    this.authService.logout();
  }
}
