import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: [`
  //   h3 {
  //     color: darkblue;
  //   }
  // `],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-complete';
  name = 'Dude...';
  textShow = true;
  clicks = [];
  num = 0;
  color = 'white';


  toggleText() {
    this.textShow = !this.textShow;
    this.num ++;
    // this.clicks.push(this.num);
    this.clicks.push(new Date());
    // console.log("app.c.ts textShow: ",this.textShow," num: ",this.num);
  }

}
