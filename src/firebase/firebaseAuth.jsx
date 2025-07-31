// src/firebase/firebaseAuth.js
import { auth } from './firebaseConfig'; // Importa solo la instancia de auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail // Ejemplo
} from 'firebase/auth';

/**
 * Registra un nuevo usuario con email y contraseña.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} - Objeto de usuario de Firebase
 */
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

/**
 * Inicia sesión con email y contraseña.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} - Objeto de usuario de Firebase
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuario logueado:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

/**
 * Cierra la sesión del usuario actual.
 * @returns {Promise<void>}
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada.");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};

/**
 * Observa cambios en el estado de autenticación.
 * @param {function} callback - Función a ejecutar cuando el estado de autenticación cambia.
 * @returns {function} - Función para desuscribirse del observador.
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Puedes añadir más funciones como resetear contraseña, login con Google, etc.