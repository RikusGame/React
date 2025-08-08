// D:\Trabajos_Chasky\Radiotaxi\Dashboard\src\shared\columna\index.js
import renderImagen from "./renderers/Imagen";
import renderId from "./renderers/Id";
import makeRenderEstado from "./renderers/Estado";
import makeRenderAcciones from "./renderers/Acciones";

const columnDefinitions = (context = {}) => ({
  imagen: {
    label: "Imagen",
    flex: 1,
    sortable: false,
    filterable: false,
    renderCell: renderImagen,
  },
  /*
  const columns = useColumns(
    ["imagen"],
  );
  */
  id: {
    label: "ID",
    width: 10,
    sortable: false,
    renderCell: renderId,
  },
  /*
    const columns = useColumns(
      ["id"],
    );
  */

  estado: {
    label: "Estado",
    width: 140,
    sortable: false,
    filterable: false,
    renderCell: makeRenderEstado(context?.estado),
  },
  /*
    const handleEstadoChange = React.useCallback((row, newEstado) => {
      setRows(prev => prev.map(r => (r.id === row.id ? { ...r, estado: newEstado } : r)));
    }, [setRows]);
    const columns = useColumns(
      ["estado"],
      {
        estado: { onChange: handleEstadoChange },
      }
    );
  */

  acciones: {
    label: "Acciones",
    width: 160,
    sortable: false,
    filterable: false,
    renderCell: makeRenderAcciones(context?.acciones),
  },

  /*
    const columns = useColumns(
      ["acciones"],
      {
        acciones: {
          buttons: ["editar", "eliminar", "ver"],
          handlers: {
            editar:  (row) => console.log("EDITAR banner", row),
            eliminar: (row) => console.log("ELIMINAR banner", row),
            ver:     (row) => console.log("VER banner", row),
          },
        },
      }
    );
  */

});

export default columnDefinitions;
