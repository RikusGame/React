// src/data/documents/firebaseRepository.js
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { DocumentRepository } from "./repository";

export class FirebaseDocumentRepository extends DocumentRepository {
  async getAll() {
    const snap = await getDocs(collection(db, "crear-documentos"));
    return snap.docs.map((d, i) => ({
      id: d.id,
      numero: i + 1,
      firebaseId: d.id,
      ...d.data(),
      titulo: d.data().screenTitle || "Sin título",
    }));
  }

  async create(data) {
    const customIdBase = data.screenTitle
      .toLowerCase().replaceAll(" ", "-").replaceAll(/[^\w\-]+/g, "");
    const id = `${customIdBase}-${Date.now().toString(36)}`;

    await setDoc(doc(db, "crear-documentos", id), { ...data, id, activo: true });
    return id;
  }

  update(id, data) { return updateDoc(doc(db, "crear-documentos", id), data); }
  remove(id)       { return deleteDoc(doc(db, "crear-documentos", id)); }
}
