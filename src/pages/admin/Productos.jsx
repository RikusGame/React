import React from 'react';
import { Typography, Paper, Grid, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import BotonCompra from '../../components/BotonCompra'; // Asegúrate que la ruta sea correcta (dos puntos)

const productos = [
  {
    id: 'p1',
    nombre: "Camiseta de Algodón",
    descripcion: "Una camiseta cómoda y suave para el día a día.",
    imagen: "/imagen1.jpg",
    precio: 19.99,
    stock: 5,
  },
  {
    id: 'p2',
    nombre: "Pantalón Vaquero",
    descripcion: "Vaqueros duraderos y con estilo para cualquier ocasión.",
    imagen: "/imagen2.jpg",
    precio: 49.99,
    stock: 0, // Sin stock para mostrar un botón deshabilitado
  },
  {
    id: 'p3',
    nombre: "Zapatillas Deportivas",
    descripcion: "Ideales para correr o para un look casual y moderno.",
    imagen: "/imagen3.jpg",
    precio: 79.99,
    stock: 12,
  },
  {
    id: 'p4',
    nombre: "Chaqueta Impermeable",
    descripcion: "Protección contra la lluvia con un diseño ligero.",
    imagen: "/imagen4.jpg",
    precio: 89.99,
    stock: 8,
  },
  {
    id: 'p5',
    nombre: "Mochila Urbana",
    descripcion: "Espaciosa y con estilo, perfecta para la ciudad.",
    imagen: "/imagen5.jpg",
    precio: 35.00,
    stock: 15,
  },
  {
    id: 'p6',
    nombre: "Gorra de Béisbol",
    descripcion: "Clásica gorra con ajuste cómodo y diseño atemporal.",
    imagen: "/imagen6.jpg",
    precio: 15.50,
    stock: 20,
  },
  {
    id: 'p7',
    nombre: "Reloj Inteligente",
    descripcion: "Monitoriza tu actividad y recibe notificaciones.",
    imagen: "/imagen7.jpg",
    precio: 120.00,
    stock: 3,
  },
  {
    id: 'p8',
    nombre: "Auriculares Inalámbricos",
    descripcion: "Sonido de alta calidad y libertad sin cables.",
    imagen: "/imagen8.jpg",
    precio: 65.00,
    stock: 7,
  },
  {
    id: 'p9',
    nombre: "Libro: El Gran Viaje",
    descripcion: "Una novela de aventuras que te cautivará.",
    imagen: "/imagen9.jpg",
    precio: 12.99,
    stock: 25,
  },
];

const Productos = () => {
  const handleAddToCart = (event, product) => {
    // Si el botón está deshabilitado por stock, esta función no debería ejecutarse
    // gracias a la lógica en BotonCompra, pero es bueno tener una doble verificación.
    if (product.stock === 0) {
      console.log(`Intento de añadir producto agotado: ${product.nombre}`);
      return; // No hace nada si está agotado
    }
    console.log(`Añadiendo al carrito:`, product);
    alert(`"${product.nombre}" ha sido añadido al carrito por $${product.precio.toFixed(2)}.`);
    // Aquí iría tu lógica real de carrito de compras.
  };

  return (
    <Paper elevation={3} sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom component="h1">
        Nuestros Productos
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explora nuestra selección de productos de alta calidad.
      </Typography>
      <Grid container spacing={3}>
        {productos.map((prod) => (
          <Grid item xs={12} sm={6} md={4} key={prod.id}>
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="180"
                image={prod.imagen}
                alt={prod.nombre}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h3">{prod.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.descripcion}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                  ${prod.precio.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <BotonCompra
                  product={prod}
                  onClick={handleAddToCart}
                  variant="contained"
                  // Condicionalmente aplica el color 'error' (rojo) si está agotado
                  // De lo contrario, usa 'primary' (azul por defecto)
                  color={prod.stock === 0 ? 'error' : 'primary'}
                  size="medium"
                  // Deshabilita el botón si no hay stock
                  disabled={prod.stock === 0}
                >
                  {/* Cambia el texto del botón basado en el stock */}
                  {prod.stock > 0 ? 'Añadir al Carrito' : 'Agotado'}
                </BotonCompra>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Productos;