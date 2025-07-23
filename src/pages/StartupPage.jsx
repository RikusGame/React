import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // En el futuro aquí irá lógica para decidir a dónde enviar al usuario
    navigate("/login", { replace: true });
  }, [navigate]);

  return null; // No muestra nada visualmente
};

export default StartupPage;
