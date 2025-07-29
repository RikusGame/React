// src/pages/admin/personalizar/components/TerminosUso.jsx
import { useState } from "react";
import {
  Typography,
  Stack,
  TextField,
  Button
} from "@mui/material";

const TerminosUso = ({ onSave }) => {
  const [terminos, setTerminos] = useState("");
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = () => {
    onSave(terminos);
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2000);
  };

  return (
    <Stack spacing={2} mt={2}>
      <Typography>Escribe los Términos de Uso de tu empresa:</Typography>

      <TextField
        multiline
        minRows={6}
        fullWidth
        variant="outlined"
        placeholder="Aquí puedes escribir los términos de uso..."
        value={terminos}
        onChange={(e) => setTerminos(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={handleGuardar}
        disabled={!terminos.trim()}
      >
        Guardar términos
      </Button>

      {guardado && (
        <Typography color="success.main">
          Términos guardados correctamente.
        </Typography>
      )}
    </Stack>
  );
};

export default TerminosUso;
