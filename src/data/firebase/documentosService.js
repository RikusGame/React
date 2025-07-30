import { db } from "./firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

export const guardarDocumento = async (docData) => {
  try {
    const customIdBase = docData.screenTitle
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll(/[^\w\-]+/g, ""); // limpia caracteres raros

    const uniqueSuffix = Date.now().toString(36); // o usa un UUID si querés

    const customId = `${customIdBase}-${uniqueSuffix}`;

    const docRef = doc(db, "formularios", customId);
    await setDoc(docRef, {
      ...docData,
      id: customId, // opcional si querés guardar el ID dentro del objeto
    });

    console.log("📌 Documento guardado con ID personalizado:", customId);
    return customId;
  } catch (error) {
    console.error("❌ Error guardando documento:", error);
    throw error;
  }
};

export const eliminarDocumento = async (id) => {
  try {
    await deleteDoc(doc(db, "formularios", id)); // ⬅️ usa el mismo ID que generaste al guardar
    console.log("🗑️ Documento eliminado:", id);
  } catch (error) {
    console.error("❌ Error al eliminar documento:", error);
    throw error;
  }
};

