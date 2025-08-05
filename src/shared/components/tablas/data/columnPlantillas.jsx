// src/shared/datagrid/columnTemplates.js
import { Box, Switch } from "@mui/material";
import startCase from "lodash/startCase";

const columnPlantilla = {
  /* ──────────────── campos simples ──────────────── */
  id:       { width: 70 },
  posicion: { flex: 1 },

  /* ─────── campos con render especial ─────── */
  imagen: () => ({
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: ({ value }) => (
      <Box component="img" src={value} sx={{
        width: 100, height: "100%", objectFit: "contain",
        p: .25, bgcolor: "#f5f5f5", borderRadius: 1,
      }} />
    ),
  }),

  estado: ({ onEstado }) => ({
    width: 110,
    sortable: false,
    filterable: false,
    renderCell: ({ value, row }) => (
      <Switch size="small"
              checked={value}
              onChange={(e) => onEstado(row, e.target.checked)} />
    ),
  }),

  acciones: ({ renderAcciones }) => ({
    width: 160,
    sortable: false,
    filterable: false,
    renderCell: renderAcciones,
  }),
};

/**
 * Devuelve el array de columnas listo para MUI-DataGrid.
 *
 * @param  fields  Array con los campos en el orden deseado.
 * @param  titles  Opcional — { campo: "Título" } para sobreescribir headerName.
 * @param  ctx     Callbacks (onEstado, renderAcciones, etc.) que
 *                 algunas plantillas puedan necesitar.
 */
export const crearColumns = ({ fields, config = {}, ...ctx }) =>
  fields.map((field) => {
    /* 1. plantilla base (renderers, etc.) */
    const base  = columnPlantilla[field];
    const extra = typeof base === "function" ? base(ctx) : base ?? {};

    /* 2. configuración declarada por la pantalla */
    const user = config[field] ?? {};

    /* 3. fusiona todo (user pisa lo que quiera) */
    return {
      field,
      headerName: user.label ?? startCase(field),
      //flex: 1,                     // por defecto
      disableColumnMenu: true,
      sortable: false,
      ...extra,
      ...user,                     // ← prioridad al usuario
    };
  });
