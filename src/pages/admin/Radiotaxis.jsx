//Uso de la Libreria @mui/material y @mui/icons-material para el diseño del panel de administración
import { Typography, Paper } from "@mui/material";

const Radiotaxis = () => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Radiotaxis
    </Typography>
    <Typography>
      Aquí puedes gestionar los radiotaxis del sistema.
    </Typography>
  </Paper>
);

export default Radiotaxis;
//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

