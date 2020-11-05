import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  async ngOnInit() {
    await this.authService.completeAuthentication();
    await this.router.navigate(['/']);
  }

}
