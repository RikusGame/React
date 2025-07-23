// Sidebar.jsx
import React from "react";
import { Box, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 220;

/**
 * Sidebar con scroll independiente y encabezado fijo.
 * - El contenedor <Box> principal tiene overflowY y overscrollBehavior para aislar scroll.
 * - El header (Toolbar + logo) queda sticky arriba.
 */
const Sidebar = ({ logo, menuItems }) => {
  const location = useLocation();

  return (
    <Box
      component="nav"
      sx={{
        width: drawerWidth,
        height: "100vh",
        background: "#23234f",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        overflowY: "auto",         // Scroll en todo el sidebar
        overscrollBehavior: "contain", // Evita propagar al contenido principal
      }}
    >
      {/* Header sticky: Toolbar + logo */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          background: "#23234f",
          // No desplazable independiente
        }}
      >
        <Toolbar />
        {logo && (
          <Box sx={{ textAlign: "center", p: 2 }}>
            {logo}
          </Box>
        )}
      </Box>

      {/* Lista de menú (desplazable junto al contenedor) */}
      <List sx={{ p: 0 }}>
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
              color: "#fff",
              "&.Mui-selected": {
                background: "linear-gradient(90deg, #1e3c72 60%, #2a5298 100%)",
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





/*Ejemplo de uso:

*/