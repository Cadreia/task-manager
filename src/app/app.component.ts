import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './_shared/services/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-angular';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    private tokenService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.tokenService.isLoggedIn.next(!!this.tokenStorageService.getToken());
    this.tokenService.isLoggedIn.subscribe(value => this.isLoggedIn = value);
    console.log(this.isLoggedIn);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
