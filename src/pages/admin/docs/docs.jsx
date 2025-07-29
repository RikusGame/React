import { useState, useCallback } from "react";
import {
  Typography, Paper, Stack
} from "@mui/material";
import { Tabla2 }        from "../../../shared/components/tablas/tabla";
import { Columns }       from "./data/Columns";
import { Rows }          from "./data/Rows";

import EditIcon          from "@mui/icons-material/Edit";
import DeleteIcon        from "@mui/icons-material/Delete";
import IconActionButton  from "../../../shared/components/botones/Botones";
import DocumentoModal    from "./components/DocumentoModal";

const Documentos = () => {
  /* ── estado del modal ───────────── */
  const [openCreate, setOpenCreate] = useState(false);
  const handleOpen  = () => setOpenCreate(true);
  const handleClose = () => setOpenCreate(false);
  const handleSave  = () => {
    console.log("Documento guardado");
    handleClose();
  };

  /* ── botones de acción por fila ─── */
  const renderAcciones = useCallback(({ row }) => (
    <Stack direction="row" spacing={1}>
      <IconActionButton
        icon={<EditIcon fontSize="small" />}
        color="primary"
        onClick={() => console.log("Editar", row.id)}
      />
      <IconActionButton
        icon={<DeleteIcon fontSize="small" />}
        color="error"
        onClick={() => console.log("Eliminar", row.id)}
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
          rows={Rows}
          columns={columns}
          height="51vh"
          pageSize={3}
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
    </>
  );
};

export default Documentos;
