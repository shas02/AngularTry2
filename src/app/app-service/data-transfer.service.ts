import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  store: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }
}
