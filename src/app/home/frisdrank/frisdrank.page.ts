import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Frisdrank} from '../../../types/Frisdrank';

@Component({
  selector: 'app-frisdrank',
  templateUrl: './frisdrank.page.html',
  styleUrls: ['./frisdrank.page.scss'],
})
export class FrisdrankPage implements OnInit {

  naam = 'Frisdrank';
  messagesObservable: Observable<Frisdrank[]> = from([]);

  constructor(private dbService: DatabaseService ) {
    this.messagesObservable = dbService.retrieveFrisdrank(this.naam);
  }
  ngOnInit() {
  }

}
