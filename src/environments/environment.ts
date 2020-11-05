// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: 'https://test.softrig.com/api/',
  authority: 'https://test-login.softrig.com/',
  clientId: 'c02623ae-3252-4770-a51f-9174ef7fd4ff',
  redirectUri: 'http://localhost:4200/auth-callback',
  postLogoutRedirectUri: 'http://localhost:4200',
  automaticSilentRenew: true,
  responseType: 'id_token token',
  scope: 'openid profile AppFramework',
  filterProtocolClaims: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
