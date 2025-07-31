// src/pages/admin/AgregarProducto.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// ¡Aquí está la magia! Importa las funciones directamente desde tu carpeta Firebase
import { addDocument, uploadFile } from '../../firebase'; // Importa solo lo que necesitas

const AgregarProducto = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    } else {
      setImageFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      let imageUrl = "";

      // Si hay un archivo de imagen, súbelo usando la función modular
      if (imageFile) {
        imageUrl = await uploadFile(imageFile, 'productos'); // Ruta: 'productos/'
      }

      // Prepara los datos del producto (asegúrate de que precio y stock sean números)
      const productData = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        imagen: imageUrl, // URL de la imagen (o cadena vacía si no hay imagen)
      };

      // Añade el documento usando la función modular
      await addDocument('productos', productData);

      setSuccessMessage("Producto añadido exitosamente!");
      setFormData({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
      });
      setImageFile(null); // Resetea el archivo

      setTimeout(() => {
        navigate("/admin/productos");
      }, 2000);

    } catch (error) {
      console.error("Error al añadir el producto:", error);
      setErrorMessage(`Error al añadir el producto: ${error.message || "Por favor, inténtalo de nuevo."}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, m: 2, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Agregar Nuevo Producto
      </Typography>

      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Nombre del Producto"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Descripción"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          label="Precio"
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          inputProps={{ step: "0.01" }}
        />
        <TextField
          label="Stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          inputProps={{ min: "0" }}
        />
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Imagen del Producto:
          </Typography>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="outlined" component="span">
              Seleccionar Imagen
            </Button>
          </label>
          {imageFile && (
            <Typography variant="body2" sx={{ ml: 2, display: "inline" }}>
              {imageFile.name}
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, p: 1.5 }}
          disabled={submitting}
        >
          {submitting ? <CircularProgress size={24} /> : "Agregar Producto"}
        </Button>
      </Box>
    </Paper>
  );
};

export default AgregarProducto;