import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Usuarios from "../pages/admin/Usuarios";
import Productos from "../pages/admin/Productos";
import Ventas from "../pages/admin/Ventas";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="productos" element={<Productos />} />
      <Route path="ventas" element={<Ventas />} />
      <Route path="compras" element={<Ventas />} /> {/* Assuming 'Compras' is similar to 'Ventas' */}
    </Route>
  </Routes>
);

export default AdminRoutes;