// AdminLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import DashboardIcon   from "@mui/icons-material/Dashboard";
import PeopleIcon      from "@mui/icons-material/People";
import LocalTaxiIcon   from "@mui/icons-material/LocalTaxi";
import Navbar          from "../components/Navbar";
import Footer          from "../components/Footer";
import Sidebar         from "../components/Sidebar";
import LogoImg         from "../assets/logo.png";

const menuItems = [
  { path: "/admin",          label: "Inicio",     icon: <DashboardIcon /> },
  { path: "/admin/usuarios", label: "Usuarios",   icon: <PeopleIcon /> },
  { path: "/admin/radiotaxis", label: "Radiotaxis", icon: <LocalTaxiIcon /> },
  { path: "/admin/ajustes", label: "Ajustes", icon: <LocalTaxiIcon /> },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",      // altura total de la ventana
        overflow: "hidden",    // no permitimos scroll aquí
      }}
    >
      <CssBaseline />

      {/* Navbar fijo arriba */}
      <Box sx={{ flexShrink: 0 }}>
        <Navbar />
      </Box>

      {/* Contenedor central: sidebar + contenido */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",    // controlamos scroll en hijos
        }}
      >
        {/* Sidebar con scroll propio */}
        <Sidebar
        logo={
          <Link to="/admin">
            <img src={LogoImg} alt="Logo" />
          </Link>
        }
          menuItems={menuItems}
        />

        {/* Main con scroll propio */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Offset para que no quede debajo de la Navbar */}
          <Toolbar />

          {/* Aquí va el scroll de tu página */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 3,
            }}
          >
            <Outlet />
          </Box>

          {/* Footer fijo abajo */}
          <Box sx={{ flexShrink: 0 }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
