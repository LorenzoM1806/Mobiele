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
  public accountuser: string | undefined;
  #authUnsubscribe: Unsubscribe;

  #verificationId: string;
  constructor(public auth: Auth, public router: Router) {
    this.#authUnsubscribe = this.auth.onAuthStateChanged(user => this.setCurrentUser(user));
  }
  isLoggedIn(): boolean {
    return this.currentUser.value !== null && this.currentUser.value !== undefined;
  }
  getEmail(): string | undefined {
    return this.isLoggedIn() ? this.currentUser.value.email : undefined;
  }
  getPhone(): string | undefined {
    return this.isLoggedIn() , this.currentUser.value.phoneNumber;
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
  async signInWithFacebook(): Promise<void> {
    const {credential: {idToken}} = await FirebaseAuthentication.signInWithFacebook();
  }

  async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();

    if(Capacitor.isNativePlatform()) {
      await signOut(this.auth);
    }
  }
  private async setCurrentUser(user: User | null): Promise<void> {
    this.currentUser.next(user);
    if(!this.currentUser) {
      this.router.navigate(['/login']);
    } else {
      await this.router.navigate(['/home']);
    }
  }


}
