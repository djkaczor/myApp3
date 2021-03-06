import { Injectable } from '@angular/core';
import { Kontakt } from '../interface/kontakt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Adres } from '../interface/adres';
import { map } from 'rxjs/operators';
import { AriaDescriber } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class KontaktyService {


  kontaktyCollection: AngularFirestoreCollection<Kontakt>;
  adresyCollection: AngularFirestoreCollection<Adres>;


  kontakty: Observable<Kontakt[]>;
  adres: Observable<Adres[]>;

// kontakt: Kontakt;


  constructor(public afs: AngularFirestore, public http: HttpClient) {
    //  this.kontakty = this.afs.collection('kontakty').valueChanges();

    this.kontaktyCollection = this.afs.collection('kontakty', ref => ref.orderBy('nrKlienta', 'asc'));


    this.kontakty = this.kontaktyCollection.snapshotChanges().pipe(
      map( zmiany => {
        return zmiany.map(a => {
          const data = a.payload.doc.data() as Kontakt;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  // url = 'http://localhost:3000/Kontakty';


  pobierzKontakty() {
    // return this.kontakty;
    // return this.http.get<Kontakt[]>(this.url);
    return this.kontakty;

  }

  pobierzAdres(id: string) {
    // this.adres = this.afs.collection('kontakty').doc(id).collection('adres').valueChanges();

    this.adres = this.kontaktyCollection.doc(id).collection('adres', ref => ref.orderBy('aid', 'asc')).snapshotChanges().pipe(
      map(zmiany => {
        return zmiany.map(a => {
          const data = a.payload.doc.data() as Adres;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

    return this.adres;

  }

  dodajKontakt(id: string, kontakt: Kontakt) {
    this.kontaktyCollection.doc(id).set(kontakt);
  }

  dodajAdres(id: string, adres: Adres) {
    this.afs.collection('kontakty/' + id + '/adres').add(adres);

  }

  skasujAdresy(id: string, adresID: string) {
    this.afs.collection('kontakty/').doc(id).collection('adres').doc(adresID).delete();
  }

  skasujKontakt(id: string) {
    this.afs.collection('kontakty').doc(id).delete();
  }

  edytujAdres(kid: string, aid: string, adres: Adres) {
    this.afs.collection('kontakty/').doc(kid).collection('adres').doc(aid).update(adres);
  }

  edytujKontaktImie(id: string, kontakt: Kontakt) {
    this.afs.collection('kontakty/').doc(id).update(kontakt);

  }
}
