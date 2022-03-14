import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Test2Service } from './services/test2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-test';

  constructor(public service: TestService, public service2: Test2Service) {
    service.handleService();
    service2.handleService2();
  }
}
