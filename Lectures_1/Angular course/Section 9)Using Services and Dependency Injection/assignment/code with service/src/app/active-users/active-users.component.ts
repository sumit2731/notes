import { Component, EventEmitter, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private accountService: AccountsService){}
  ngOnInit()
  {
    this.users = this.accountService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.accountService.onSetToInactive(id);
  }
}
