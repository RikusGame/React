// import IconActionButton from "../../../shared/components/botones/Botones";
import Button from "@mui/material/Button";

export default function Boton1({ icon, color = "primary", onClick }) {
  return (
    <Button
      size="small"
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{
        p: 0,
        width: 32,
        height: 32,
        minWidth: 32,
        minHeight: 32,
        borderRadius: 2,
      }}
    >
      {icon}
    </Button>
  );
}

/* Se usa asi:
<IconActionButton
  icon={<EditIcon fontSize="small" />}
  color="primary"
  onClick={handleEdit}        // <-- acción definida aquí
/>
*/
