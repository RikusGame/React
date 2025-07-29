// src/pages/admin/banner/Banners.jsx
import { useCallback } from "react";
import { Typography, Paper, Stack } from "@mui/material";
import { Tabla2 } from "../../../shared/components/tablas/tabla";
import { Columns } from "./data/Columns";
import { Rows } from "./data/Rows";
//import Button from "@mui/material/Button";
//import Stack  from "@mui/material/Stack";
import EditIcon   from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconActionButton from "../../../shared/components/botones/Botones";

const Banners = () => {
  /* Si necesitas acciones en la tabla (editar, eliminar, etc.) */
  const renderAcciones = useCallback(
    (params) => {
      const row = params.row;

      const handleEdit   = () => console.log("Editar",   row.id);
      const handleDelete = () => console.log("Eliminar", row.id);

      return (
        <Stack direction="row" spacing={1}>
          <IconActionButton
            icon={<EditIcon fontSize="small" />}
            color="primary"
            onClick={handleEdit}        // <-- acción definida aquí
          />
          <IconActionButton
            icon={<DeleteIcon fontSize="small" />}
            color="error"
            onClick={handleDelete}      // <-- otra acción
          />
        </Stack>
      );
    },
    []
  );

  // ¡Ahora sí usamos Columns!
  const columns = Columns(renderAcciones);

  return (
    <Paper
      elevation={6}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
        mx: "auto",
        maxWidth: 1200,
        border: "0.1px solid rgba(146, 144, 144, 1)",
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Banners
      </Typography>
      <Typography color="text.secondary" mb={2}>
        Aquí puedes gestionar los banners del sistema: ver, crear, editar o
        eliminar.
      </Typography>

      {/* Tabla lista */}
      <Tabla2
        rows={Rows}
        columns={columns}
        height={"51vh"}
        pageSize={3}
        showButton
        buttonLabel="Agregar banner"
        onButtonClick={() => {console.log("Crear banner");}}
        onRowClick={() => console.log("Row Clickeado")}
      />
    </Paper>
  );
};

export default Banners;
