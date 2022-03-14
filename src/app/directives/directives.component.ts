import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  providers: [TestService],
})
export class DirectivesComponent implements OnInit {
  toDisplay = false;
  info = 'Dummy content';
  posts = [
    { id: 'a1', name: 'apple' },
    { id: 'a2', name: 'orange' },
    { id: 'a3', name: 'pear' },
  ];

  constructor(private testService: TestService) {}

  ngOnInit(): void {}

  onChange() {
    this.toDisplay = !this.toDisplay;
    this.testService.handleService();
  }
}
