// src/shared/components/modal/modal.jsx
import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { styled, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

/** Transición por defecto */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/** Dialog con estilos y comportamiento comunes */
export const Modal1 = ({ PaperProps, slotProps, fullScreen, ...rest }) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const isFull = typeof fullScreen === "boolean" ? fullScreen : downMd;

  return (
    <Dialog
      fullScreen={isFull}
      TransitionComponent={Transition}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: alpha(theme.palette.common.black, 0.15),
            backdropFilter: "blur(2px)",
          },
          ...(slotProps?.backdrop || {}),
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
          border: "1px solid #b1b1b1ff",
          boxShadow: "4px 4px 30px 0px rgba(0, 0, 0, 0.49)",
          overflow: "hidden",
        },
        ...PaperProps,
      }}
      {...rest}
    />
  );
};

/** Título del dialog con padding/borde unificados */
export const AppDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  padding: theme.spacing(1.5, 3),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5, 2),
  },
}));

/** Contenido con bordes y paddings consistentes */
export const AppDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  backgroundColor: theme.palette.background.default,
  "&.MuiDialogContent-dividers": {
    borderTop: "1px solid #000000",
    borderBottom: "1px solid #000000",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

/** Acciones del dialog con padding consistente */
export const AppDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5, 2),
  },
}));

/** Divider vertical con estilo por defecto */
const verticalDividerDefaultSx = (theme) => ({
  display: "none",
  [theme.breakpoints.up("md")]: { display: "block" },
  borderColor: "#00000088",
  borderRightWidth: 1,
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
});

/** Componente práctico para el separador vertical */
export const VerticalDivider = ({ sx, ...props }) => {
  const theme = useTheme();
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{ ...verticalDividerDefaultSx(theme), ...sx }}
      {...props}
    />
  );
};

/* ===================== NUEVO: Encapsular estilos de header ===================== */
/** Header listo: icono (opcional), título en negrita y botón de cerrar */
export const ModalHeader = ({ title, icon, onClose, actionsRight }) => (
  <AppDialogTitle>
    {icon}
    <Typography variant="h6" fontWeight={800} lineHeight={1.2} flex={1}>
      {title}
    </Typography>
    {actionsRight}
    <IconButton onClick={onClose} aria-label="Cerrar">
      <CloseRoundedIcon />
    </IconButton>
  </AppDialogTitle>
);

/* ===================== NUEVO: Layout 2 columnas + divider ===================== */
/** Cuerpo con layout de 2 columnas, gap y divider vertical. */
export const ModalTwoColumn = ({ left, right, contentProps }) => (
  <AppDialogContent dividers {...contentProps}>
    <Box display="flex" gap={3} alignItems="stretch">
      <Box flex={1}>{left}</Box>
      <VerticalDivider />
      <Box flex={1} display="flex" justifyContent="center">
        {right}
      </Box>
    </Box>
  </AppDialogContent>
);


/* Se usa así:
 / 1) IMPORTA los componentes estilizados (trae el estilo desde el otro archivo)
import {
  Modal1,
  ModalHeader,
  ModalTwoColumn,
  AppDialogActions,
} from "../../../../shared/components/modal/modal.jsx";

 / 2) USA el contenedor con estilo del modal
<Modal1 open={open} onClose={onClose} maxWidth="lg" fullWidth aria-labelledby="nuevo-documento-title">

  / 3) USA el header con estilo (título, icono, botón cerrar)
  <ModalHeader
    title="Nuevo documento"
    icon={<DescriptionRoundedIcon />}
    onClose={onClose}
  />

  / 4) USA el layout 2 columnas con divider vertical y paddings ya definidos
  <ModalTwoColumn
    left=
    right=
  />

  / 5) USA la barra de acciones con sus paddings estilizados
  <AppDialogActions>
    <Button onClick={onClose}>Cancelar</Button>
    <Button variant="contained" color="primary" onClick={handleGuardar}>
      Guardar
    </Button>
  </AppDialogActions>

</Modal1>

*/