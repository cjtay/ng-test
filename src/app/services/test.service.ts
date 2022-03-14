import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}

  handleService() {
    console.log('dependent service triggered with provider');
  }
}
