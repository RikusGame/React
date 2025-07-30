// Columns.js

export const Columns = (customActionsRenderer) => [
  { field: 'numero', headerName: 'ID', width: 10 },
  { field: 'titulo', headerName: 'Titulo', flex: 1 },
  { field: 'estado', headerName: 'Estado', width: 130, sortable: false, filterable: false },
  {
    field: 'acciones',
    headerName: 'Acciones',
    width: 160,
    sortable: false,
    filterable: false,
    renderCell: customActionsRenderer,
  },
];
