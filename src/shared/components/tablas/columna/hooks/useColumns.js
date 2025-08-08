// D:\Trabajos_Chasky\Radiotaxi\Dashboard\src\shared\columna\hooks\useColumns.js
import React from "react";
import startCase from "lodash/startCase";
import columnDefinitions from "../index";

const useColumns = (fields, context = {}, overrides = {}) => {
  const defs = React.useMemo(() => columnDefinitions(context), [context]);

  return React.useMemo(
    () =>
      fields.map((field) => {
        const base  = defs[field] || {};
        const extra = overrides[field] || {};
        return {
          field,
          headerName: base.label ?? startCase(field),
          disableColumnMenu: true,
          sortable: false,
          ...base,
          ...extra,
        };
      }),
    [fields, defs, overrides]
  );
};

export default useColumns;
