import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { UserSubjectService } from 'src/app/services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private subjectService:UserSubjectService) {
  }

  ngOnInit(): void {
  }

  login():void{
    this.subjectService.username.next(this.user.username)
  }

}
