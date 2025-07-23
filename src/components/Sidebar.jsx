import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { path: "/admin", label: "Inicio" },
  { path: "/admin/usuarios", label: "Usuarios" },
  { path: "/admin/productos", label: "Productos" },
  { path: "/admin/ventas", label: "Ventas" },
   { path: "/admin/compras", label: "Compras" },
  
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside style={{
      width: 220, background: "#1e1e2f", color: "#fff", height: "100vh", paddingTop: 20
    }}>
      <nav>
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "block",
              padding: "0.75rem 1rem",
              color: "#fff",
              textDecoration: "none",
              background: location.pathname === item.path ? "#343454" : "transparent"
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;