import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  template: `
    <p>Hey yo dude - SUCCESS like cool right?</p>
  `,
  styles: [`
    p {
      color: yellow;
      background-color: green;
      border: 1px solid blue;
      padding: 20px;
    }
  `],
  // templateUrl: './alert-success.component.html',
  // styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
  message: 'Hey yo dude - SUCCESS like cool right?'

  constructor() { }

  ngOnInit() {
  }

}
