import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {enableMultiTabIndexedDbPersistence, getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            //firebase main support
            provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            //firebase autentication import
            provideAuth(() => getAuth()),
            //firestore database import
            provideFirestore(() => {
              const firestore = getFirestore();
              //enable offline persistence
              enableMultiTabIndexedDbPersistence(firestore);
              return firestore;
            }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
