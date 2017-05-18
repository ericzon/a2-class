import { Component, OnInit } from '@angular/core';
import  { User } from './modules/user/models/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works Eric!!';
  allUsers: User[];
  users: User[];
  
  ngOnInit() {
    this.allUsers = [{
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
    }];
    this.users = this.allUsers;
  }

  searchUser(value: string) {
    console.log("Recibido! searchUser: ",value);
    this.users = this.allUsers.filter((user) => {
      return user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
