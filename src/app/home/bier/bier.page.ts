import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Bier} from '../../../types/bier';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.page.html',
  styleUrls: ['./bier.page.scss'],
})
export class BierPage implements OnInit {

  naam = 'bier';
  messagesObservable: Observable<Bier[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveBieren(this.naam);
  }

  ngOnInit() {
  }

}


