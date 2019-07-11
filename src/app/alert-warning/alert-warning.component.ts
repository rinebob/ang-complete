import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  template: `
    <p>Yo dude WARNING Danger Will Robinson!!!</p>
  `,
  styles: [`
    p {
      color: yellow;
      background-color: red;
      border: 3px solid blue;
      padding: 20px;
    }
  `],
  // templateUrl: './alert-warning.component.html',
  // styleUrls: ['./alert-warning.component.css']
})
export class AlertWarningComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
