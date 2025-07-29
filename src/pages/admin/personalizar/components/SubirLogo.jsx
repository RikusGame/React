// components/SubirLogo.jsx
import { useState } from "react";
import {
  Avatar,
  Button,
  Stack
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

const SubirLogo = ({ onSave }) => {
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (logo) {
      onSave(logo); // pasa el archivo al componente padre
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Avatar
        src={preview}
        alt="Vista previa del logo"
        sx={{ width: 120, height: 120 }}
      />

      <Button
        variant="outlined"
        component="label"
        startIcon={<UploadIcon />}
      >
        Subir logo
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleLogoChange}
        />
      </Button>

      <Button
        variant="contained"
        color="primary"
        disabled={!logo}
        onClick={handleSave}
      >
        Guardar logo
      </Button>
    </Stack>
  );
};

export default SubirLogo;
