// src/pages/admin/docs/components/modalEditDocs/FileSectionsEditor.jsx
import {
  Stack, TextField, IconButton, Button, Divider, Chip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const FileSectionsEditor = ({ fileSections, agregarFile, eliminarFile, actualizarFile }) => (
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
          label="Campos de archivos"
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
    {fileSections.map((file, i) => (
      <Stack direction="row" spacing={1} key={i} alignItems="center">
        <TextField
          label="Título"
          fullWidth
          value={file.title}
          onChange={(e) => actualizarFile(i, "title", e.target.value)}
        />
        <TextField
          label="Foto Frontal"
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
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={agregarFile}
    >
      Agregar sección de archivo
    </Button>

  </>
);

export default FileSectionsEditor;
