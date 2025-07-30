import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const useFormularios = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "formularios"));
        const datos = snapshot.docs.map((doc, index) => {
          const data = doc.data();
          return {
            id: doc.id,             // 🔒 obligatorio para que DataGrid funcione internamente
            numero: index + 1,      // 👀 número visible en la tabla
            firebaseId: doc.id,      // ← ID real de Firebase para editar/borrar
            ...data,
            titulo: data.screenTitle || "Sin título",
            estado: "Pendiente",
          };
        });
        setRows(datos);
      } catch (error) {
        console.error("❌ Error al cargar documentos:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  return { rows, loading, setRows };
};
