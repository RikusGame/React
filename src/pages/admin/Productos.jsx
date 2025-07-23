//Uso de la Libreria @mui/material y @mui/icons-material para el diseño del panel de administración
import { Typography, Paper } from "@mui/material";

const Productos = () => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Productos
    </Typography>
    <Typography>
      Gestion de productos
    </Typography>
  </Paper>
);

export default Productos;

//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled


