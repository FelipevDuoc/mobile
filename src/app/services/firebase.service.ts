import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  DocumentSnapshot,
  collectionData,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { AddUpdateAssistComponent } from '../shared/components/add-update-assist/add-update-assist.component';
import { asignatura } from '../models/asignaturas.models';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);

  // Autenticar \\

  getAuth() {
    return getAuth();
  }

  // Iniciar sesión
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // Cerrar Sesión
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }

  // Registrarse
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // Actualizar perfil de usuario
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  // Enviar correo electrónico para restablecer contraseña
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  // Obtener el tipo de usuario desde Firestore
  getUserTipoUsuario(uid: string): Observable<string> {
    const userDocRef = doc(getFirestore(), `users/${uid}`);
    return new Observable<string>((observer) => {
      getDoc(userDocRef)
        .then((docSnapshot: DocumentSnapshot<any>) => {
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            observer.next(userData.tipoUsuario);
          } else {
            observer.next('unknown');
          }
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  // Base de datos \\

  // Setear un Documento
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  // Obtener un documento
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  // asistencia
  addAsistencia(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  // Actualizar un Documento
  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  // Mostrar Asignaturas
  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery), { idField: 'id' });
  }
  // x
  getAsistencia(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(ref, collectionQuery);
  }
}
