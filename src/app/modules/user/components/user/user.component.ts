import {Component, Input, OnInit} from '@angular/core';
import { DataTransferService } from 'src/app/app-service/data-transfer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: any;

  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  storeUser() {
let currentStore = this.dataTransfer.store.getValue();
currentStore.push(this.user);
this.dataTransfer.store.next(currentStore);
  }
}
