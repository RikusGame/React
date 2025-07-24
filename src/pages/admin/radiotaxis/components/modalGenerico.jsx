// components/DetalleModal.jsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

const DetalleModal = ({ open, onClose, rowData }) => {
  if (!rowData) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Detalle del Radiotaxi</DialogTitle>
      <DialogContent dividers>
        <Typography><strong>ID:</strong> {rowData.id}</Typography>
        <Typography><strong>Nombre Empresa:</strong> {rowData.nombreEmpresa}</Typography>
        <Typography><strong>Teléfono:</strong> {rowData.telefono || "No proporcionado"}</Typography>
        <Typography><strong>Estado:</strong> {rowData.estado}</Typography>
        <Typography><strong>Fecha:</strong> {rowData.fecha}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetalleModal;
