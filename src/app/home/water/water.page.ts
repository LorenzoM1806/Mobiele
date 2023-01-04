import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Water} from '../../../types/Water';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {

  naam = 'Water';
  messagesObservable: Observable<Water[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveWater(this.naam);
  }

  ngOnInit() {
  }

}
