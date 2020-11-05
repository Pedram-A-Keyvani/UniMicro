import { Component } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Uni Micro';

  constructor(public authService: AuthService) { }

  async onLogout() {
    await this.authService.logout();
  }

}
