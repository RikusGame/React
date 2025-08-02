// src/pages/admin/docs/components/DocumentoModal.jsx
import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import useMultipleClickBlock from "../../../../../shared/utils/MultipleClick.jsx";

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
  /* ── estados locales ───────────────────────── */
  const [nombreCaja, setNombreCaja] = useState("");
  const [titulo,      setTitulo]     = useState("");
  const [subtitulo,   setSubtitulo]  = useState("");

  const { inputs, agregarInput, eliminarInput, actualizarInput } = useInputs();
  const { fileSections, agregarFile, eliminarFile, actualizarFile } = useFileSections();

  /* ── bloquea clics múltiples sobre “Guardar” ── */
  const {
    execute : handleGuardar,
    loading : guardando,
    reset   : desbloquear,
  } = useMultipleClickBlock(async () => {
    await onSave({
      title: nombreCaja,
      screenTitle: titulo,
      screenSubtitle: subtitulo,
      inputs,
      fileSections,
    });
    onClose();                         // cierra cuando terminó
  });

  /* Limpia estado cuando se cierra el modal */
  useEffect(() => {
    if (!open) {
      setNombreCaja("");
      setTitulo("");
      setSubtitulo("");
      inputs.forEach((_, i) => eliminarInput(i));
      fileSections.forEach((_, i) => eliminarFile(i));
      desbloquear();                   // libera el lock
    }
  }, [open]);

  /* ── UI ─────────────────────────────────────── */
  return (
    <Modal1 open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <ModalHeader
        title="Nuevo documento"
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
            subtitulo={subtitulo}
            titulo={titulo}
            inputs={inputs}
            fileSections={fileSections}
          />
        }
      />

      <AppDialogActions>
        <Button onClick={onClose} disabled={guardando}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGuardar}
          disabled={guardando}
        >
          {guardando ? "Guardando…" : "Guardar"}
        </Button>
      </AppDialogActions>
    </Modal1>
  );
};

export default DocumentoModal;
