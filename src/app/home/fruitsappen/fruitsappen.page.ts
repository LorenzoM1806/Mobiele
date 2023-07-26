import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Fruitsap} from '../../../types/Fruitsap';
import {CartService} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-fruitsappen',
  templateUrl: './fruitsappen.page.html',
  styleUrls: ['./fruitsappen.page.scss'],
})
export class FruitsappenPage implements OnInit {

  naam = 'Fruitsap';
  messagesObservable: Observable<Fruitsap[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController,
    public authService: AuthService ) {
    this.messagesObservable = dbService.retrieveFruitsappen(this.naam);
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
