// src/pages/admin/banner/Banners.jsx
import React from "react";
import { Tabla3 } from "../../../shared/components/tablas/tabla3";
import Icons from "../../../shared/constants/Icons";
import { useRows } from "../../../hooks/useRows";
import { Typography, Paper, Box, CircularProgress, Alert } from "@mui/material";
// ❌ quita: import useBannerColumns from "./data/Columnas";
import ModalAgregar from "./components/ModalAgregar";
import useColumns from "../../../shared/components/tablas/columna/hooks/useColumns";
import { uploadImage } from "../../../data/firebase/uploadImage";

const USE_MOCK = true;

const Banners = () => {
  const { rows, setRows, loading, error } = useRows(USE_MOCK);
  const pendingFileRef = React.useRef(null);  // 👈 aquí guardamos el file

  const handleEstadoChange = React.useCallback((row, newEstado) => {
    setRows(prev => prev.map(r => (r.id === row.id ? { ...r, estado: newEstado } : r)));
  }, [setRows]);

  // 👇 ahora SÓLO usamos useColumns
  const columns = useColumns(
    ["id", "imagen", "estado", "acciones"], // puedes agregar más luego: ["id","imagen","posicion","estado","acciones"]
    {
      estado: {
        onChange: handleEstadoChange,          // ← tu handler
      },
      acciones: {
        buttons: ["editar", "eliminar", "ver"],
        handlers: {
          editar:  (row) => console.log("EDITAR banner", row),
          eliminar: (row) => console.log("ELIMINAR banner", row),
          ver:     (row) => console.log("VER banner", row),
        },
      },
    }
  );

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
            // ⬇️ conectamos el modal con onFileSelected
            renderModal: () => (
              <ModalAgregar onFileSelected={(f) => (pendingFileRef.current = f)} />
            ),
            footerButtons: (close) => [
              { label: "Cerrar", position: "left", onClick: () => { pendingFileRef.current = null; close(); } },
              {
                label: "Guardar",
                icon: <Icons.Save />,
                position: "right",
                onClick: async () => {
                  try {
                    const file = pendingFileRef.current;
                    if (!file) {
                      alert("Primero selecciona una imagen.");
                      return;
                    }
                    // 1) subir a Storage
                    const { url } = await uploadImage(file, "banners");
                    // 2) guardar en tu backend o estado local
                    if (USE_MOCK) {
                      // mock local: agrega una fila nueva
                      const newId = (rows.at(-1)?.id ?? 0) + 1;
                      setRows(prev => [...prev, { id: newId, imagen: url, estado: true }]);
                    } else {
                      // TODO: acá llamarías a tu repo de Firestore de Banners, ejemplo:
                      // await bannersRepo.create({ imagen: url, estado: true, posicion: ..., ... })
                    }
                    pendingFileRef.current = null;
                    close();
                  } catch (err) {
                    console.error(err);
                    alert("Error subiendo imagen");
                  }
                },
              },
            ],
          },
        ]}
      />
    </Paper>
  );
};
export default Banners;
