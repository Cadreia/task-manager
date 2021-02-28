import {Component, OnInit} from '@angular/core';
import {UserService} from '../_shared/services/user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUsername: string;

  constructor(
    private userService: UserService
    ) {
    this.currentUsername = this.getCurrentUser().userName;
  }

  ngOnInit(): void {

  }

  getCurrentUser(): any {
    return this.userService.getLoggedInUser();
  }
}
