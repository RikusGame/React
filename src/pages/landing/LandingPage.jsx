import { useNavigate } from "react-router-dom";
import { FaTaxi  } from "react-icons/fa"; // Icono para el login del dueño
import { Box, Typography, Button, IconButton, useTheme, Container } from "@mui/material"; // Importamos Container para mejor control del ancho

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Acceso al tema para colores y espaciado

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        background: "linear-gradient(to right, #3189d6ff, #8317ffff)", // Gradiente de color
        color: "#fff", // Color de texto blanco
        fontFamily: "'Roboto', sans-serif", // Usamos 'Roboto' de MUI por defecto o define una en tu tema
        overflow: "hidden", // Previene barras de desplazamiento si hay elementos fuera de vista
        [theme.breakpoints.down('sm')]: {
          py: 6, // Más padding vertical en móviles
        },
      }}
    >
      {/* Ícono de Acceso para el Dueño - Discreto y accesible */}
      <IconButton
        onClick={handleLoginClick}
        title="Acceso para el Dueño" // Título más conciso
        sx={{
          position: "absolute",
          top: { xs: 16, md: 24 }, // Ajuste de posición para móviles
          right: { xs: 16, md: 24 }, // Ajuste de posición para móviles
          fontSize: { xs: "1.8rem", md: "2.2rem" }, // Tamaño adaptable del ícono
          color: "rgba(255, 255, 255, 0.8)", // Ligero cambio de opacidad para mejor visibilidad
          transition: "transform 0.3s ease-in-out", // Suave animación al pasar el cursor
          "&:hover": {
            transform: "scale(1.1)", // Efecto de escala al pasar el cursor
            color: "rgba(255, 255, 255, 1)", // Se vuelve completamente blanco al pasar el cursor
            backgroundColor: 'transparent', // No queremos un fondo de botón
          },
        }}
      >
      <FaTaxi />
      </IconButton>

      <Container maxWidth="md"> {/* Contenedor para limitar el ancho del contenido */}
        {/* Título Principal */}
        <Typography
          variant="h2" // `h2` es adecuado para un título principal de página
          component="h1" // Semánticamente correcto como h1 para el SEO
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, md: 3 }, // Espaciado adaptable
            textShadow: "2px 2px 6px rgba(0,0,0,0.4)", // Sombra más pronunciada
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, // Tamaño adaptable del título
            letterSpacing: { xs: -0.5, md: -1.5 }, // Ligero ajuste de espaciado entre letras
          }}
        >
          Bienvenido a Radiotaxi
        </Typography>

        {/* Subtítulo / Descripción */}
        <Typography
          variant="h5" // `h5` o `h6` son buenas opciones para el subtítulo
          sx={{
            maxWidth: 700,
            lineHeight: 1.6,
            mb: { xs: 5, md: 6 }, // Espaciado adaptable
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }, // Tamaño adaptable
            opacity: 0.9, // Ligera opacidad para suavizar el texto
          }}
        >
          Tu solución rápida y segura para moverte por la ciudad. Conectamos conductores y pasajeros para viajes eficientes y confiables.
        </Typography>

        {/* Botón de Llamada a la Acción Principal */}
        <Button
          onClick={() => alert("¡Descarga la app de Radiotaxi para pedir tu taxi ahora!")} // Mensaje más específico
          variant="contained" // Usa el estilo "contained" de MUI
          sx={{
            px: { xs: 4, md: 6 }, // Padding horizontal adaptable
            py: { xs: 1.2, md: 1.8 }, // Padding vertical adaptable
            fontSize: { xs: "1.1rem", md: "1.4rem" }, // Tamaño de fuente adaptable
            fontWeight: "bold",
            borderRadius: "50px", // Bordes más redondeados para un look moderno
            backgroundColor: theme.palette.common.white, // Color blanco del tema
            color: theme.palette.primary.main, // Usa el color primario del tema para el texto
            boxShadow: theme.shadows[5], // Sombra más prominente del tema
            transition: "all 0.3s ease-in-out", // Transición para hover y otras propiedades
            "&:hover": {
              backgroundColor: "#e0e0e0", // Ligero cambio al pasar el cursor
              transform: "translateY(-4px)", // Efecto de elevación más notable
              boxShadow: theme.shadows[8], // Sombra más profunda al pasar el cursor
            },
          }}
        >
          ¡Pide tu taxi ahora!
        </Button>
      </Container>
    </Box>
  );
};

export default LandingPage;