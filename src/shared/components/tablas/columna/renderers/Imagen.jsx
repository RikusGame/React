// D:\Trabajos_Chasky\Radiotaxi\Dashboard\src\shared\columna\renderers\Imagen.jsx
import { Box } from "@mui/material";

const renderImagen = ({ value }) => (
  <Box
    component="img"
    src={value}
    sx={{
      width: 100,
      height: "95%",
      objectFit: "contain",
      p: 0.25,
      bgcolor: "transparent",
      borderRadius: 1,
    }}
  />
);

export default renderImagen;
