// src/components/documentos/DatosGenerales.jsx
import { Stack, TextField } from "@mui/material";

const DatosGenerales = ({
  nombreCaja,
  setNombreCaja,
  titulo,
  setTitulo,
  subtitulo,
  setSubtitulo,
}) => {
  return (
    <Stack spacing={2}>
      <TextField
        label="Nombre de la caja"
        value={nombreCaja}
        onChange={(e) => setNombreCaja(e.target.value)}
        fullWidth
      />
      <TextField
        label="Subtítulo en la app"
        value={subtitulo}
        onChange={(e) => setSubtitulo(e.target.value)}
        fullWidth
      />
      <TextField
        label="Título en la app"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
      />
    </Stack>
  );
};

export default DatosGenerales;
