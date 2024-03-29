import {
  collection,
  CollectionReference,
  Firestore,
  doc,
  DocumentReference,
  collectionData,
  query,
  where, addDoc, deleteDoc, updateDoc
} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {Bier} from '../../types/bier';
import {Cava} from '../../types/Cava';
import {Frisdrank} from '../../types/Frisdrank';
import {Fruitsap} from '../../types/Fruitsap';
import {Water} from '../../types/Water';
import {Wijn} from '../../types/Wijn';
import {Account} from '../../types/Account';
import { AccountCreate } from 'src/types/AccountCreate';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private authService: AuthService, private firestore: Firestore) {
  }

  #getCollectionRef<T>(collectionName: string): CollectionReference<T> {
    return collection(this.firestore, collectionName) as CollectionReference<T>;
  }

  #getDocumentRef<T>(collectionName: string, id: string): DocumentReference<T> {
    return doc(this.firestore, `${collectionName}/${id}`) as DocumentReference<T>;
  }

  retrieveBieren(types: string): Observable<Bier[]> {
    return collectionData<Bier>(
      query<Bier>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveCava(types: string): Observable<Cava[]> {
    return collectionData<Cava>(
      query<Cava>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveFrisdrank(types: string): Observable<Frisdrank[]> {
    return collectionData<Frisdrank>(
      query<Frisdrank>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveFruitsappen(types: string): Observable<Fruitsap[]> {
    return collectionData<Fruitsap>(
      query<Fruitsap>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveWater(types: string): Observable<Water[]> {
    return collectionData<Water>(
      query<Water>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveWijn(types: string): Observable<Wijn[]> {
    return collectionData<Wijn>(
      query<Wijn>(
        this.#getCollectionRef(types)
      ),
      {idField: 'id'}
    );
  }

  retrieveAccount(account: string): Observable<Account[]> {
    return collectionData<Account>(
      query<Account>(
        this.#getCollectionRef(account)
      ),
      {idField: 'id'}
    );
  }

  retrieveAccountWithEmail(accountmail: string): Observable<Account[]> {
    return collectionData<Account>(
      query<Account>(
        this.#getCollectionRef(accountmail),
        where('email', '==', this.authService.getEmail())
      ),
      {idField: 'id'}
    );
}

retrieveAccountWithPhone(accountphone: string): Observable<Account[]> {
  return collectionData<Account>(
    query<Account>(
      this.#getCollectionRef(accountphone),
      where('phone', '==', this.authService.getPhone())
    ),
    {idField: 'id'}
  );
}
async createAccount(idnaam: string,adress: string,
  city: string, name: string, email: string, postcode: string, prename: string, phone: string): Promise<void> {
    const newAccount = {
      adress,
      city,
      email,
      name,
      postcode,
      prename,
      phone
    };
    await addDoc<AccountCreate>(
      this.#getCollectionRef<AccountCreate>(idnaam),
      newAccount
    );
}

async deleteAccount(idnaam: string, id: string): Promise<void> {
  await deleteDoc(this.#getDocumentRef(idnaam,id));
}

async updateAccount(idnaam: string, id: string, acnt: Account): Promise<void> {
  await updateDoc(this.#getDocumentRef(idnaam, id), acnt);
}

}
