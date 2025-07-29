// src/pages/admin/docs/components/modalCrearDocs/FileSectionsEditor.jsx
import {
  Stack, TextField, IconButton, Button, Divider
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const FileSectionsEditor = ({ fileSections, agregarFile, eliminarFile, actualizarFile }) => (
  <>
    <Divider>Secciones de archivo</Divider>
    {fileSections.map((file, i) => (
      <Stack direction="row" spacing={1} key={i} alignItems="center">
        <TextField
          label="Título"
          fullWidth
          value={file.title}
          onChange={(e) => actualizarFile(i, "title", e.target.value)}
        />
        <TextField
          label="Label del botón"
          fullWidth
          value={file.label}
          onChange={(e) => actualizarFile(i, "label", e.target.value)}
        />
        <IconButton onClick={() => eliminarFile(i)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    ))}

    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={agregarFile}
    >
      Agregar sección de archivo
    </Button>
  </>
);

export default FileSectionsEditor;
