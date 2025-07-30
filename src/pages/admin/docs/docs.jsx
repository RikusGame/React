import { useState, useCallback } from "react";
import {
  Typography, Paper, Stack
} from "@mui/material";
import { Tabla2 }        from "../../../shared/components/tablas/tabla";
import { Columns }       from "./data/Columns";
import { useFormularios } from "../../../data/firebase/useFormularios";

import EditIcon          from "@mui/icons-material/Edit";
import DeleteIcon        from "@mui/icons-material/Delete";
import IconActionButton  from "../../../shared/components/botones/Botones";
import DocumentoModal    from "./components/modalCrearDocs/DocumentoModal";
import { guardarDocumento, eliminarDocumento } from "../../../data/firebase/documentosService";
import ModalEditDocs from "./components/modalEditDocs/ModalEditDocs";

const Documentos = () => {
  /* ── estado del modal ───────────── */
  const { rows, loading, setRows } = useFormularios();
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpen  = () => setOpenCreate(true);
  const handleClose = () => setOpenCreate(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [docSeleccionado, setDocSeleccionado] = useState(null);
  const handleSave = async (nuevoDoc) => {
    try {
      console.log("📝 Documento a guardar:", nuevoDoc);
      const idFirebase = await guardarDocumento(nuevoDoc);
      console.log("✅ Guardado en Firebase correctamente");

      const nuevoRow = {
        id: idFirebase,
        firebaseId: idFirebase,
        numero: rows.length + 1,     // 👀 ID visible
        ...nuevoDoc,
        titulo: nuevoDoc.screenTitle,
        estado: "Pendiente",
      };

      setRows((prev) => [...prev, nuevoRow]); // 👈 actualizar manualmente
      handleClose();
    } catch (err) {
      console.error("❌ Error al guardar documento:", err);
    }
  };

  /* ── botones de acción por fila ─── */
  const renderAcciones = useCallback(({ row }) => (
    <Stack direction="row" spacing={1}>
      <IconActionButton
        icon={<EditIcon fontSize="small" />}
        color="primary"
        onClick={() => {
          console.log("✏️ Editando:", row); // Asegurate que ves todos los datos
          setDocSeleccionado(row);
          setOpenEdit(true);
        }}
      />
      <IconActionButton
        icon={<DeleteIcon fontSize="small" />}
        color="error"
        onClick={async () => {
          const confirm = window.confirm(`¿Eliminar "${row.titulo}"?`);
          if (!confirm) return;

          try {
            await eliminarDocumento(row.firebaseId); // ⬅️ ID generado por vos
            setRows((prev) => prev.filter((item) => item.firebaseId !== row.firebaseId));
          } catch (err) {
            console.error("❌ Error al eliminar:", err);
          }
        }}
      />
    </Stack>
  ), []);

  const columns = Columns(renderAcciones);

  /* ── UI ─────────────────────────── */
  return (
    <>
      <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
          mx: "auto",
          maxWidth: 1200,
          border: "0.1px solid rgba(146,144,144,.6)"
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Documentos
        </Typography>
        <Typography color="text.secondary" mb={2}>
          Aquí puedes gestionar los documentos: ver, crear, editar o eliminar.
        </Typography>

        <Tabla2
          rows={rows}
          columns={columns}
          height="51vh"
          pageSize={6}
          loading={loading}
          showButton
          buttonLabel="Crear documento"
          onButtonClick={handleOpen}
        />
      </Paper>

      {/* Modal separado y reutilizable */}
      <DocumentoModal
        open={openCreate}
        onClose={handleClose}
        onSave={handleSave}
      />
      <ModalEditDocs
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        documento={docSeleccionado}
      />
    </>
  );
};

export default Documentos;
