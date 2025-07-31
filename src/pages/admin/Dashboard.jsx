// src/pages/admin/Usuarios.jsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Add as AddIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

// Datos de ejemplo para usuarios
const initialUsers = [
  {
    id: 'user1',
    name: "Ana García",
    email: "ana.garcia@example.com",
    role: "Administrador",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 'user2',
    name: "Luis Pérez",
    email: "luis.perez@example.com",
    role: "Editor",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 'user3',
    name: "María López",
    email: "maria.lopez@example.com",
    role: "Usuario",
    status: "Inactivo",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 'user4',
    name: "Carlos Ruiz",
    email: "carlos.ruiz@example.com",
    role: "Usuario",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 'user5',
    name: "Elena Fernández",
    email: "elena.f@example.com",
    role: "Usuario",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 'user6',
    name: "Javier Sánchez",
    email: "javier.s@example.com",
    role: "Editor",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
    {
    id: 'user7',
    name: "Sofía Torres",
    email: "sofia.t@example.com",
    role: "Usuario",
    status: "Inactivo",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 'user8',
    name: "Diego Castro",
    email: "diego.c@example.com",
    role: "Administrador",
    status: "Activo",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const Usuarios = () => { // <--- Nombre del componente cambiado aquí
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(initialUsers);

  // Función para manejar la búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar usuarios basado en el término de búsqueda
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Funciones de acción (simuladas) ---
  const handleView = (user) => {
    alert(`Ver detalles de: ${user.name} (ID: ${user.id})`);
    // Aquí podrías navegar a una página de detalle de usuario o abrir un modal
  };

  const handleEdit = (user) => {
    alert(`Editar usuario: ${user.name} (ID: ${user.id})`);
    // Aquí podrías navegar a un formulario de edición o abrir un modal
  };

  const handleDelete = (userId) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar al usuario con ID: ${userId}?`)) {
      setUsers(users.filter(user => user.id !== userId));
      alert(`Usuario con ID ${userId} eliminado.`);
      // En una aplicación real, aquí harías una llamada a tu API para eliminar al usuario.
    }
  };

  const handleAddUser = () => {
    alert("Navegar a la página para añadir un nuevo usuario.");
    // Aquí podrías navegar a un formulario para crear un nuevo usuario.
  };

  return (
    <Paper elevation={3} sx={{ p: 4, m: 2, borderRadius: '12px' }}>
      <Grid container spacing={3} alignItems="center" mb={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Gestión de Usuarios
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Administra los usuarios de tu plataforma de manera eficiente.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
          {/* Barra de Búsqueda */}
          <TextField
            label="Buscar usuario"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, maxWidth: 300 }}
          />
          {/* Botón para Añadir Nuevo Usuario */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddUser}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Añadir Usuario
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ boxShadow: 6, borderRadius: '8px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="tabla de usuarios">
          <TableHead sx={{ backgroundColor: 'primary.light' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Avatar</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Rol</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Estado</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    No se encontraron usuarios.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: 'action.hover' } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt={user.name} src={user.avatar} />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        display: 'inline-block',
                        p: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        backgroundColor:
                          user.role === 'Administrador' ? '#ffe0b2' :
                          user.role === 'Editor' ? '#c8e6c9' :
                          '#bbdefb',
                        color:
                          user.role === 'Administrador' ? '#e65100' :
                          user.role === 'Editor' ? '#2e7d32' :
                          '#1976d2',
                      }}
                    >
                      {user.role}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        display: 'inline-block',
                        p: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        backgroundColor: user.status === 'Activo' ? '#e8f5e9' : '#ffebee',
                        color: user.status === 'Activo' ? '#2e7d32' : '#d32f2f',
                      }}
                    >
                      {user.status}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Ver Detalles">
                      <IconButton color="info" onClick={() => handleView(user)}>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar Usuario">
                      <IconButton color="primary" onClick={() => handleEdit(user)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar Usuario">
                      <IconButton color="error" onClick={() => handleDelete(user.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Usuarios; // <--- Exportación del componente cambiada aquí