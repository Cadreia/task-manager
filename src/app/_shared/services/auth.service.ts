import {Login} from '../../_models/login';
import {Injectable} from '@angular/core';
import {User} from '../../_models/user';
import {Admin} from '../../_models/admin';
import {StorageService} from './storage.service';
import {UserService} from './user/user.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseUser} from '../../_models/base-user';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // users: User[];
  // admins: Admin[];
  loginMessage = '';

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private http: HttpClient
  ) {
    // this.userService.getUsers().subscribe(data => this.users = data);
    // this.admins = this.userService.getAdmins();
  }

  // public createUser(user: User): any {
  //   this.users.push(user);
  //   this.storageService.setUsers(this.users);
  // }
  //
  // public createAdmin(user: Admin): any {
  //   this.admins.push(user);
  //   this.storageService.setAdmins(this.admins);
  // }

  /*****  API *****/

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(baseUser: BaseUser): Observable<any> {
    return this.http.post(AUTH_API + 'signup', baseUser, httpOptions);
  }
}
