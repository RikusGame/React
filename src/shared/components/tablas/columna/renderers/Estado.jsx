import { Box, Switch } from "@mui/material";

/**
 * makeRenderEstado(config)
 * config:
 *  - onChange: (row, nextValue) => void      ← requerido para mutar estado
 *  - size?: "small" | "medium"
 *  - color?: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "default"
 *  - readOnly?: boolean
 *  - disabled?: boolean
 */
const makeRenderEstado = (config = {}) => ({ value, row }) => {
  const {
    onChange,
    size = "small",
    color = "primary",
    readOnly = false,
    disabled = false,
  } = config;

  const checked = Boolean(value);

  const toggle = (e) => {
    e.stopPropagation();
    if (readOnly || disabled) return;
    onChange?.(row, !checked);
  };

  return (
    <Box
      onClick={toggle}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: readOnly || disabled ? "default" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {/* El Switch muestra el estado; el click lo maneja el contenedor */}
      <Switch
        size={size}
        color={color}
        checked={checked}
        onChange={(e) => e.stopPropagation()} // evitamos que el switch haga su propio toggle
        readOnly
        disabled={disabled}
        sx={{ pointerEvents: "none" }}
      />
    </Box>
  );
};

export default makeRenderEstado;
