import { Component } from '@angular/core';
import { IUser } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: IUser;

  getUser(user: IUser) {
    this.user = user;
  }
}
