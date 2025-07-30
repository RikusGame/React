// src/pages/admin/docs/components/VistaPreviaMovil/index.jsx
import {
  Stack, Box, Paper, Typography, Divider, IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon   from "@mui/icons-material/ArrowBackIosNew";
import InputPreview          from "./InputPreview";
import FileSectionPreview    from "./FileSectionPreview";
import TopBarPreview         from "./TopBarPreview";

const VistaPreviaMovil = ({
  nombreCaja,     //  ← NUEVO
  subtitulo,      //  ← NUEVO
  titulo,
  inputs,
  fileSections,
}) => (
  <Stack alignItems="center" spacing={1}>
    {/* Barra externa ― usa el componente modular */}
    <TopBarPreview nombreCaja={nombreCaja} subtitulo={subtitulo} />

    {/* Marco + teléfono */}
    <Box
      sx={{
        p: 0.9,
        bgcolor: "#00000067",
        borderRadius: 4,
        boxShadow: "0 6px 18px rgba(0,0,0,.45)",
        display: "inline-block",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 320,
          height: 640,
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "#fafafa",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* notch */}
        <Box sx={{
          position: "absolute", top: 6, left: "50%",
          transform: "translateX(-50%)",
          width: 60, height: 6, borderRadius: 3,
          bgcolor: "#444", opacity: .35,
        }} />

        {/* App-bar interno */}
        <Box sx={{ mt: 2, height: 44, display: "flex", alignItems: "center", px: 1 }}>
          <IconButton size="small" sx={{ color: "#00000080", mr: 1 }}>
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            noWrap
            sx={{ flexGrow: 1, textAlign: "center", mr: 3 }}
          >
            {titulo || "Título de la pantalla"}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#000", boxShadow: "0 1px 3px rgba(0,0,0,.25)" }} />

        <Typography variant="body2" sx={{ textAlign: "center", mt: 3, color: "#666" }}>
          Completa estos datos
        </Typography>

        {/* Contenido con scroll */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          {inputs.map((inp, i) => <InputPreview key={i} label={inp.label} />)}
          {fileSections.map((sec, i) => (
            <FileSectionPreview key={i} title={sec.title} label={sec.label} />
          ))}
          {inputs.length + fileSections.length === 0 && (
            <Box textAlign="center" color="text.disabled" mt={4}>
              <Typography variant="caption">Empieza a añadir campos o secciones…</Typography>
            </Box>
          )}
        </Box>

        {/* barra “home” */}
        <Box sx={{
          height: 4, width: 80, bgcolor: "#bbb",
          borderRadius: 2, alignSelf: "center", mb: 1, opacity: .7,
        }} />
      </Paper>
    </Box>
  </Stack>
);

export default VistaPreviaMovil;
