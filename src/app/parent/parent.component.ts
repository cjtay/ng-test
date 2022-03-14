import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentData: string = 'abc';
  item: string = '';

  constructor() {}

  ngOnInit(): void {}

  methodParent(e: string) {
    this.item = e;
    console.log('data received from child', this.item);
  }
}
