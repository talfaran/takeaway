import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  print(err) {
      localStorage.setItem('error', JSON.stringify(err));
      console.log(`${err}, on: ${Date.now()}`);

  }
}
