import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test2Service {
  constructor() {}

  handleService2() {
    console.log('dependent service 2 triggered');
  }
}
