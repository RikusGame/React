// src/context/DocumentRepoProvider.jsx

// Define que tegnología usar para la Base de Datos - Firebase
// Puedes cambiar a otra tecnología modificando esta línea

import { createContext, useContext } from "react";
import { FirebaseDocumentRepository } from "../data/documents/firebaseRepository";

const repo = new FirebaseDocumentRepository();   // <-- Único punto donde eliges backend

export const DocumentRepoContext = createContext(repo);
export const useDocumentRepo = () => useContext(DocumentRepoContext);

export default function DocumentRepoProvider({ children }) {
  return (
    <DocumentRepoContext.Provider value={repo}>
      {children}
    </DocumentRepoContext.Provider>
  );
}
