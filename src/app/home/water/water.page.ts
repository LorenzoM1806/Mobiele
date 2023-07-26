import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Water} from '../../../types/Water';
import {CartService} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {

  naam = 'Water';
  messagesObservable: Observable<Water[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController,
    public authService: AuthService ) {
    this.messagesObservable = dbService.retrieveWater(this.naam);
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
