import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  @Output()
  emitter = new EventEmitter<IUser>()

  constructor() {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.emitter.emit(this.user)
  }

}
