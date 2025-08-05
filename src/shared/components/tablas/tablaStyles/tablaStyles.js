const tablaStyles = {
  border: "none",
  backgroundColor: "#f3f3f3ff",
  fontFamily: "Arial, sans-serif",
  fontSize: "0.9rem",

  "& .MuiDataGrid-columnHeaders": {
    background: "linear-gradient(to right, #1976d2, #42a5f5)",
    color: "#000",
    fontWeight: 600,
    fontSize: "1rem",
    border: "1px solid #727272",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.4)",
    borderRadius: "8px 8px",
    overflow: "hidden",
  },
  "& .MuiDataGrid-columnHeader": {
    borderRight: "none !important",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "block !important",
    width: "1px !important",
    backgroundColor: "#727272ff !important",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.51)",
    opacity: 1,
  },
  "& .MuiDataGrid-row": {
    borderRadius: "12px",
    margin: "8px 0px 0px 8px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.51)",
    border: "1px solid rgba(0, 0, 0, 0.21)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
    width: "calc(100% - 58px)",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#dceffdff",
    transform: "scale(1.008)",
  },
  "& .MuiDataGrid-cell": {
    border: "none",
    padding: "0px 16px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#fafafa",
    borderTop: "1px solid #9c9c9cff",
  },
  "& .MuiTablePagination-root": {
    fontSize: "0.85rem",
  },
  "& .MuiDataGrid-row.MuiDataGrid-row--lastVisible": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
};

export default tablaStyles;
