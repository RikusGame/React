// src/pages/admin/banner/data/columnas/Imagen.jsx
import { Box } from "@mui/material";

const renderImagen = ({ value }) => (
  <Box
    component="img"
    src={value}
    sx={{
      width: 100,          // ancho fijo (px)
      height: "90%",      // alto relativo a la fila
      objectFit: "contain", // mantiene proporción sin recortar
      p: 0.25,             // padding
      bgcolor: "#transparent", // fondo gris para PNGs con transparencia
      borderRadius: 1,     // bordes suaves
    }}
  />
);

export default renderImagen;
