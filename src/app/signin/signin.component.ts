import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from '../_models/login';
import {AuthService} from '../_shared/services/auth.service';
import {TokenStorageService} from '../_shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';
  message = '';
  roles: string[] = [];

  loginModel: Login;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.loginModel = {password: '', username: ''};
  }

  ngOnInit(): void {
    this.message = this.authService.loginMessage;
    if (this.tokenStorage.getToken()) {
      this.tokenStorage.isLoggedIn.next(true);
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSignIn(): void {
    const { username, password } = this.loginModel;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.tokenStorage.isLoggedIn.next(true);
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigateByUrl('/profile');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
