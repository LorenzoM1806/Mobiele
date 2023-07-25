import {Component, OnInit, ViewChild} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Account} from '../../../types/Account';
import {DatabaseService} from '../../services/database.service';
import {AuthService} from '../../services/auth.service';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  naam = 'Account';
  messagesObservable: Observable<Account[]> = from([]);

  message = 'geen account gevonden';
  email: string;
  user: Observable<Account[]> = from([]);
  constructor(private dbService: DatabaseService, private authservice: AuthService) {
    this.messagesObservable = dbService.retrieveAccountWithEmail(this.naam);
    this.email = authservice.getEmail();
    //this.messagesObservable = dbService.retrieveAccountWithPhonenumber(this.naam);
  }

  ngOnInit() {
  }

}
