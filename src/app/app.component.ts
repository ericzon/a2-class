import { Component, OnInit } from '@angular/core';
import  { User } from './modules/user/models/user.interface';
import { UserService } from './modules/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works Eric!!';
  allUsers: User[];
  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    this.users = this.allUsers;
  }

  searchUser(value: string) {
    console.log("Recibido! searchUser: ",value);
    this.users = this.allUsers.filter((user) => {
      return user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
