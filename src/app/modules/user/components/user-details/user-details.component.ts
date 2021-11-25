import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IUser } from '../../interfaces';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['id']).subscribe(value => this.user = value);
    })
  }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }

}
