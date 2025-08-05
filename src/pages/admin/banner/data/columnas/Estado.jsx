// src/pages/admin/banner/data/columnas/Estado.jsx

import { Box, Switch } from "@mui/material";

const makeRenderEstado = (onEstado) => ({ value, row }) => {
  const checked = Boolean(value);

  const toggle = (e) => {
    e.stopPropagation();
    onEstado(row, !checked);
  };

  return (
    <Box
      onClick={toggle}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {/* El switch muestra el estado pero no maneja el evento directamente */}
      <Switch
        size="small"
        color="primary"
        checked={checked}
        // Evita que el switch haga su propio stopPropagation (ya lo hace el contenedor)
        onChange={(e) => e.stopPropagation()}
        pointerEvents="none" // permite que el clic caiga en el contenedor
      />
    </Box>
  );
};

export default makeRenderEstado;
