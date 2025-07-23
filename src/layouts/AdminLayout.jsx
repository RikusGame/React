import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Box, CssBaseline, Drawer, Toolbar, List,
  ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const drawerWidth = 220;

const menuItems = [
  { path: "/admin", label: "Inicio", icon: <DashboardIcon /> },
  { path: "/admin/usuarios", label: "Usuarios", icon: <PeopleIcon /> },
  { path: "/admin/productos", label: "Productos", icon: <InventoryIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> }, //Aqui asumiendo que 'Compras' es similar a 'Ventas'
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },//No olvidar que en routes.js se ha cambiado 'Compras' por 'Ventas' para que coincida con el componente Ventas.jsx
    
    
  
];

const AdminLayout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f4f6f8" }}>
      <CssBaseline />
      {/* Navbar profesional */}
      <Navbar onMenuClick={handleDrawerToggle} />
      <Box sx={{ display: "flex", flex: 1, pt: 8 }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#23234f",
              color: "#fff"
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {menuItems.map(item => (
                <ListItem
                  button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    "&.Mui-selected": {
                      background: "linear-gradient(90deg, #1e3c72 60%, #2a5298 100%)",
                      color: "#fff",
                      boxShadow: 2,
                    },
                    color: "#fff",
                    transition: "background 0.3s",
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        {/* Contenido principal */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
      {/* Footer profesional */}
      <Footer />
    </Box>
  );
};

export default AdminLayout;