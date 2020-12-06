import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.scss'],
})
export class DefaultViewComponent implements OnInit {
  title = 'angular';

  constructor() {}

  ngOnInit(): void {}
}
