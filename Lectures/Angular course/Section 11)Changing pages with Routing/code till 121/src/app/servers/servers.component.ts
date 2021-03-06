import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()
  // tslint:disable-next-line:one-line
  {
    this.servers = this.serversService.getServers();
  }
onReload2()
// tslint:disable-next-line:one-line
{
  this.router.navigate(['servers'], {relativeTo: this.route});
}


}
