import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  // providers: [TestService],
})
export class ContentComponent implements OnInit {
  info1 = 'content from property';
  info2 = 'content from method';
  info3 = false;
  info4 = '';
  info5 = 'existing info'; // for 2-way binding

  constructor(private testService: TestService) {}

  ngOnInit(): void {}

  getInfo() {
    return this.info2;
  }

  changeInfo() {
    this.info3 = !this.info3;
  }

  enterInfo(e: Event) {
    this.info4 = (<HTMLInputElement>e.target).value;
  }
  // *** alternative syntax ***
  // enterInfo(e: any) {
  //   this.info4 = e.target.value;
  //   console.log('event: ', e);
  // }

  enterInfo2(e: Event) {
    this.info5 = (<HTMLInputElement>e.target).value;
  }

  consoleInfo() {
    console.log([this.info4, this.info5]);
    console.log('********************');
    this.testService.handleService();
  }
}
