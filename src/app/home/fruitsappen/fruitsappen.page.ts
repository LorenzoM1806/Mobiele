import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Fruitsap} from '../../../types/Fruitsap';

@Component({
  selector: 'app-fruitsappen',
  templateUrl: './fruitsappen.page.html',
  styleUrls: ['./fruitsappen.page.scss'],
})
export class FruitsappenPage implements OnInit {

  naam = 'Fruitsap';
  messagesObservable: Observable<Fruitsap[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveFruitsappen(this.naam);
  }

  ngOnInit() {
  }

}
