import { MockDataInsertion } from './core/services/mock-data.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SpeechToggleComponent } from './features/speech-toggle/speech-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpeechToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  mock = inject(MockDataInsertion)
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    //this.mock.insertMockData();
  }
}
