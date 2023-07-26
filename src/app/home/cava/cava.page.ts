import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Cava} from '../../../types/Cava';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {CartService} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cava',
  templateUrl: './cava.page.html',
  styleUrls: ['./cava.page.scss'],
})
export class CavaPage implements OnInit {

  naam = 'Cava';
  messagesObservable: Observable<Cava[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController,
    public authService: AuthService ) {
    this.messagesObservable = dbService.retrieveCava(this.naam);
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
