// src/pages/admin/personalizar/components/NombreEmpresa.jsx
import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Stack
} from "@mui/material";

const NombreEmpresa = ({ onSave }) => {
  const [nombre, setNombre] = useState("");
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = () => {
    onSave(nombre);
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2000);
  };

  return (
    <Stack spacing={2} mt={2}>
      <TextField
        label="Nombre de la empresa"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleGuardar}
        disabled={!nombre.trim()}
      >
        Guardar nombre
      </Button>

      {guardado && (
        <Typography color="success.main">
          Nombre guardado correctamente.
        </Typography>
      )}
    </Stack>
  );
};

export default NombreEmpresa;
