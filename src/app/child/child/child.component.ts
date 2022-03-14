import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() childProp: string = '';
  @Output() logging = new EventEmitter<string>();

  childData: string = '123';

  constructor() {}

  ngOnInit(): void {}
}
