import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {Frisdrank} from '../../../types/Frisdrank';
import {CartService} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-frisdrank',
  templateUrl: './frisdrank.page.html',
  styleUrls: ['./frisdrank.page.scss'],
})
export class FrisdrankPage implements OnInit {

  naam = 'Frisdrank';
  messagesObservable: Observable<Frisdrank[]> = from([]);
  cart = [];
  cartItemClount: BehaviorSubject<number>;

  @ViewChild('cart', {static:false, read: ElementRef})fab: ElementRef;

  constructor(private dbService: DatabaseService, private cartService: CartService, private modalCtrl: ModalController ) {
    this.messagesObservable = dbService.retrieveFrisdrank(this.naam);
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
