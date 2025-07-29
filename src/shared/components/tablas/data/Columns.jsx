// radiotaxisColumns.js
export const getRadiotaxisColumns = (customActionsRenderer) => [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'nombreEmpresa', headerName: 'Nombre Empresa', flex: 1 },
  { field: 'telefono', headerName: 'Teléfono', width: 150 },
  { field: 'estado', headerName: 'Estado', width: 130 },
  { field: 'fecha', headerName: 'Fecha de Envío', width: 160 },
  {
    field: 'acciones',
    headerName: 'Acciones',
    width: 160,
    sortable: false,
    filterable: false,
    renderCell: customActionsRenderer,
  },
];
