import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class AccountsService 
{

  constructor(private counterService: CounterService) { }
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  onSetToActive(id:number)
  {
     this.activeUsers.push(this.inactiveUsers[id]);
     this.inactiveUsers.splice(id,1);
     this.counterService.toActive++;
     console.log("switches to Active "+this.counterService.toActive);
  }
  onSetToInactive(id: number)
  {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.toInActive++;
    console.log("Switches to Inactive "+this.counterService.toInActive);
  }


}
