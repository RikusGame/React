// src/pages/admin/docs/components/DocumentoModal.jsx
import { Button, Stack } from "@mui/material";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { useState } from "react";
import { useEffect } from "react";

import {
  Modal1,
  ModalHeader,
  ModalTwoColumn,
  AppDialogActions,
} from "../../../../../shared/components/modal/modal.jsx";

import DatosGenerales     from "./DatosGenerales.jsx";
import InputsEditor       from "./InputsEditor.jsx";
import FileSectionsEditor from "./FileSectionsEditor.jsx";
import VistaPreviaMovil   from "./VistaPreviaMovil/index.jsx";
import useInputs          from "./useInputs.js";
import useFileSections    from "./useFileSections.js";

const DocumentoModal = ({ open, onClose, onSave }) => {
  const [nombreCaja, setNombreCaja] = useState("");
  const [titulo, setTitulo]         = useState("");
  const [subtitulo, setSubtitulo]   = useState("");

  const { inputs, agregarInput, eliminarInput, actualizarInput } = useInputs();
  const { fileSections, agregarFile, eliminarFile, actualizarFile } = useFileSections();

  useEffect(() => {
    if (!open) {
      setNombreCaja("");
      setTitulo("");
      setSubtitulo("");

      inputs.forEach((_, i) => eliminarInput(i));
      fileSections.forEach((_, i) => eliminarFile(i));
    }
  }, [open]);

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
    <Modal1 open={open} onClose={onClose} maxWidth="lg" fullWidth aria-labelledby="nuevo-documento-title">
      <ModalHeader
        title="Nuevo documento"
        icon={<DescriptionRoundedIcon />}
        onClose={onClose}
      />

      <ModalTwoColumn
        left={
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
        }
        right={
          <VistaPreviaMovil
            nombreCaja={nombreCaja}
            subtitulo={subtitulo}
            titulo={titulo}
            inputs={inputs}
            fileSections={fileSections}
          />
        }
      />

      <AppDialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" color="primary" onClick={handleGuardar}>
          Guardar
        </Button>
      </AppDialogActions>
    </Modal1>
  );
};

export default DocumentoModal;
