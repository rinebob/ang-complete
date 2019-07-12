import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: []
})
export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
	  console.log("t.sS: ",this.serverStatus);
    return this.serverStatus;
  }

  getColor() {
	  return this.serverStatus === 'online' ? 'green' : 'red';
  }
}