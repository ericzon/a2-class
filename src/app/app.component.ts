import { Component } from '@angular/core';
import  { User } from './modules/user/models/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works Eric!!';
  users: User[];

  searchUser(value: string) {
    console.log("Recibido! searchUser: ",value);
  }
}
