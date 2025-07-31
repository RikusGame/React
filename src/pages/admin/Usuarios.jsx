import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  // Cargar usuarios desde Firestore
  const cargarUsuarios = async () => {
    try {
      const snapshot = await getDocs(collection(db, "usuarios"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsuarios(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const handleAddUser = () => {
    navigate("/admin/usuarios/agregar");
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, margin: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Usuarios
        </Typography>
        <Button variant="contained" onClick={handleAddUser}>
          Añadir Usuario
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>Estado</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell>
                <Avatar alt={usuario.name} src={usuario.avatar} />
              </TableCell>
              <TableCell>{usuario.name}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.role}</TableCell>
              <TableCell>{usuario.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Usuarios;
