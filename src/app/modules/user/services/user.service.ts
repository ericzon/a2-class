import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {
  users: User[];
  
  constructor() { 
    this.users =  [{
      name: "Eric",
      id: 1,
      active: true
    }, {
      name: "Ivan",
      id: 2,
      active: true
    }, {
      name: "Joan",
      id: 3,
      active: true
    }, {
      name: "Camilo",
      id: 4,
      active: true
    }, {
      name: "Karla",
      id: 5,
      active: true
    }, {
      name: "Konstan",
      id: 6,
      active: true
    }, {
      name: "Haik",
      id: 7,
      active: true
    }];
   }

   getUsers() {
     return this.users;
   }

}
