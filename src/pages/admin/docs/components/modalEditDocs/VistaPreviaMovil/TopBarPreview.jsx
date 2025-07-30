// src/pages/admin/docs/components/VistaPreviaMovil/TopBarPreview.jsx
import { Box, IconButton, Typography } from "@mui/material";
import DocumentScannerOutlined from "@mui/icons-material/DocumentScannerOutlined"; // ⬅︎  icono izquierdo
import CheckCircleOutline      from "@mui/icons-material/CheckCircleOutline";      // ⬅︎  icono derecho

const TopBarPreview = ({ nombreCaja = "Caja", subtitulo = "Subtítulo" }) => (
  <Box
    sx={{
      width: 320,
      height: 68,
      px: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "#ddddddff",
      borderRadius: 2,
      border: "1px solid #ccc",
      boxShadow: "0 1px 4px rgba(0,0,0,.35)",
    }}
  >
    {/* icono izquierdo (scanner/documento) */}
    <IconButton size="small">
      <DocumentScannerOutlined fontSize="small" />
    </IconButton>

    {/* textos centrados (nombre grande y subtítulo pequeño) */}
    <Box sx={{ textAlign: "center", flexGrow: 1 }}>
      <Typography variant="subtitle1" fontWeight={700} noWrap>
        {nombreCaja}
      </Typography>
      <Typography variant="caption" color="text.secondary" noWrap>
        {subtitulo}
      </Typography>
    </Box>

    {/* icono derecho (check) */}
    <IconButton size="small">
      <CheckCircleOutline fontSize="small" />
    </IconButton>
  </Box>
);

export default TopBarPreview;
