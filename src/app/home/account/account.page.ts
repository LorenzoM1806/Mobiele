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

  adress: string;
  city: string;
  name: string;
  postcode: string;
  prename: string;
  phone: string;
  emailCreate: string;
  id: string;
  disable = true;

  constructor(private dbService: DatabaseService, public authservice: AuthService) {
    if(this.authservice.getEmail() === undefined)
    {
      this.messagesObservable = dbService.retrieveAccountWithPhone(this.naam);
    }
    else
    {
      this.messagesObservable = dbService.retrieveAccountWithEmail(this.naam);
    }
    this.email = authservice.getEmail();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.dbService.createAccount(this.naam,this.adress,this.city,this.name,this.email,this.postcode,this.prename,this.phone);
    this.modal.dismiss(null, 'confirm');
  }

  delete(id: string) {
    //this.dbService.deleteAccount(this.naam,id);
    console.log(id);
  }

  update() {
  }

  ngOnInit() {
  }

}
