import {Auth, signInWithCredential, signOut} from '@angular/fire/auth';
import {updateProfile, GoogleAuthProvider, PhoneAuthProvider, User} from 'firebase/auth';
import {FirebaseAuthentication} from '@capacitor-firebase/authentication';
import {Capacitor} from '@capacitor/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import firebase from 'firebase/compat';
import Unsubscribe = firebase.Unsubscribe;
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<null | User> = new BehaviorSubject<User | null>(undefined);
  #authUnsubscribe: Unsubscribe;

  #verificationId: string;
  constructor(public auth: Auth, public router: Router) {
    this.#authUnsubscribe = this.auth.onAuthStateChanged(user => this.setCurrentUser(user));
  }
  async signInWithGoogle(): Promise<void> {
    const {credential: {idToken}} =
                await FirebaseAuthentication.signInWithGoogle();

    if(Capacitor.isNativePlatform()) {
        const credential = GoogleAuthProvider.credential(idToken);
        await signInWithCredential(this.auth, credential);
    }
  }

  async sendPhoneVerificationCode(phoneNumber: string): Promise<void> {
    const {verificationId} = await FirebaseAuthentication.signInWithPhoneNumber({phoneNumber});
    this.#verificationId = verificationId;
  }

  async signInWithPhoneNumber(verificationCode: string): Promise<void> {
    const credential =
      PhoneAuthProvider.credential(this.#verificationId, verificationCode);
    await signInWithCredential(this.auth,credential);
  }

  async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();

    if(Capacitor.isNativePlatform()) {
      await signOut(this.auth);
    }
  }
  private async setCurrentUser(user: User): Promise<void> {
    this.currentUser.next(user);
    if(this.currentUser) {
      await this.router.navigate(['/']);
    } else {
      await this.router.navigate(['/login']);
    }
  }
}
