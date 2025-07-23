//instalar npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

import { Typography, Paper, Grid, Card, CardMedia, CardContent } from "@mui/material";

// Ejemplo de productos
const productos = [
  {
    nombre: "Producto 1",
    descripcion: "Descripción breve del producto 1.",
    imagen: "/imagen1.jpg", // Coloca la imagen en public/
  },
  {
    nombre: "Producto 2",
    descripcion: "Descripción breve del producto 2.",
    imagen: "/imagen1.jpg",
  },
  {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
   {
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "/imagen1.jpg",
  },
];

const Productos = () => (
  <Paper elevation={3} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Productos
    </Typography>
    <Typography gutterBottom>
      Gestión de productos
    </Typography>
    <Grid container spacing={3}>
      {productos.map((prod, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={prod.imagen}
              alt={prod.nombre}
            />
            <CardContent>
              <Typography variant="h6">{prod.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">
                {prod.descripcion}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default Productos;