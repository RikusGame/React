// tablas.jsx
import { useState, useMemo } from "react";
import { Paper, Typography, Box, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const defaultStyles = {
  border: 0,
  borderRadius: 2,
  backgroundColor: "#fff",
  fontFamily: "Roboto, sans-serif",
  fontSize: "0.95rem",
  boxShadow: 3,
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f0f0f0",
    color: "#000",
    fontWeight: "bold",
    fontSize: "1rem",
    borderBottom: "2px solid #1e3c72",
  },
  "& .MuiDataGrid-cell": {
    color: "#333",
    borderBottom: "1px solid #e0e0e0",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#f9f9f9",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "1px solid #ddd",
    backgroundColor: "#fafafa",
  },
  "& .MuiTablePagination-root": {
    fontSize: "0.85rem",
  },
};

const SearchableTable = ({
  title = "",
  description = "",
  rows = [],
  columns = [],
  height = 400,
  sx = {},
  pageSize = 10,
  rowsPerPageOptions = [5, 10, 20, 50],
}) => {
  const [searchText, setSearchText] = useState("");
  const [pageSizeState, setPageSizeState] = useState(pageSize);

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [rows, searchText]);

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      {title && (
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography gutterBottom>
          {description}
        </Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <TextField
          label="Buscar"
          variant="outlined"
          size="small"
          sx={{ width: 250 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>

      <Box sx={{ height, mt: 2 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pagination
          paginationModel={{ pageSize: pageSizeState, page: 0 }}
          onPaginationModelChange={(model) => setPageSizeState(model.pageSize)}
          pageSizeOptions={rowsPerPageOptions}
          disableRowSelectionOnClick
          sx={{ ...defaultStyles, ...sx }}
        />

      </Box>
    </Paper>
  );
};

export default SearchableTable;


/* Ejemplo de uso:
  <SearchableTable
    title="Radiotaxis Registrados"
    description="Aquí puedes gestionar los radiotaxis que han enviado sus documentos."
    rows={radiotaxisRows}
    columns={radiotaxisColumns}
    height={400}
    pageSize={10} // Valor por defecto inicial
    rowsPerPageOptions={[5, 10, 20]} // Opciones disponibles
  />
*/
