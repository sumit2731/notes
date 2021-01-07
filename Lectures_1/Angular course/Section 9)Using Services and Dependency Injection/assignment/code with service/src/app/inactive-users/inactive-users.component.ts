import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private accountsService: AccountsService ){}
  ngOnInit()
  {
    this.users = this.accountsService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.accountsService.onSetToActive(id);
  }
}
