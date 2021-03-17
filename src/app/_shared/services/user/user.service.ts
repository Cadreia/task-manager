import {Injectable} from '@angular/core';
import {User} from '../../../_models/user';
import {UserGroup} from '../../../_models/user-group';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../token-storage/token-storage.service';

const API_URL = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCount = 3;
  userGroupCount = 8;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {
  }

  // getLoggedInUser(): any {
  //   const userCreds = JSON.parse(localStorage.getItem('user') as string);
  //   const foundUser = this.getUsers().find(u => (u.username === userCreds.userName) && (u.password === userCreds.password));
  //   const foundAdmin = this.getAdmins().find(a => (a.username === userCreds.userName) && (a.password === userCreds.password));
  //   if (foundUser) {
  //     return foundUser;
  //   } else if (foundAdmin) {
  //     return foundAdmin;
  //   }
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'users', httpOptions);
  }

  getAdmins(): User[] {
    return [];
  }

  getUserGroups(): UserGroup[] {
    return [];
  }

  getUsersOfGroup(groupId: number): User[] {
    const userGroups = this.getUserGroups().filter(userGroup => userGroup.group.id === groupId);
    if (userGroups) {
      console.log(userGroups.map(userGroup => userGroup.user));
      return userGroups.map(userGroup => userGroup.user);
    }
    return [];
  }

  addUserToGroup(userGroup: UserGroup): void {
    const userGroups = this.getUserGroups();
    userGroups.push(userGroup);
    this.setUserGroups(userGroups);
  }

  setUserGroups(userGroups: UserGroup[]): void {
    localStorage.setItem('userGroups', JSON.stringify(userGroups));
  }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'test/all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'test/user', { responseType: 'text' });
  }
  //
  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }

  getUserRole(): string {
    let role = '';
    if (this.tokenStorage.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      if (user.role === 'ROLE_ADMIN') {
        role = 'admin';
      } else if (user.role === 'ROLE_USER') {
        role = 'user';
      }
    }
    return role;
  }
}
