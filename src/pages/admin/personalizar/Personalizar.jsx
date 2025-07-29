// src/pages/admin/personalizar/Personalizar.jsx
import { Typography, Paper, Divider } from "@mui/material";
import SubirLogo from "./components/SubirLogo";
import NombreEmpresa from "./components/NombreEmpresa";
import ColorEmpresa from "./components/ColorEmpresa";
import TerminosUso from "./components/TerminosUso";

const Personalizar = () => {
  const handleSaveLogo = (logoFile) => {
    console.log("Logo seleccionado:", logoFile);
    alert("Logo guardado exitosamente (simulado)");
  };

  const handleSaveNombre = (nombre) => {
    console.log("Nombre de empresa guardado:", nombre);
  };

  const handleSaveColor = (color) => {
    console.log("Color representativo guardado:", color);
  };

  const handleSaveTerminos = (texto) => {
    console.log("Términos de uso guardados:", texto);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Personalizar Aplicación
      </Typography>
      <Typography gutterBottom>
        Aquí puedes personalizar el logo, nombre, color y términos de tu empresa.
      </Typography>

      <NombreEmpresa onSave={handleSaveNombre} />

      <Divider sx={{ my: 4 }} />

      <ColorEmpresa onSave={handleSaveColor} />

      <Divider sx={{ my: 4 }} />

      <SubirLogo onSave={handleSaveLogo} />

      <Divider sx={{ my: 4 }} />

      <TerminosUso onSave={handleSaveTerminos} />

      <Divider sx={{ my: 4 }} />
    </Paper>
  );
};

export default Personalizar;
