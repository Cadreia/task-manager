import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
    this.isLoggedIn = this.tokenStorageService.isLoggedIn.value;
  }

  ngOnInit(): void {}

  signOut(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
