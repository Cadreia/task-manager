import {User} from '../../_models/user';
import {Admin} from '../../_models/admin';
import {UserGroup} from '../../_models/user-group';
import {Group} from '../../_models/group';
import {Task} from '../../_models/task';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  users: User[] = [
    new User(1, 'kim', 'west', 'kimwest', 'kimwest@gmail.com', '12345'),
    new User(2, 'beverly', 'kane', 'b-kane', 'bkane@gmail.com', '76543210'),
    new User(3, 'scott', 'epah', 'scott-e', 'scotte@gmail.com', '7654390'),
    new User(4, 'blaine', 'peters', 'pblaine', 'pblaine@gmail.com', '793786'),
    new User(5, 'sally', 'coleman', 'scole', 'sally@gmail.com', '67987655jb')
  ];

  adminCount = 2;
  admins: Admin[] = [
    new Admin(1, 'ben', 'coaley', 'bcoaley', 'bcoale@yahoo.com', '7890-76'),
    new Admin(2, 'mark', 'twain', 'mtwain', 'mtwain@outlook.com', '465789')
  ];

  groups: Group[] = [
    new Group(1, 'Group 1', 'groups 1 description', (this.admins)[0]),
    new Group(2, 'Group 2', 'groups 2 description', (this.admins)[0]),
    new Group(3, 'Group 3', 'groups 3 description', (this.admins)[1]),
    new Group(4, 'Group 4', 'groups 4 description', (this.admins)[1])
  ];

  userGroups: UserGroup[] = [
    new UserGroup(1, this.users[0], this.groups[0]),
    new UserGroup(2, this.users[1], this.groups[0]),
    new UserGroup(3, this.users[3], this.groups[3]),
    new UserGroup(4, this.users[2], this.groups[0]),
    new UserGroup(5, this.users[3], this.groups[1]),
    new UserGroup(6, this.users[0], this.groups[2]),
    new UserGroup(7, this.users[4], this.groups[2]),
    new UserGroup(8, this.users[4], this.groups[1])
  ];

  tasks: Task[] = [
    new Task(1, 'Task 1', 'task 1 for groups 1', 'unassigned', 'none', this.groups[0]),
    new Task(2, 'Task 1', 'task 1 for groups 2', 'assigned', 'in progress', this.groups[1], this.users[3]),
    new Task(3, 'Task 2', 'task 2 for groups 2', 'unassigned', 'none', this.groups[1]),
    new Task(4, 'Task 1', 'task 1 for groups 3', 'assigned', 'in progress', this.groups[2], this.users[4])
  ];

  initializeStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('admins', JSON.stringify(this.admins));
    localStorage.setItem('groups', JSON.stringify(this.groups));
    localStorage.setItem('userGroups', JSON.stringify(this.userGroups));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  setUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  setAdmins(admins: Admin[]): void {
    localStorage.setItem('admins', JSON.stringify(admins));
  }

  setGroups(groups: Group[]): void {
    localStorage.setItem('groups', JSON.stringify(groups));
  }

  setUserGroups(userGroups: UserGroup[]): void {
    localStorage.setItem('userGroups', JSON.stringify(userGroups));
  }
}