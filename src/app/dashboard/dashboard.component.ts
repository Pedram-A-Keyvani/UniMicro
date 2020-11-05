import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogin() {
    await this.authService.startAuthentication();
  }

}
