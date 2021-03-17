import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BaseUser} from '../_models/base-user';
import {AuthService} from '../_shared/services/auth.service';
import {StorageService} from '../_shared/services/storage.service';
import {UserService} from '../_shared/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  baseUser: BaseUser;
  role = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.baseUser = new BaseUser();
  }

  ngOnInit(): void {
  }

  onSignUp(): void {
    delete this.baseUser._id;
    this.authService.register(this.baseUser).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.sendMessage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  sendMessage(): void {
    this.authService.loginMessage = 'Login to continue...';
    this.router.navigateByUrl('/login');
  }
}
