import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Wijn} from '../../../types/Wijn';

@Component({
  selector: 'app-wijn',
  templateUrl: './wijn.page.html',
  styleUrls: ['./wijn.page.scss'],
})
export class WijnPage implements OnInit {

  naam = 'Wijn';
  messagesObservable: Observable<Wijn[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveWater(this.naam);
  }

  ngOnInit() {
  }

}
