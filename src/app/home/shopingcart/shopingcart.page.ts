import { Component, OnInit } from '@angular/core';
import {CartService, Product} from "../../services/shoppingcart.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.page.html',
  styleUrls: ['./shopingcart.page.scss'],
})
export class ShopingcartPage implements OnInit {

  cart: Product[] = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  decreaseCartItem(product: Product): void {
    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product: Product): void {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  getTotal(): number {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

  checkout() {}

}
