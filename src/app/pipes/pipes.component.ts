import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  title: string = 'learning angular';
  currentDate = new Date();
  utcDate = '2022-01-03T16:23:45.000Z';
  utcDate2 = '2022-01-06T12:12:22.000Z';
  amount = 239.51;

  constructor() {}

  ngOnInit(): void {}
}
