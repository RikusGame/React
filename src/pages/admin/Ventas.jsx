//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
import { Typography, Paper } from "@mui/material";

const Ventas = () => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Ventas
    </Typography>
    <Typography>
      Venta de productos y gestión de transacciones.
    </Typography>
  </Paper>
);

export default Ventas;




