// src/pages/admin/docs/components/modalCrearDocs/InputsEditor.jsx
import { Stack, TextField, IconButton, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const InputsEditor = ({ inputs, agregarInput, eliminarInput, actualizarInput }) => (
  <>
    <Divider>Campos de entrada</Divider>
    {inputs.map((input, i) => (
      <Stack direction="row" spacing={1} key={i} alignItems="center">
        <TextField
          label="Label del input"
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
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={agregarInput}
    >
      Agregar campo
    </Button>
  </>
);

export default InputsEditor;
