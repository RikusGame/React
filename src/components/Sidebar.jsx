import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import { Link, useLocation } from "react-router-dom";


//No utilizas esto
const menuItems = [
  { path: "/admin", label: "Inicio", icon: <DashboardIcon /> },
  { path: "/admin/usuarios", label: "Usuarios", icon: <PeopleIcon /> },
  { path: "/admin/productos", label: "Productos", icon: <InventoryIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },
  { path: "/admin/compras", label: "Compras", icon: <StoreIcon /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 220,
        background: "#23234f",
        color: "#fff",
        height: "100vh",
        pt: 2,
        boxShadow: 3,
      }}
    >
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
              transition: "background 0.3s",
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;