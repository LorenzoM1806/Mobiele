import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Account} from '../../../types/Account';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  naam: 'Account';
  messagesObservable: Observable<Account[]> = from([]);

  constructor(private dbService: DatabaseService) {
    this.messagesObservable = dbService.retrieveAccount(this.naam);
  }

  ngOnInit() {
  }

}
