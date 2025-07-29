// src/pages/admin/docs/components/modalCrearDocs/useFileSections.js
import { useState } from "react";

export default function useFileSections() {
  const [fileSections, setFileSections] = useState([]);

  const agregarFile = () => {
    setFileSections([...fileSections, { title: "", label: "" }]);
  };

  const eliminarFile = (index) => {
    setFileSections(fileSections.filter((_, i) => i !== index));
  };

  const actualizarFile = (index, campo, valor) => {
    const copia = [...fileSections];
    copia[index][campo] = valor;
    setFileSections(copia);
  };

  return {
    fileSections,
    agregarFile,
    eliminarFile,
    actualizarFile
  };
}
