import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username!: String;
  public password!: String;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/api/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map(() => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: String, password: String) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username.toString())
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = '';
    this.password = '';
  }

  isUserLoggedIn() {
    return sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME) !== null;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
