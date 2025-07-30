// src/pages/admin/docs/components/modalEditDocs/InputsEditor.jsx
import { Stack, TextField, IconButton, Button, Divider, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const InputsEditor = ({ inputs, agregarInput, eliminarInput, actualizarInput }) => (
  <>
    <Divider
      sx={{
        my: 2,
        "&::before, &::after": {
          borderTop: "1px solid #000", // línea más marcada y negra
        },
        ".MuiDivider-wrapper": {
          px: 0, // sin padding adicional porque usamos Chip
        },
      }}
    >
      <Chip
        label="Campos de datos"
        size="small"
        sx={{
          bgcolor: "#000",
          color: "#fff",
          fontWeight: 400,
          borderRadius: 1.5,
          px: 1.25,
          fontSize: "0.875rem",
          height: 24,
        }}
      />
    </Divider>
    {inputs.map((input, i) => (
      <Stack direction="row" spacing={1} key={i} alignItems="center">
        <TextField
          label="Nombre del campo"
          fullWidth
          value={input.label}
          onChange={(e) => actualizarInput(i, e.target.value)}
        />
        <IconButton onClick={() => eliminarInput(i)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ))}
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={agregarInput}
    >
      Agregar campo
    </Button>

  </>
);

export default InputsEditor;
