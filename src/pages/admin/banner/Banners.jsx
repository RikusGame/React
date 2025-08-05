// src/pages/admin/banner/Banners.jsx
import React from "react";
import { Tabla3 } from "../../../shared/components/tablas/tabla3";
import Icons from "../../../shared/constants/Icons";
import { useRows } from "../../../hooks/useRows";
import { Typography, Paper, Box, CircularProgress, Alert } from "@mui/material";
import useBannerColumns from "./data/Columnas";
import ModalAgregar from "./components/ModalAgregar";

const USE_MOCK = true;          // ← así forzamos los datos locales

const Banners = () => {
  /* ---------- datos ---------- */
  const { rows, setRows, loading, error } = useRows(USE_MOCK);

  // 1️⃣  Solo se crea una vez
  const handleEstadoChange = React.useCallback((row, newEstado) => {
    setRows(prev => prev.map(r => (r.id === row.id ? { ...r, estado: newEstado } : r)));
  }, [setRows]);

  /* ---------- columnas ---------- */
  const columns = useBannerColumns(handleEstadoChange); 


  /* ---------- render ---------- */
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
            footerButtons: (close) => [
              { label: "Cerrar", position: "left", onClick: close },
              { label: "Guardar", icon: <Icons.Save />, position: "right", onClick: () => alert("Guardado") },
            ],
          })
        }
        buttons={[
          {
            label: "Agregar",
            icon: <Icons.Add />,
            title: "Agregar nuevo banner",
            renderModal: () => <ModalAgregar />,
            footerButtons: (close) => [
              { label: "Cerrar", position: "left", onClick: close },
              { label: "Guardar", icon: <Icons.Save />, position: "right", onClick: () => alert("Guardado") },
            ],
          },
          {
            label: "Exportar",
            icon: <Icons.Download />,
            onClick: () => console.log("Exportar"),
          },
        ]}
      />
    </Paper>
  );
};
export default Banners;
