import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Bier} from '../../../types/bier';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {CartService, Product} from '../../services/shoppingcart.service';
import {IonMenu, ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.page.html',
  styleUrls: ['./bier.page.scss'],
})
export class BierPage implements OnInit {

  naam = 'bier';
  messagesObservable: Observable<Bier[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController,
    public authService: AuthService) {
    this.messagesObservable = dbService.retrieveBieren(this.naam);
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemClount = this.cartService.getCartItemCount();
  }

  addToCart(b) {
    console.log(`add ${b.name} to cart`);
    this.cartService.addProduct(b);
  }

}


