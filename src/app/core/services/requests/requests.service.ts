import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { PostI, Products } from '../../interfaces/data';
import { FileIma } from '../../interfaces/file-ima';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public products: Observable<Products[]>
  private productsCollection: AngularFirestoreCollection<Products>
  constructor(
    private storage: AngularFireStorage,
    private httpClient: HttpClient,
    private afs: AngularFirestore
  ) {
  }

  public getCollection(nameCollection) {
    // this.productsCollection = this.afs.collection<Products>(nameCollection);
    return this.afs.collection<Products>(nameCollection);
  }

  public saveData(product: Products, idProduct: string, collection: AngularFirestoreCollection): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const ID = idProduct || this.afs.createId();
        const data = { ID, ...product };
        const result = collection.doc(idProduct).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    })
  }

  public getData(collection: AngularFirestoreCollection): Observable<any[]> {
    return collection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Products))
    )
  }

  public deleteData(idProduct: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.productsCollection.doc(idProduct).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    })
  }

  // public getAllPosts(): Observable<PostI[]> {
  //   // return this.db.collection('posts').snapshotChanges().pipe(
  //   //   map(actions => {
  //   //     actions.map(a => {
  //   //       const data = a.payload.doc.data() as PostI[];
  //   //       const id = a.payload.doc.id;
  //   //       return { id, ...data }
  //   //     })
  //   //   })
  //   // )
  // }

  // getAll(collection: string): Observable<firebase.firestore.QuerySnapshot> {
  //   return this.db.collection<Pets>(collection, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
  // }

  // public saveAll(products: Products, collection: string): Promise<any> {
  //   return this.afs.collection(collection).add(products);
  // }

  // public uploadImage(products: Products, image: FileIma, collect: string) {
  //   const id = Math.random().toString(36).substring(2); // generar id random para la imagen
  //   let filePath = `images/producto_${id}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, image);
  //   task.snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef.getDownloadURL().subscribe(imageUrl => {
  //         products.image = imageUrl;
  //         this.saveAll(products, collect);
  //       });
  //     })
  //   ).subscribe();
  // }
}
