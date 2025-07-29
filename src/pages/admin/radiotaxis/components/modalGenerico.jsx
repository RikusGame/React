// components/DetalleModal.jsx
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography,
  Stack, Box, Chip, Divider, IconButton, Avatar, Card, CardHeader, CardContent, CardActions
} from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CloseIcon     from "@mui/icons-material/Close";
import ArticleIcon   from "@mui/icons-material/Article";
import { useState } from "react";

const getEstadoColor = (e = "") =>
  ({ aprobado: "success", pendiente: "warning", rechazado: "error" }[
    e.toLowerCase()
  ] || "default");

export default function DetalleModal({ open, onClose, rowData }) {
  const [docActivo, setDocActivo] = useState(null);
  if (!rowData) return null;

  
  /* Documentos de ejemplo ─────────────── */
  const mockDocs = [
    { nombre: "Licencia.pdf",   url: "#", estado: "pendiente" },
    { nombre: "Registro.pdf",   url: "#", estado: "aprobado"  },
    { nombre: "SeguroVehículo", url: "#", estado: "rechazado" },
  ];

  return (
        <> {/*  ⬅️  FRAGMENTO que envuelve TODO  */}
      {/* ─── Diálogo principal ─── */}
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { borderRadius: 3, p: 0, bgcolor: "#fafafa" } }}
    >
      {/* ── encabezado ─────────────────────────── */}
      <Box sx={{ display: "flex", alignItems: "center", px: 3, py: 2 }}>
        <Typography><b>ID:</b> {rowData.id}</Typography>
        <LocalTaxiIcon color="primary" sx={{ mr: 1 }} />
        <DialogTitle sx={{ flexGrow: 1, p: 0 }}>Detalle del Radiotaxi</DialogTitle>
        <IconButton size="small" onClick={onClose}><CloseIcon /></IconButton>
      </Box>

      <Divider />

      {/* ── contenido a dos columnas ───────────── */}
      <DialogContent dividers sx={{ p: 0 }}>
        <Box sx={{ display: "flex" }}>
          {/* IZQUIERDA ▸ Datos empresa */}
{/* ─────────────– IZQUIERDA · Datos empresa ─────────────– */}
<Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
  {/* Tarjetita */}
  <Box
    sx={{
      width: 280,
      p: 3,
      borderRadius: 3,
      bgcolor: "#fff",
      border: "1px solid #00000033",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.33)",
      textAlign: "center",
    }}
  >
    {/* Logo redondo */}
    <Avatar
      src={rowData.logo}
      alt={rowData.nombreEmpresa}
      sx={{
        width: 110,
        height: 110,
        mx: "auto",
        mb: 2,
        border: "3px solid",
        borderColor: "primary.main",
        boxShadow: 2,
      }}
    >
      {rowData.nombreEmpresa?.[0] || "?"}
    </Avatar>

    {/* Nombre */}
    <Typography variant="h6" fontWeight={600} mb={1}>
      {rowData.nombreEmpresa}
    </Typography>

    {/* Detalles */}
    <Stack spacing={0.5} sx={{ mb: 2, "& b": { color: "text.secondary" } }}>
      <Typography>
        <b>Teléfono:</b> {rowData.telefono || "No proporcionado"}
      </Typography>
      <Typography>
        <b>Estado:</b>{" "}
        <Chip
          label={rowData.estado}
          size="small"
          color={getEstadoColor(rowData.estado)}
          variant="outlined"
        />
      </Typography>
      <Typography>
        <b>Fecha registro:</b> {rowData.fecha}
      </Typography>
    </Stack>

    {/* Billetera */}
    <Divider sx={{ my: 1.5 }} />
    <Typography variant="subtitle2" fontWeight={600}>
      Saldo de la billetera
    </Typography>
    <Typography variant="h5" color="primary" fontWeight={700} mb={1}>
      $ 0.00
    </Typography>
    <Button variant="contained" color="success" size="small" sx={{ px: 3, textTransform: "none" }}>
      Agregar monto
    </Button>
  </Box>
</Box>

<Divider orientation="vertical" flexItem />

{/* │───────  DERECHA · Documentos  ────────│ */}
<Box
  sx={{
    flex: 1,
    display: "flex",                 // ⚑ centramos todo el contenido
    justifyContent: "center",
    alignItems: "center",
    p: 3,
  }}
>
  {/* Columna interior */}
  <Stack spacing={2} sx={{ width: 340 /* mismo ancho que card */ }}>
    {/* Botón general */}
    <Box sx={{ textAlign: "right" }}>
      <Button
        variant="contained"
        size="small"
        onClick={() => console.log("Descargar todos los documentos")}
      >
        Descargar todo
      </Button>
    </Box>

    {/* Tarjetas */}
    {mockDocs.map((doc, i) => (
      <Card
        key={i}
        variant="outlined"
        sx={{
          width: 340,              // ⬅️ igual al contenedor
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <CardHeader
          title={<Typography variant="subtitle2" noWrap>{doc.nombre}</Typography>}
          action={
            <Chip
              label={doc.estado}
              size="small"
              color={getEstadoColor(doc.estado)}
            />
          }
          sx={{
            borderBottom: "1px solid #00000033",
            bgcolor: "#f5f5f5",
            pb: 0.5,
            "& .MuiCardHeader-action": { m: 0 },
          }}
        />

        <CardContent
          sx={{
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 0,
          }}
        >
          {doc.preview ? (
            <Box
              component="img"
              src={doc.preview}
              alt={doc.nombre}
              sx={{ maxHeight: 70, maxWidth: "90%", objectFit: "contain" }}
            />
          ) : (
            <ArticleIcon sx={{ fontSize: 40, color: "text.secondary" }} />
          )}
        </CardContent>

        <CardActions
          sx={{
            borderTop: "1px solid #00000033",
            justifyContent: "center",
            py: 1,
          }}
        >
          <Button
            size="small"
            variant="outlined"
            onClick={() => setDocActivo(doc)}
          >
            Abrir
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{ ml: 1 }}
            href={doc.url}
          >
            Descargar
          </Button>
        </CardActions>
      </Card>
    ))}
  </Stack>
</Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="contained">Cerrar</Button>
      </DialogActions>
      </Dialog>

      {/* ────────── MODAL-VISOR DEL DOCUMENTO ────────── */}
      <Dialog
        open={Boolean(docActivo)}
        onClose={() => setDocActivo(null)}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx:{ p:0, borderRadius:2 } }}
      >
        <Box sx={{ display:'flex', alignItems:'center', px:3, py:2 }}>
          <DialogTitle sx={{ flexGrow:1, p:0 }}>{docActivo?.nombre}</DialogTitle>
          <IconButton onClick={() => setDocActivo(null)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        <DialogContent
          sx={{ display:'flex', justifyContent:'center', alignItems:'center', p:3 }}
        >
          {docActivo?.preview ? (
            <Box
              component="img"
              src={docActivo.preview}
              alt={docActivo.nombre}
              sx={{ maxWidth:'100%', maxHeight:'70vh', objectFit:'contain' }}
            />
          ) : (
            <ArticleIcon sx={{ fontSize:80, color:'text.secondary' }} />
          )}
        </DialogContent>

        <DialogActions sx={{ px:3, py:2 }}>
          <Button
            variant="contained"
            href={docActivo?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar
          </Button>
          <Button variant="outlined" onClick={() => setDocActivo(null)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
