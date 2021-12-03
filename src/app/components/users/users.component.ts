import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];


  @Output()
  emitter = new EventEmitter<any>();

  select = new FormControl();

  usersForm = new FormGroup({
    select: this.select
  })

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(response => this.users = response)
  }

  showDetails(): void {
    let id = +this.usersForm.value.select
    this.emitter.emit(this.users[id-1])
  }


}
