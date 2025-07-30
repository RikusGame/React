// src/pages/admin/docs/components/VistaPreviaMovil/InputPreview.jsx
import { TextField } from "@mui/material";

const InputPreview = ({ label }) => (
  <TextField
    size="small"
    fullWidth
    label={label || "Campo"}
    sx={{
      mb: 2,                               // ⬅️ separación abajo
      "& .MuiOutlinedInput-root": {
        borderRadius: 2.5,                 // ⬅️ borde más redondeado (≈20 px)
      },
    }}
  />
);

export default InputPreview;
