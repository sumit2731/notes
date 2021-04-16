import { ServersService } from './../servers.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
interface Server {
  name: string;
  id: number;
  status: string;
}

@Injectable()
// export class ServerResolverService implements Resolve<{id: number , name: string, status: string}> {
export class ServerResolverService implements Resolve<Server>  {

  constructor(private serversService: ServersService) { }
  resolve (route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    console.log("In Resolver");
    return this.serversService.getServer(+route.params['id']);

  }

}
