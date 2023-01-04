import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Cava} from '../../../types/Cava';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-cava',
  templateUrl: './cava.page.html',
  styleUrls: ['./cava.page.scss'],
})
export class CavaPage implements OnInit {

  naam = 'Cava';
  messagesObservable: Observable<Cava[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveCava(this.naam);
  }

  ngOnInit() {
  }

}
