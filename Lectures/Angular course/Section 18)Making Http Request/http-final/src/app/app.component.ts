import { ServerService } from './server.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave() {
    this.serverService.storeServers(this.servers)
    .subscribe((response: Response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  }
  onGet() {
    // this.serverService.getServers().subscribe(
    //   (response: Response) => {
    //     const data = response.json();
    //     console.log(data);
    //   },
    //  (error) => {
    //   console.log(error);
    //  });
    this.serverService.getServers().subscribe((servers) => {
      this.servers = servers;
    });
  }
}
