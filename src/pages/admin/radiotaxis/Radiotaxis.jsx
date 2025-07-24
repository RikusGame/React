import { useState } from "react";
import { Button, Stack } from "@mui/material";
import SearchableTable from "../../../shared/components/tablas/tabla";
import DetalleModal from "./components/modalGenerico";
import { getRadiotaxisColumns } from "./data/radiotaxisColumns";
import { radiotaxisRows } from "./data/radiotaxisRows";

const Radiotaxis = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleVer = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const columns = getRadiotaxisColumns((params) => (
    <Stack direction="row" spacing={1}>
      <Button size="small" variant="contained" onClick={() => handleVer(params.row)}>Ver</Button>
    </Stack>
  ));

  return (
    <>
      <SearchableTable
        title="Radiotaxis Registrados"
        description="Aquí puedes gestionar los radiotaxis que han enviado sus documentos."
        rows={radiotaxisRows}
        columns={columns}
        height={400}
        pageSize={3}
        rowsPerPageOptions={[5, 10, 20]}
        onRowDoubleClick={(params) => handleVer(params.row)}
      />
      <DetalleModal open={openModal} onClose={() => setOpenModal(false)} rowData={selectedRow} />
    </>
  );
};

export default Radiotaxis;
