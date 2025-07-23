//Uso de la Libreria @mui/material y @mui/icons-material para el diseño del panel de administración
import { Typography, Paper } from "@mui/material";

const Ajustes = () => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Usuarios
    </Typography>
    <Typography>
      Aquí puedes gestionar los usuarios del sistema.
    </Typography>
  </Paper>
);

export default Ajustes;
//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

