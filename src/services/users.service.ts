import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAll(): any{
    return [{
      id: 0,
      name: 'toto',
      username: 'toto1',
      email: 'email'
    },
    {
      id: 1,
      name: 'tata',
      username: 'toto1',
      email: 'email'
    },
    {
      id: 2,
      name: 'titi',
      username: 'toto2',
      email: 'email'
    }]
  }
}
