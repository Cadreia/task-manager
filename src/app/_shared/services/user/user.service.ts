import { Injectable } from '@angular/core';
import {User} from '../../../_models/user';
import {UserGroup} from '../../../_models/user-group';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCount = 3;

  constructor() { }

  getLoggedInUser(): any {
    console.log(JSON.parse(localStorage.getItem('user') as string));
    return JSON.parse(localStorage.getItem('user') as string);
  }

  getUsers(): User[] {
    console.log(JSON.parse(localStorage.getItem('users') as string));
    return JSON.parse(localStorage.getItem('users') as string);
  }

  getAdmins(): User[] {
    return JSON.parse(localStorage.getItem('admins') as string);
  }

  getUserGroups(): UserGroup[] {
    return JSON.parse(localStorage.getItem('userGroups') as string);
  }

  getUsersOfGroup(groupId: number): User[] {
    const userGroups = this.getUserGroups().filter(userGroup => userGroup.group.id === groupId);
    if (userGroups) {
      console.log(userGroups.map(userGroup => userGroup.user));
      return userGroups.map(userGroup => userGroup.user);
    }
    return [];
  }

}
