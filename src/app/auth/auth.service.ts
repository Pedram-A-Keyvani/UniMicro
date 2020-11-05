import { Injectable } from '@angular/core';
import { environment } from '@app/environment';
import { User, UserManager } from 'oidc-client';

const settings: any = {
  authority: environment.authority,
  client_id: environment.clientId,
  redirect_uri: environment.redirectUri,
  post_logout_redirect_uri: environment.postLogoutRedirectUri,
  response_type: environment.responseType,
  scope: environment.scope,
  filterProtocolClaims: environment.filterProtocolClaims,
  automaticSilentRenew: true

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userManager: UserManager;
  currentUser: User;

  get authorizationHeaderValue(): string {
    return this.currentUser ? `${this.currentUser.token_type} ${this.currentUser.access_token}` : undefined;
  }

  get isLoggedIn(): boolean {
    return this.currentUser && !this.currentUser.expired;
  }

  constructor() {
    this.userManager = new UserManager(settings);
    this.userManager.getUser().then(user => {
      this.currentUser = user;
    });
  }

  async startAuthentication() {
    return this.userManager.signinRedirect();
  }

  async completeAuthentication() {
    this.currentUser = await this.userManager.signinRedirectCallback();
  }

  async logout(returnUrl?: string) {
    await this.userManager.signoutRedirect(returnUrl);
  }
}
