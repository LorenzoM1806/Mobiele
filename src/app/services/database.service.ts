import {
  collection,
  CollectionReference,
  Firestore,
  doc,
  DocumentReference,
  collectionData,
  query
} from '@angular/fire/firestore';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {Bier} from '../../types/bier';

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

}
