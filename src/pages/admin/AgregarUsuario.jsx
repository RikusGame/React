import React, { useState } from "react";
import {
  Paper, TextField, Typography, Button, Box, Avatar, Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import {db,storage, uploadBytes, getDownloadURL, ref, addDoc, collection} from "../../firebase/index"; // Asegúrate de que estas funciones estén correctamente exportadas

import { v4 as uuidv4 } from "uuid";

const AgregarUsuario = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    rol: "",
    estado: "Activo",
    avatarUrl: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [subiendo, setSubiendo] = useState(false);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubiendo(true);
    let finalAvatarUrl = usuario.avatarUrl;

    try {
      // Si el usuario subió un archivo
      if (avatarFile) {
        const storageRef = ref(storage, `avatars/${uuidv4()}_${avatarFile.name}`);
        await uploadBytes(storageRef, avatarFile);
        finalAvatarUrl = await getDownloadURL(storageRef);
      }

      const newUser = {
        id: uuidv4(),
        name: usuario.nombre,
        email: usuario.email,
        role: usuario.rol,
        status: usuario.estado,
        avatar: finalAvatarUrl,
      };

      await addDoc(collection(db, "usuarios"), newUser);
      navigate("/admin/usuarios"); // Regresar a la tabla
    } catch (error) {
      alert("Error al agregar usuario: " + error.message);
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, m: 4 }}>
      <Typography variant="h5" gutterBottom>Agregar Usuario</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nombre" name="nombre" onChange={handleChange} value={usuario.nombre} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email" name="email" onChange={handleChange} value={usuario.email} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Rol" name="rol" onChange={handleChange} value={usuario.rol} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Estado" name="estado" onChange={handleChange} value={usuario.estado} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Avatar (URL)" name="avatarUrl" onChange={handleChange} value={usuario.avatarUrl} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" component="label" fullWidth>
              Subir Imagen
              <input hidden accept="image/*" type="file" onChange={handleFileChange} />
            </Button>
          </Grid>
        </Grid>

        {usuario.avatarUrl && !avatarFile && (
          <Box mt={3} textAlign="center">
            <Avatar src={usuario.avatarUrl} sx={{ width: 100, height: 100, margin: "auto" }} />
          </Box>
        )}

        {avatarFile && (
          <Box mt={3} textAlign="center">
            <Avatar src={URL.createObjectURL(avatarFile)} sx={{ width: 100, height: 100, margin: "auto" }} />
          </Box>
        )}

        <Box mt={4}>
          <Button type="submit" variant="contained" disabled={subiendo}>
            {subiendo ? "Guardando..." : "Guardar Usuario"}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AgregarUsuario;
