import { Component } from '@angular/core';
import { DataTransferService } from './app-service/data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.getValue()
  }
}
