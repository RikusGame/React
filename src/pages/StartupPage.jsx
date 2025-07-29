import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartupPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige primero a la landing
    navigate("/landing", { replace: true });
  }, [navigate]);

  return null; // No muestra nada visualmente
};

export default StartupPage;
