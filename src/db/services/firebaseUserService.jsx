import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase'; // Corrección de la ruta
// ...existing code...// asegúrate que el archivo sea `firebase.js`
import AbstractUserService from './userServiceInterface'; // Asegúrate de que la ruta sea correcta

const usersCollection = collection(db, 'users');

export default class FirebaseUserService extends AbstractUserService {
  async fetchAll() {
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async create(user) {
    const docRef = await addDoc(usersCollection, user);
    return { id: docRef.id, ...user };
  }

  async delete(userId) {
    await deleteDoc(doc(db, 'users', userId));
  }
}
