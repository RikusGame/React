import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import {
  Modal1,
  ModalHeader,
  ModalTwoColumn,
  AppDialogActions,
} from "../../../../../shared/components/modal/modal"; // o usa ruta relativa si no tenés alias

import DatosGenerales     from "../modalEditDocs/DatosGenerales";
import InputsEditor       from "../modalEditDocs/InputsEditor";
import FileSectionsEditor from "../modalEditDocs/FileSectionsEditor";
import VistaPreviaMovil   from "../modalEditDocs/VistaPreviaMovil";
import useInputs          from "../modalEditDocs/useInputs";
import useFileSections    from "../modalEditDocs/useFileSections";

const ModalEditDocs = ({ open, onClose, documento, onSave }) => {
  const [nombreCaja, setNombreCaja] = useState("");
  const [titulo, setTitulo]         = useState("");
  const [subtitulo, setSubtitulo]   = useState("");

  const {
    inputs, agregarInput, eliminarInput, actualizarInput, setInputs
  } = useInputs();

  const {
    fileSections, agregarFile, eliminarFile, actualizarFile, setFileSections
  } = useFileSections();

  // ✅ Prellenar cuando cambia el documento
  useEffect(() => {
    if (documento) {
      setNombreCaja(documento.title || "");
      setTitulo(documento.screenTitle || "");
      setSubtitulo(documento.screenSubtitle || "");
      setInputs(documento.inputs || []);
      setFileSections(documento.fileSections || []);
    }
  }, [documento]);

  const handleGuardarCambios = () => {
    onSave({
      ...documento, // importante para mantener firebaseId u otros datos
      title: nombreCaja,
      screenTitle: titulo,
      screenSubtitle: subtitulo,
      inputs,
      fileSections,
    });
    onClose();
  };

  return (
    <Modal1 open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <ModalHeader
        title="Editar documento"
        icon={<DescriptionRoundedIcon />}
        onClose={onClose}
      />

      <ModalTwoColumn
        left={
          <Stack spacing={2}>
            <DatosGenerales
              nombreCaja={nombreCaja} setNombreCaja={setNombreCaja}
              titulo={titulo}         setTitulo={setTitulo}
              subtitulo={subtitulo}   setSubtitulo={setSubtitulo}
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
            titulo={titulo}
            subtitulo={subtitulo}
            inputs={inputs}
            fileSections={fileSections}
          />
        }
      />

      <AppDialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" color="primary" onClick={handleGuardarCambios}>
          Guardar cambios
        </Button>
      </AppDialogActions>
    </Modal1>
  );
};

export default ModalEditDocs;
