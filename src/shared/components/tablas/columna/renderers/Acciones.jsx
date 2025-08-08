import { Stack, Tooltip } from "@mui/material";
import IconActionButton from "../../../../components/botones/Botones";
import Icons from "../../../../constants/Icons";

const makeRenderAcciones = (config = {}) => {
  const {
    buttons = ["editar", "eliminar", "ver"],
    handlers = {},
    size = "small",
    map = {},
  } = config;

  // Definición por defecto de cada acción
  const defaults = {
    editar:   { icon: <Icons.Edit fontSize={size} />,   color: "primary",  label: "Editar" },
    eliminar: { icon: <Icons.Delete fontSize={size} />, color: "error",    label: "Eliminar" },
    ver:      { icon: <Icons.View fontSize={size} />,   color: "info",     label: "Ver" },
  };

  // Permitir overrides desde `map`
  const getDef = (key) => ({ ...defaults[key], ...(map[key] || {}) });

  return ({ row }) => {
    const handleClick = (accion) => (e) => {
      e.stopPropagation();
      if (typeof handlers[accion] === "function") {
        handlers[accion](row);
      } else {
        console.log(`${accion} → ID: ${row?.id}`);
      }
    };

    return (
      <Stack direction="row" spacing={1}>
        {buttons.map((key) => {
          const def = getDef(key);
          if (!def) return null;
          return (
            <Tooltip key={key} title={def.label}>
              <span>
                <IconActionButton
                  icon={def.icon}
                  color={def.color}
                  onClick={handleClick(key)}
                />
              </span>
            </Tooltip>
          );
        })}
      </Stack>
    );
  };
};

export default makeRenderAcciones;
