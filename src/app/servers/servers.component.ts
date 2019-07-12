import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Stupid effing server dude...';
  serverCreated = false;
  servers = ["Test Server", "Server2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1500)
  }

  ngOnInit() {
  }

  onCreateServer() {
  this.serverCreated = true;
  this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
