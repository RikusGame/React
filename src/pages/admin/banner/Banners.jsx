// src/pages/admin/banner/Banners.jsx
import React, { useCallback } from "react";
import { Typography, Paper, Stack, Box, CircularProgress, Alert } from "@mui/material";
import { Tabla3 } from "../../../shared/components/tablas/tabla3";
import EditIcon   from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconActionButton from "../../../shared/components/botones/Botones";
import Icons from "../../../shared/constants/Icons";
import { Rows as initialRows } from "./data/Rows";
import { crearColumns } from "../../../shared/components/tablas/data/columnPlantillas";
import { useRows } from "../../../hooks/useRows";

const USE_MOCK = true;          // ← así forzamos los datos locales

const Banners = () => {
  /* ---------- datos ---------- */
  const { rows, setRows, loading, error } = useRows(USE_MOCK);

  const handleEstadoChange = (row, newEstado) => {
    setRows((prev) =>
      prev.map((r) => (r.id === row.id ? { ...r, estado: newEstado } : r))
    );
  };

  const renderAcciones = useCallback(
    (params) => {
      const row = params.row;
      return (
        <Stack direction="row" spacing={1}>
          <IconActionButton
            icon={<EditIcon fontSize="small" />}
            color="primary"
            onClick={(e) => { e.stopPropagation(); console.log("Editar", row.id); }}
          />
          <IconActionButton
            icon={<DeleteIcon fontSize="small" />}
            color="error"
            onClick={(e) => { e.stopPropagation(); console.log("Eliminar", row.id); }}
          />
        </Stack>
      );
    },
    []
  );

  /* ---------- columnas ---------- */
  // Banners.jsx  ──────────────────────────────────────────────
  const columnConfig = {
    id: {
      label: "ID",
      width: 10,          // ← ancho fijo
    },
    imagen: {
      label: "Imagen",
      flex: 1,            // ← ocupa espacio flexible
    },
    posicion: {
      label: "Posición",
      width: 40,
    },
    estado: {
      label: "Estado",
      width: 140,
    },
    acciones: {
      label: "Acciones",
      width: 140,
    },
  };

  // Orden (si quieres cambiarlo basta con re‐ordenar el array):
  const fields = ["id", "imagen", "posicion", "estado", "acciones"];


  const columns = React.useMemo(
    () =>
      crearColumns({
        fields,                // orden
        config: columnConfig,  // overrides individuales
        onEstado: handleEstadoChange,
        renderAcciones,
      }),
    [fields, columnConfig, handleEstadoChange, renderAcciones]
  );

  const Agregar = ({ onClose }) => (
    <Box>
      <h2>Hola desde el modal</h2>
      <p>Contenido dinámico aquí</p>
    </Box>
  );

  const editarModal = (titulo, row) => ({
    title: titulo,
    renderModal: ({ onClose }) => (
      <Box>
        <h2>{titulo}</h2>
        <p>ID seleccionado: {row.id}</p>
      </Box>
    ),
    footerButtons: (close) => [
      {
        label: "Cerrar",
        position: "left",
        onClick: close,
      },
      {
        label: "Guardar",
        icon: <Icons.Save />,
        onClick: () => alert("Guardado"),
        position: "right",
      },
    ],
  });

  if (loading) return <CircularProgress />;
  if (error)   return <Alert severity="error">{error.message}</Alert>;

  return (
    <Paper elevation={6} sx={{ p: 3, borderRadius: 3, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Banners
      </Typography>

      <Tabla3
        rows={rows}
        columns={columns}
        pageSize={3}
        onRowClick={(row, openModal) =>
          openModal({
            title: "Editar banner",
            renderModal: () => <Box>Editar ID: {row.id}</Box>,
          })
        }
        buttons={[
          {
            label: "Agregar",
            icon: <Icons.Add />,
            title: "Agregar nuevo banner",
            renderModal: () => <Box>Contenido del modal</Box>,
            footerButtons: (close) => [
              { label: "Cerrar", position: "left", onClick: close },
              { label: "Guardar", icon: <Icons.Save />, position: "right", onClick: () => alert("Guardado") },
            ],
          },
        ]}
      />
    </Paper>
  );
};
export default Banners;
