// src/pages/admin/banner/data/columnas/Id.jsx
import { Typography } from "@mui/material";

const renderId = ({ value }) => (
  <Typography variant="body2" fontWeight="bold">
    # {String(value).padStart(1, "0")}
  </Typography>
);

export default renderId;
