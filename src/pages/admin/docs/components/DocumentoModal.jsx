// src/pages/admin/docs/components/DocumentoModal.jsx
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Stack, Box
} from "@mui/material";
import { useState } from "react";
import DatosGenerales     from "./modalCrearDocs/DatosGenerales";
import InputsEditor       from "./modalCrearDocs/InputsEditor";
import FileSectionsEditor from "./modalCrearDocs/FileSectionsEditor";
import VistaPreviaMovil   from "./modalCrearDocs/VistaPreviaMovil";   // 👈 nuevo
import useInputs          from "./modalCrearDocs/useInputs";
import useFileSections    from "./modalCrearDocs/useFileSections";

const DocumentoModal = ({ open, onClose, onSave }) => {
  const [nombreCaja, setNombreCaja] = useState("");
  const [titulo, setTitulo]         = useState("");
  const [subtitulo, setSubtitulo]   = useState("");

  const { inputs, agregarInput, eliminarInput, actualizarInput } = useInputs();
  const { fileSections, agregarFile, eliminarFile, actualizarFile } = useFileSections();

  const handleGuardar = () => {
    onSave({
      title: nombreCaja,
      screenTitle: titulo,
      screenSubtitle: subtitulo,
      inputs,
      fileSections,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Nuevo documento</DialogTitle>

      <DialogContent dividers>
        <Box display="flex" gap={3}>
          {/* ╭─────────────── IZQUIERDA ───────────────╮ */}
          <Box flex={1}>
            <Stack spacing={2}>
              <DatosGenerales
                nombreCaja={nombreCaja}      setNombreCaja={setNombreCaja}
                titulo={titulo}              setTitulo={setTitulo}
                subtitulo={subtitulo}        setSubtitulo={setSubtitulo}
              />

              <InputsEditor
                inputs={inputs}
                agregarInput={agregarInput}
                eliminarInput={eliminarInput}
                actualizarInput={actualizarInput}
              />

              <FileSectionsEditor
                fileSections={fileSections}
                agregarFile={agregarFile}
                eliminarFile={eliminarFile}
                actualizarFile={actualizarFile}
              />
            </Stack>
          </Box>

          {/* ╭─────────────── DERECHA ───────────────╮ */}
          <Box flex={1} display="flex" justifyContent="center">
            <VistaPreviaMovil
              nombreCaja={nombreCaja}   //  ← nuevo
              subtitulo={subtitulo}     //  ← ya lo tenías
              titulo={titulo}           //  (si sigues usando el título dentro del phone)
              inputs={inputs}
              fileSections={fileSections}
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleGuardar}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DocumentoModal;
