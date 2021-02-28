import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService
  ) {
    this.users = this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }
}
