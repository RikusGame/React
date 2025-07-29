import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, TextField, Button, useTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Example icon for the login form

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Access the theme for consistent styling

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, you'd perform authentication here (e.g., API call)
    // For now, we'll just navigate
    navigate("/admin");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // Use minHeight for better adaptability
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Enhanced background gradient for a more dynamic look
        background: "linear-gradient(135deg, #007bff 0%, #00c6ff 100%)", // Brighter, more modern blue gradient
        p: 2, // Add some padding for small screens
      }}
    >
      <Paper
        elevation={10} // Higher elevation for a more pronounced "floating" effect
        sx={{
          p: { xs: 3, sm: 4 }, // Responsive padding
          borderRadius: 3,
          width: { xs: '90%', sm: 380 }, // Responsive width: 90% on small, 380px on larger
          maxWidth: 400, // Max width to prevent it from getting too wide
          textAlign: "center",
          backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white for depth
          backdropFilter: 'blur(5px)', // Subtle blur effect for a modern UI (Glassmorphism hint)
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // More distinct shadow
          animation: 'fadeIn 0.8s ease-out', // Simple fade-in animation
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <LockOutlinedIcon
          sx={{
            fontSize: 60, // Larger icon size
            color: theme.palette.primary.main, // Use primary color from the theme
            mb: 2,
          }}
        />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          Acceso Administrador
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
          Ingresa tus credenciales para acceder al panel.
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.divider, // Subtle border color
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.main, // Primary color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.dark, // Darker primary when focused
                },
              },
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.divider,
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.main,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.dark,
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large" // Make the button larger
            sx={{
              mt: 3, // Increased top margin
              // Use theme colors for consistent branding
              background: theme.palette.primary.main,
              '&:hover': {
                background: theme.palette.primary.dark, // Darker on hover
                transform: 'translateY(-2px)', // Slight lift effect
                boxShadow: theme.shadows[6], // Deeper shadow on hover
              },
              transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
              borderRadius: 2, // Slightly rounded button corners
            }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;