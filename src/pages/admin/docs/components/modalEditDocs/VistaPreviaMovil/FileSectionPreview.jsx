// src/pages/admin/docs/components/VistaPreviaMovil/FileSectionPreview.jsx
import { Box, Typography } from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

const FileSectionPreview = ({ title, label }) => (
  <Box sx={{ mb: 2 /* separación con el bloque siguiente */ }}>
    {/* ① Título fuera de la caja */}
    <Typography
      variant="body2"
      fontWeight={600}
      sx={{ mb: 0.5, ml: 0.5 }}          /* leve margen izquierda */
    >
      {title || "Sin título"}
    </Typography>

    {/* ② Caja con icono + texto */}
    <Box
      sx={{
        border: "1px dashed #ccc",
        borderRadius: 2,
        py: 2,
        px: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#666",
        bgcolor: "#dfdfdfff",
      }}
    >
      <InsertPhotoOutlinedIcon sx={{ fontSize: 32, mb: 1 }} />

      <Typography variant="caption">
        {label || "Subir archivo"}
      </Typography>
    </Box>
  </Box>
);

export default FileSectionPreview;
