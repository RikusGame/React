import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const drawerWidth = 220; // Asegúrate de que este ancho coincida con el de Sidebar
const closedDrawerWidth = 60; // Asegúrate de que este ancho coincida con el de Sidebar

const AdminLayout = () => {
  const [open, setOpen] = useState(true); // Estado para controlar si el sidebar está abierto o colapsado
  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f4f6f8",
      }}
    >
      <CssBaseline />
      {/* Navbar profesional */}
      <Navbar
        onMenuClick={handleDrawerToggle}
        sidebarOpen={open} // Pasamos el estado del sidebar al Navbar
        drawerWidth={drawerWidth} // Pasamos el ancho del sidebar
        closedDrawerWidth={closedDrawerWidth} // Pasamos el ancho del sidebar colapsado
      />
      <Box sx={{ display: "flex", flex: 1, pt: 8 }}>
        {/* Sidebar */}
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        {/* Contenido principal */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            // Ajusta el margen izquierdo del contenido principal para dejar espacio al sidebar
            ml: open ? `${drawerWidth}px` : `${closedDrawerWidth}px`,
            // Ajusta el ancho para que ocupe el espacio restante después del sidebar
            width: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)`,
          }}
        >
          <Toolbar /> {/* Agrega un Toolbar vacío para empujar el contenido hacia abajo y evitar que el Navbar lo cubra */}
          <Outlet />
        </Box>
      </Box>
      {/* Footer profesional */}
      <Footer />
    </Box>
  );
};

export default AdminLayout;