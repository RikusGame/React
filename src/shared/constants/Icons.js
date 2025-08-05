// src/shared/constants/Icons.js

// import Icons from "../../../shared/constants/Icons";

// Íconos de Material UI
import Add from "@mui/icons-material/Add";                 // ➕ Agregar nuevo
import Download from "@mui/icons-material/Download";       // ⬇️ Descargar
import Save from "@mui/icons-material/Save";               // 💾 Guardar
import Check from "@mui/icons-material/Check";             // ✅ Confirmar / Aceptar
import Edit from "@mui/icons-material/Edit";               // ✏️ Editar
import Delete from "@mui/icons-material/Delete";           // 🗑️ Eliminar / Borrar
import Search from "@mui/icons-material/Search";           // 🔍 Buscar
import Close from "@mui/icons-material/Close";             // ❌ Cerrar / Cancelar
import ArrowBack from "@mui/icons-material/ArrowBack";     // 🔙 Volver / Atrás
import Visibility from "@mui/icons-material/Visibility";   // 👁️ Ver / Visualizar
import VisibilityOff from "@mui/icons-material/VisibilityOff"; // 🙈 Ocultar
import Info from "@mui/icons-material/Info";               // ℹ️ Información
import Warning from "@mui/icons-material/Warning";         // ⚠️ Advertencia
import Error from "@mui/icons-material/Error";             // ⛔ Error
import Upload from "@mui/icons-material/Upload";           // ⬆️ Subir archivo
import Settings from "@mui/icons-material/Settings";       // ⚙️ Configuración
import Lock from "@mui/icons-material/Lock";               // 🔒 Bloquear
import LockOpen from "@mui/icons-material/LockOpen";       // 🔓 Desbloquear
import Person from "@mui/icons-material/Person";           // 👤 Usuario
import Logout from "@mui/icons-material/Logout";           // 🚪 Cerrar sesión
import CalendarToday from "@mui/icons-material/CalendarToday"; // 📅 Calendario
import Home from "@mui/icons-material/Home";               // 🏠 Inicio / Dashboard

// Objeto de íconos
const Icons = {
  Add: Add,                         // ➕ Agregar nuevo
  Download: Download,               // ⬇️ Descargar
  Save: Save,                       // 💾 Guardar
  Check: Check,                     // ✅ Confirmar / Aceptar
  Edit: Edit,                       // ✏️ Editar
  Delete: Delete,                   // 🗑️ Eliminar / Borrar
  Search: Search,                   // 🔍 Buscar
  Close: Close,                     // ❌ Cerrar / Cancelar
  Back: ArrowBack,                  // 🔙 Volver / Atrás
  View: Visibility,                 // 👁️ Ver / Visualizar
  Hide: VisibilityOff,              // 🙈 Ocultar
  Info: Info,                       // ℹ️ Información
  Warning: Warning,                 // ⚠️ Advertencia
  Error: Error,                     // ⛔ Error
  Upload: Upload,                   // ⬆️ Subir archivo
  Settings: Settings,               // ⚙️ Configuración
  Lock: Lock,                       // 🔒 Bloquear
  Unlock: LockOpen,                 // 🔓 Desbloquear
  User: Person,                     // 👤 Usuario
  Logout: Logout,                   // 🚪 Cerrar sesión
  Calendar: CalendarToday,          // 📅 Calendario
  Home: Home,                       // 🏠 Inicio / Dashboard
};

export default Icons;

/* Ejemplo de uso:
icon: <Icons.save />
iconoDerecho: Icons.check
iconoIzquierdo: Icons.add
*/
