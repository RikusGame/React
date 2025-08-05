// src/services/useRows.js   (o src/hooks/useRows.js, como prefieras)
import { useEffect, useState } from "react";
import { Rows as mockRows } from "../pages/admin/banner/data/Rows";  // ← tus datos locales
// Descomenta estas líneas cuando tengas Firebase configurado:
// import { db } from "../firebase";      // tu instancia
// import { collection, onSnapshot } from "firebase/firestore";

/**
 * @param {boolean} useMock  true = mock local, false = Firestore
 */
export function useRows(useMock) {
  const [rows, setRows]     = useState([]);
  const [loading, setLoad]  = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    let unsub;

    // ───────── 1. Datos locales  ─────────
    if (useMock) {
      setRows(mockRows);
      setLoad(false);
      return;
    }

    // ───────── 2. Firestore (solo si lo activas) ─────────
    /*
    unsub = onSnapshot(
      collection(db, "banners"),
      (snap) => {
        const data = snap.docs.map((d) => ({
          id: d.id,
          imagen: d.data().url,
          posicion: d.data().posicion,
          estado: d.data().activo,
        }));
        setRows(data);
        setLoad(false);
      },
      (e) => { setError(e); setLoad(false); }
    );
    */

    return () => unsub?.();   // limpia listener cuando exista
  }, [useMock]);

  return { rows, setRows, loading, error };
}
