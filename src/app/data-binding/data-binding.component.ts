import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  parentData = 'this is a data from parent';
  parentObject = { name: 'abc123', id: 'id 1' };

  constructor() {}

  ngOnInit(): void {}
}
