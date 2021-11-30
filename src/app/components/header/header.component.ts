import { Component, OnInit } from '@angular/core';
import { UserSubjectService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private subjectService: UserSubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.username.subscribe(value => this.username=value)
  }

}
