import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) {
    //
    this.activatedRoute.data.subscribe((data)=> this.userDetails = data['user'])
  }

  ngOnInit(): void {
  }

}
