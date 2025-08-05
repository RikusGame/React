// src/pages/admin/banner/components/ModalAgregar.jsx

import { Box, Typography, Stack } from "@mui/material";
import Icons from "../../../../shared/constants/Icons";
import useSubirImg from "../../../../shared/hook/images/SubirImg";

const ModalAgregar = () => {
  const { preview, inputRef, abrirSelector, onChangeInput } = useSubirImg();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Selector de imagen */}
      <Box
        onClick={abrirSelector} // Abre el selector de archivos al hacer clic
        sx={{
          width: "100%",
          minHeight: 180,
          border: "2px dashed #9e9e9e",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          '&:hover': { borderColor: "primary.main" },
        }}
      >
        {preview ? ( // Si hay una imagen previa, la mostramos
          <Box // Mostrar la imagen previa
            component="img"
            src={preview}
            alt="preview"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Stack direction="column" alignItems="center" spacing={1}>
            <Icons.Camera sx={{ fontSize: 40, color: "#9e9e9e" }} />
            <Typography variant="body2" color="text.secondary">
              Haz clic o arrastra una imagen aquí
            </Typography>
          </Stack>
        )}
        <input
          ref={inputRef} // Referencia al input para manejar el cambio
          type="file"
          accept="image/*"
          hidden
          onChange={onChangeInput} // Maneja el cambio de archivo
        />
      </Box>
    </Box>
  );
};

export default ModalAgregar;
