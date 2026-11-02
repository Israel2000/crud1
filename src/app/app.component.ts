import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrl: './app.component.css'
})
export class AppComponent {
  loggedUserName: string = '';

  private readonly router = inject(Router);
  private readonly commonService = inject(CommonService);

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  constructor() {
    this.readLoggedUserData();

    this.commonService.onLogin$.subscribe(() => this.readLoggedUserData());
  }

  readLoggedUserData() {
    const local = localStorage.getItem('enquiryApp');
    if (local !== null && local !== 'true') {
      this.loggedUserName = local;
    }
  }
}