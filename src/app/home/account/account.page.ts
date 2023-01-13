import {Component, OnInit, ViewChild} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Account} from '../../../types/Account';
import {DatabaseService} from '../../services/database.service';
import {IonModal} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {AuthService} from "../../services/auth.service";

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

  constructor(private dbService: DatabaseService) {
    this.messagesObservable = dbService.retrieveAccountWithEmail(this.naam);
    //this.messagesObservable = dbService.retrieveAccountWithPhonenumber(this.naam);
  }
  cancel() {
    this.modal.dismiss(null,'cancel');
  }
  confirm() {
    this.modal.dismiss(this.email, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      if(this.email === undefined)
      {
        this.message = 'Kan account niet vinden';
      }
      else
      {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    }
  }



  ngOnInit() {
  }

}
