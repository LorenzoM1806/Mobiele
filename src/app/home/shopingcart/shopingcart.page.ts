import { Component, OnInit } from '@angular/core';
import {CartService, Product} from '../../services/shoppingcart.service';
import {ModalController} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.page.html',
  styleUrls: ['./shopingcart.page.scss'],
})
export class ShopingcartPage implements OnInit {

  cart: Product[] = [];
  message: string;
  private cartItemCount = this.cartService.getCartItemCount();

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    public authService: AuthService,
    public route: Router
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

  checkout() {

    if(this.cartItemCount.getValue() === 0)
    {
      this.message = 'Er is niets om uit te checken!';
    }
    else
    {
      this.message = 'Bedankt voor de aankoop\nUw offerte zal verwerkt worden binnen de 3 werkdagen.'+
      '\n U zal hier ook een bevestiginsmail van krijgen.';
    }

    this.cartService.clearCart();

    setTimeout(() => {
      this.route.navigate(['/home']); // Replace 'shopping-cart' with your actual route
    }, 5000);
  }

}
