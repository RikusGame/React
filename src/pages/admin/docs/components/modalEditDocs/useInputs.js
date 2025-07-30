// src/pages/admin/docs/components/modalEditDocs/useInputs.js
import { useState } from "react";

export default function useInputs() {
  const [inputs, setInputs] = useState([]);

  const agregarInput = () => {
    setInputs([...inputs, { label: "", tipo: "text" }]);
  };

  const eliminarInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const actualizarInput = (index, newLabel) => {
    const copia = [...inputs];
    copia[index].label = newLabel;
    setInputs(copia);
  };

  return { inputs, agregarInput, eliminarInput, actualizarInput, setInputs };
}
