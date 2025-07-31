// src/firebase/firebaseFirestore.js
import { db } from './firebaseConfig'; // Importa solo la instancia de db
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc, // Para obtener referencia a un documento específico
  query, // Para construir consultas
  where, // Para filtros en consultas
  orderBy, // Para ordenar resultados
  limit // Para limitar resultados
} from 'firebase/firestore';

/**
 * Añade un nuevo documento a una colección.
 * @param {string} collectionName - Nombre de la colección (ej. 'productos', 'usuarios')
 * @param {object} data - Datos del documento a añadir
 * @returns {Promise<string>} - ID del documento creado
 */
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date() // Añade una marca de tiempo por defecto
    });
    console.log(`Documento añadido a ${collectionName} con ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error(`Error al añadir documento a ${collectionName}:`, error);
    throw error; // Propaga el error para que el componente lo maneje
  }
};

/**
 * Obtiene todos los documentos de una colección.
 * @param {string} collectionName - Nombre de la colección
 * @returns {Promise<Array<object>>} - Array de documentos con sus IDs
 */
export const getCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (error) {
    console.error(`Error al obtener documentos de ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Obtiene un documento específico por su ID.
 * @param {string} collectionName - Nombre de la colección
 * @param {string} documentId - ID del documento
 * @returns {Promise<object|null>} - El documento o null si no existe
 */
export const getDocumentById = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log(`No existe el documento con ID ${documentId} en ${collectionName}`);
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener documento ${documentId} de ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Actualiza un documento específico.
 * @param {string} collectionName - Nombre de la colección
 * @param {string} documentId - ID del documento a actualizar
 * @param {object} newData - Nuevos datos a aplicar
 * @returns {Promise<void>}
 */
export const updateDocumentById = async (collectionName, documentId, newData) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, {
      ...newData,
      updatedAt: new Date() // Añade una marca de tiempo de actualización
    });
    console.log(`Documento ${documentId} actualizado en ${collectionName}`);
  } catch (error) {
    console.error(`Error al actualizar documento ${documentId} en ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Elimina un documento específico.
 * @param {string} collectionName - Nombre de la colección
 * @param {string} documentId - ID del documento a eliminar
 * @returns {Promise<void>}
 */
export const deleteDocumentById = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    console.log(`Documento ${documentId} eliminado de ${collectionName}`);
  } catch (error) {
    console.error(`Error al eliminar documento ${documentId} de ${collectionName}:`, error);
    throw error;
  }
};

// Puedes añadir funciones más avanzadas para consultas (queries)
/**
 * Realiza una consulta personalizada en una colección.
 * @param {string} collectionName - Nombre de la colección
 * @param {Array<object>} conditions - Array de objetos { field, operator, value } para `where`
 * @param {Array<object>} orderBys - Array de objetos { field, direction } para `orderBy`
 * @param {number} limitNum - Número máximo de resultados
 * @returns {Promise<Array<object>>} - Array de documentos
 */
export const getDocumentsByQuery = async (
  collectionName,
  conditions = [],
  orderBys = [],
  limitNum = null
) => {
  try {
    let q = query(collection(db, collectionName));

    conditions.forEach(cond => {
      q = query(q, where(cond.field, cond.operator, cond.value));
    });

    orderBys.forEach(ord => {
      q = query(q, orderBy(ord.field, ord.direction));
    });

    if (limitNum) {
      q = query(q, limit(limitNum));
    }

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return data;
  } catch (error) {
    console.error(`Error al ejecutar consulta en ${collectionName}:`, error);
    throw error;
  }
};