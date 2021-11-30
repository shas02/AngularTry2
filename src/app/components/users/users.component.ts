import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { UserService } from 'src/app/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  @Output()
  emitter = new EventEmitter<IUser>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(user: IUser): void {
    this.emitter.emit(user)
  }

}
