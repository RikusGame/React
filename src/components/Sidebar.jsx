import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store"; // Asegúrate de importar todos los iconos que necesites

const drawerWidth = 220;
const closedDrawerWidth = 60; // Ancho cuando el sidebar está colapsado

const menuItems = [
  { path: "/admin", label: "Inicio", icon: <DashboardIcon /> },
  { path: "/admin/usuarios", label: "Usuarios", icon: <PeopleIcon /> },
  { path: "/admin/productos", label: "Productos", icon: <InventoryIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },
  { path: "/admin/compras", label: "Compras", icon: <StoreIcon /> }, // Asegúrate de que este path coincida con tus rutas
];

const Sidebar = ({ open, handleDrawerToggle }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : closedDrawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        [`& .MuiDrawer-paper`]: {
          width: open ? drawerWidth : closedDrawerWidth,
          boxSizing: "border-box",
          background: "#23234f",
          color: "#fff",
          overflowX: "hidden", // Importante para ocultar el scroll horizontal al colapsar
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-end" : "center", // Centra el botón cuando está colapsado
          px: [1],
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                mb: 1,
                borderRadius: 2,
                justifyContent: open ? "initial" : "center", // Centra el ícono cuando está colapsado
                px: 2.5,
                "&.Mui-selected": {
                  background:
                    "linear-gradient(90deg, #1e3c72 60%, #2a5298 100%)",
                  color: "#fff",
                  boxShadow: 2,
                },
                color: "#fff",
                transition: "background 0.3s",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto", // Espacio a la derecha cuando expandido, automático cuando colapsado
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }} // Oculta el texto al colapsar
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;