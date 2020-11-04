import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogin() {
    await this.authService.startAuthentication();
    await this.authService.completeAuthentication();
  }

}
