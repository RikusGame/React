// Importing necessary libraries and components from Material-UI
//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <Box sx={{
      height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)"
    }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, width: 320, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Panel Administrativo</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, background: "#1e3c72" }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;