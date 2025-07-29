// src/pages/admin/radiotaxis/Radiotaxis.jsx
import { useState } from "react";
import { Typography, Paper, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tabla2 } from "../../../shared/components/tablas/tabla";
import DetalleModal from "./components/modalGenerico";
import { getRadiotaxisColumns } from "./data/radiotaxisColumns";
import { radiotaxisRows } from "./data/radiotaxisRows";
import IconActionButton from "../../../shared/components/botones/Botones";

const Radiotaxis = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleVer = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const columns = getRadiotaxisColumns((params) => (
    <Stack direction="row" spacing={1}>
      <IconActionButton
        icon={<VisibilityIcon fontSize="small" />}
        color="primary"
        onClick={(e) => {
          e.stopPropagation();      // ← evita doble disparo
          handleVer(params.row);
        }}
      />
    </Stack>
  ));

  return (
    <>
        <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
          mx: "auto",
          maxWidth: 1200,
          border: "0.1px solid rgba(146, 144, 144, 1)",
        }}
        >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Radiotaxis Registrados
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Aquí puedes gestionar los radiotaxis que han enviado sus documentos.
        </Typography>

        <Tabla2
          rows={radiotaxisRows}
          columns={columns}
          height="51vh"
          pageSize={3}
          onRowClick={(params) => handleVer(params.row)}
        />
      </Paper>

      <DetalleModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        rowData={selectedRow}
      />
    </>
  );
};

export default Radiotaxis;
