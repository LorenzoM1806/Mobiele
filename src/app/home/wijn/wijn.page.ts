import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Wijn} from '../../../types/Wijn';
import {CartService} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-wijn',
  templateUrl: './wijn.page.html',
  styleUrls: ['./wijn.page.scss'],
})
export class WijnPage implements OnInit {

  naam = 'Wijn';
  messagesObservable: Observable<Wijn[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController) {
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

