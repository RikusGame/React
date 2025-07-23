import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: "#1e3c72",
      color: "#fff",
      py: 1,
      px: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mt: "auto",
      boxShadow: "0 -2px 8px rgba(30,60,114,0.15)"
    }}
  >
    {/* Imagen de marca */}
    <Box sx={{ display: "flex", alignItems: "center", minWidth: 120 }}>
      <Avatar
        src="/imagen1.jpg"
        alt="Logo"
        sx={{ width: 40, height: 40, mr: 2 }}
      />
    </Box>
    {/* Texto centrado */}
    <Box sx={{ flex: 1, textAlign: "center" }}>
      <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: 1 }}>
        &copy; {new Date().getFullYear()} Panel Admin @Todos los derechos reservados
      </Typography>
    </Box>
    {/* Botones de acción o enlaces */}
    <Box sx={{ minWidth: 180, textAlign: "right" }}>
      <Button
        color="inherit"
        sx={{ mr: 1, bgcolor: "#2a5298", color: "#fff", borderRadius: 2, px: 2, fontWeight: 500 }}
        href="https://chaskydev.com/servicios"
        target="_blank"
      >
        Sitio Web
      </Button>
      <Button
        color="inherit"
        sx={{ bgcolor: "#2a5298", color: "#fff", borderRadius: 2, px: 2, fontWeight: 500 }}
        href="mailto:soporte@tumarca.com"
      >
        Soporte
      </Button>
    </Box>
  </Box>
);

export default Footer;

/*Ejemplo de uso:
<Box sx={{ flexShrink: 0 }}>
  <Footer />
</Box>
*/