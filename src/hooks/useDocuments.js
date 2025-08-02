import { useEffect, useRef, useState } from "react";
import { useDocumentRepo } from "../context/DocumentRepoProvider";

export const useDocuments = () => {
  const repo = useDocumentRepo();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔢 Contadores
  const readCount = useRef(0);
  const writeCount = useRef(0);
  const deleteCount = useRef(0);

  /* ── Cargar una sola vez ─────────────────────────── */
  useEffect(() => {
    repo
      .getAll()
      .then((data) => {
        readCount.current += data.length; // cuenta cada documento leído
        console.log("📖 Lecturas acumuladas:", readCount.current);
        setRows(data);
      })
      .finally(() => setLoading(false));
  }, [repo]);

  /* ── Monitorear cambios de filas ──────────────────── */
  useEffect(() => {
    const counts = {};
    rows.forEach((row) => {
      counts[row.id] = (counts[row.id] || 0) + 1;
    });

    console.log("🖥️ Conteo actual de renderizado de filas:", counts);
  }, [rows]);

  /* ── CREATE ──────────────────────────────────────── */
  const create = async (data) => {
    const id = await repo.create({
      ...data,
      activo: true, // ✅ Forzar valor por defecto
    });

    writeCount.current += 1;
    console.log("✍️ Escrituras acumuladas:", writeCount.current);

    setRows((prev) => {
      const newRows = [
        ...prev,
        {
          id,
          firebaseId: id,
          titulo: data.screenTitle || data.titulo || "Sin título",
          activo: true, // ✅ Reflejarlo también en estado local
          ...data,
        },
      ];

      return newRows.map((r, idx) => ({ ...r, numero: idx + 1 }));
    });

    return id;
  };

  /* ── UPDATE ──────────────────────────────────────── */
  const update = async (id, data) => {
    await repo.update(id, data);
    writeCount.current += 1;
    console.log("✍️ Escrituras acumuladas:", writeCount.current);

    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              ...data,
              titulo: data.screenTitle ?? r.titulo,
            }
          : r
      )
    );
  };

  /* ── TOGGLE “activo” (optimista) ─────────────────── */
  const toggleActivo = async (id, nuevoValor) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, activo: nuevoValor } : r
      )
    );

    try {
      await repo.update(id, { activo: nuevoValor });
      writeCount.current += 1;
      console.log("✍️ Escrituras acumuladas:", writeCount.current);
    } catch (e) {
      setRows((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, activo: !nuevoValor } : r
        )
      );
      throw e;
    }
  };

  /* ── REMOVE ──────────────────────────────────────── */
  const remove = async (id) => {
    await repo.remove(id);
    deleteCount.current += 1;
    console.log("🗑️ Eliminaciones acumuladas:", deleteCount.current);

    setRows((prev) =>
      prev
        .filter((r) => r.id !== id)
        .map((r, idx) => ({ ...r, numero: idx + 1 }))
    );
  };

  return { rows, loading, create, update, remove, toggleActivo };
};
