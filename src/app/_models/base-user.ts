export class BaseUser {
  _id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this._id = 0,
      this.firstName = '',
      this.lastName = '',
      this.username = '',
      this.email = '',
      this.password = '',
      this.role = '';
  }
}
