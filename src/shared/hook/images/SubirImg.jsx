// src/shared/hook/images/SubirImg.jsx
// Hook reutilizable para seleccionar una imgen, mostrar preview y reducir el tamano

import { useState, useRef, useCallback, useEffect } from "react";

export default function useSubirImg({ maxWidth = 720, maxHeight = 720, quality = 0.9 } = {}) {
  /* -------------------- state -------------------- */
  const [file, setFile]       = useState(null);   // File listo (redimensionado)
  const [preview, setPreview] = useState(null);   // URL preview
  const inputRef              = useRef();

  /* -------------------- helpers -------------------- */
  const abrirSelector = () => inputRef.current?.click();

  const onChangeInput = useCallback((e) => {
    const original = e.target.files?.[0];
    if (!original) return;

    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      let newWidth = width;
      let newHeight = height;

      // Calcula escala manteniendo proporción
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        newWidth = Math.round(width * ratio);
        newHeight = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const optimizedFile = new File([blob], original.name, { type: "image/jpeg" });
          setFile(optimizedFile);
        },
        "image/jpeg",
        quality
      );
    };
    img.src = URL.createObjectURL(original);
  }, [maxWidth, maxHeight, quality]);

  /* -------------------- preview -------------------- */
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  /* -------------------- reset -------------------- */
  const reset = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return { file, preview, inputRef, abrirSelector, onChangeInput, reset };
}

/* Ejemplo de uso:
const { preview, inputRef, abrirSelector, onChangeInput } = useSubirImg();
<Box  onClick={abrirSelector}          // uso de abrirSelector
  sx={{ // Estilos para el contenedor
  }}
>
  {preview ? ( // Si hay una imagen previa, la mostramos
    <Box component="img" src={preview}  // Mostrar la imagen previa
  ) : ( // Si no hay imagen previa, mostramos un ícono
   )}
  <input
    ref={inputRef} // Referencia al input para manejar el cambio
    type="file"
    accept="image/*"
    hidden
    onChange={onChangeInput} // Maneja el cambio de archivo
  />
</Box>

*/