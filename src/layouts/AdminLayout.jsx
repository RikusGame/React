import { Outlet } from "react-router-dom";
import {
  Box, CssBaseline, Drawer, Toolbar, AppBar, Typography, List,
  ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const drawerWidth = 220;

const menuItems = [
  { path: "/admin", label: "Inicio", icon: <DashboardIcon /> },
  { path: "/admin/usuarios", label: "Usuarios", icon: <PeopleIcon /> },
  { path: "/admin/productos", label: "Productos", icon: <InventoryIcon /> },
  { path: "/admin/ventas", label: "Ventas", icon: <ShoppingCartIcon /> },
  { path: "/admin/Compras", label: "Compras", icon: <ShoppingCartIcon /> },

];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f4f6f8" }}>
      <CssBaseline />
      {/* Barra superior */}
      <AppBar position="fixed" sx={{ zIndex: 1201, background: "#1e3c72" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Panel Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flex: 1, pt: 8 }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", background: "#23234f", color: "#fff" },
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
                    "&.Mui-selected": { background: "#343454" },
                    color: "#fff"
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