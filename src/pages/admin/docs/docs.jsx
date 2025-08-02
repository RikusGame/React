import { useState, useCallback } from "react";
import {
  Typography, Paper, Stack
} from "@mui/material";
import { Tabla2 }        from "../../../shared/components/tablas/tabla";
import { Columns }       from "./data/Columns";

import EditIcon          from "@mui/icons-material/Edit";
import DeleteIcon        from "@mui/icons-material/Delete";
import IconActionButton  from "../../../shared/components/botones/Botones";
import DocumentoModal    from "./components/modalCrearDocs/DocumentoModal";
import ModalEditDocs from "./components/modalEditDocs/ModalEditDocs";
import { useDocuments } from "../../../hooks/useDocuments";

const Documentos = () => {
  /* ── estado del modal ───────────── */
  const { rows, loading, create, update, remove, toggleActivo } = useDocuments();
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpen  = () => setOpenCreate(true);
  const handleClose = () => setOpenCreate(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [docSeleccionado, setDocSeleccionado] = useState(null);
  const handleSave = async (nuevoDoc) => {
    try {
      await create({ ...nuevoDoc, titulo: nuevoDoc.screenTitle });
      handleClose();            // cierra el modal
    } catch (err) {
      console.error("❌ Error al guardar documento:", err);
    }
  };

  // ── Actualizar documento ────
  const handleUpdate = async (docEditado) => {
    try {
      await update(docEditado.id, docEditado);

      setOpenEdit(false);                 // cierra el modal
    } catch (e) {
      console.error("❌ Error al actualizar:", e);
    }
  };

  // dentro de Documentos
  const handleToggleActivo = (id, nuevoValor) => {
    toggleActivo(id, nuevoValor).catch((err) =>
      console.error("❌ Error al cambiar activo:", err)
    );
  };


  /* ── Cli en el Row ─── */
  const handleRowClick = useCallback((params) => {
    setDocSeleccionado(params.row);
    setOpenEdit(true);
  }, []);

  /* ── botones de acción por fila ─── */
  const renderAcciones = useCallback(({ row }) => (
    <Stack direction="row" spacing={1}>
      <IconActionButton
        icon={<EditIcon fontSize="small" />}
        color="primary"
        onClick={(e) => {
          console.log("✏️ Editando:", row); // Asegurate que ves todos los datos
          e.stopPropagation(); 
          setDocSeleccionado(row);
          setOpenEdit(true);
        }}
      />
      <IconActionButton
        icon={<DeleteIcon fontSize="small" />}
        color="error"
        onClick={async (e) => {
          e.stopPropagation();
          const confirm = window.confirm(`¿Eliminar "${row.titulo}"?`);
          if (!confirm) return;
            await remove(row.id);
          try {
            
          } catch (err) {
            console.error("❌ Error al eliminar:", err);
          }
        }}
      />
    </Stack>
  ), []);

  const columns = Columns(handleToggleActivo, renderAcciones);

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
          pageSize={10}
          loading={loading}
          showButton
          buttonLabel="Crear documento"
          onButtonClick={handleOpen}
          onRowClick={handleRowClick}
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
        onSave={handleUpdate}
      />
    </>
  );
};

export default Documentos;
