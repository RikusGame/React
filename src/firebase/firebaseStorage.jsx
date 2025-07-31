// src/firebase/firebaseStorage.js
import { storage } from './firebaseConfig'; // Importa solo la instancia de storage
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

/**
 * Sube un archivo a Firebase Storage.
 * @param {File} file - El objeto File a subir.
 * @param {string} path - La ruta dentro de Storage (ej. 'productos/', 'usuarios/avatars/').
 * @returns {Promise<string>} - La URL de descarga del archivo subido.
 */
export const uploadFile = async (file, path) => {
  try {
    if (!file) {
      throw new Error("No se proporcionó ningún archivo para subir.");
    }
    const storageRef = ref(storage, `${path}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(`Archivo subido a ${path}. URL:`, downloadURL);
    return downloadURL;
  } catch (error) {
    console.error(`Error al subir archivo a ${path}:`, error);
    throw error;
  }
};

/**
 * Elimina un archivo de Firebase Storage.
 * @param {string} fileUrl - La URL de descarga del archivo a eliminar.
 * @returns {Promise<void>}
 */
export const deleteFile = async (fileUrl) => {
  try {
    // Firebase Storage URLs tienen un formato específico, necesitamos la ruta real.
    // Ejemplo: https://firebasestorage.googleapis.com/v0/b/YOUR_BUCKET/o/path%2Fto%2Ffile.jpg?alt=media...
    // Necesitamos extraer 'path/to/file.jpg'
    const decodedUrl = decodeURIComponent(fileUrl.split('/o/')[1].split('?')[0]);
    const fileRef = ref(storage, decodedUrl);
    await deleteObject(fileRef);
    console.log(`Archivo eliminado de Storage: ${decodedUrl}`);
  } catch (error) {
    // Si el archivo no existe o ya fue eliminado, no arrojará un error crítico aquí.
    // Depende de cómo quieras manejarlo.
    console.warn(`Advertencia al eliminar archivo de Storage (puede que no exista):`, error);
    // throw error; // No necesariamente lanzar error si es un 404
  }
};