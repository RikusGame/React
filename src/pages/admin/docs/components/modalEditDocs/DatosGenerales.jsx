// src/components/documentos/DatosGenerales.jsx
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";

import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import SubtitlesOutlined from "@mui/icons-material/SubtitlesOutlined";
import TitleOutlined from "@mui/icons-material/TitleOutlined";

const buildField = ({
  label,
  value,
  onChange,
  icon,
  max = 60,
  placeholder = "",
}) => (
  <TextField
    label={label}
    value={value ?? ""}
    onChange={onChange}
    fullWidth
    size="medium"
    variant="outlined"
    placeholder={placeholder}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">{icon}</InputAdornment>
      ),
    }}
    inputProps={{ maxLength: max }}
    helperText={`${(value ?? "").length}/${max}`}
    sx={{
      "& .MuiInputBase-root": { borderRadius: 2 },

      /* Borde negro para todos los estados */
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#000" },
        "&:hover fieldset": { borderColor: "#000" },
        "&.Mui-focused fieldset": { borderColor: "#000", borderWidth: 2 },
      },
    }}
  />
);

const DatosGenerales = ({
  nombreCaja,
  setNombreCaja,
  titulo,
  setTitulo,
  subtitulo,
  setSubtitulo,
}) => {
  return (
    /* Contenedor centrado */
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 840,        // controla el ancho del contenido
          mx: "auto",
          borderRadius: 6,
          border: "1px solid #000", // borde negro del card
          bgcolor: "background.paper",
        }}
      >
        <CardHeader
          title="Datos generales"
          subheader="Que documentos pediras en la App."
          sx={{
            textAlign: "center", // también centramos los headings
            "& .MuiCardHeader-title": { fontWeight: 600 },
            "& .MuiCardHeader-subheader": { color: "text.secondary" },
            pb: 0,
          }}
        />
        <CardContent sx={{ pt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {buildField({
                label: "Nombre del Botón",
                value: nombreCaja,
                onChange: (e) => setNombreCaja(e.target.value),
                icon: <Inventory2Outlined fontSize="small" />,
                max: 20,
                placeholder: "Ej. Botón principal",
              })}
            </Grid>

            <Grid item xs={12} md={6}>
              {buildField({
                label: "Subtítulo del Botón",
                value: subtitulo,
                onChange: (e) => setSubtitulo(e.target.value),
                icon: <SubtitlesOutlined fontSize="small" />,
                max: 25,
                placeholder: "Texto breve descriptivo",
              })}
            </Grid>

            <Grid item xs={12}>
              {buildField({
                label: "Título de la pantalla",
                value: titulo,
                onChange: (e) => setTitulo(e.target.value),
                icon: <TitleOutlined fontSize="small" />,
                max: 25,
                placeholder: "Encabezado principal",
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DatosGenerales;
