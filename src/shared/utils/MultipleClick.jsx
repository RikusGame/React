



import { useState, useCallback } from "react";


// Evita múltiples clics en botones que disparan funciones asíncronas
// Útil para evitar que el usuario haga clic varias veces y cause problemas
/**
 * Devuelve:
 *   execute   → versión protegida de tu función async
 *   loading   → true mientras se ejecuta
 *   reset()   → opcional, fuerza loading = false
 */
export default function useMultipleClickBlock(asyncFn) {
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (...args) => {
    if (loading) return;        // ignora clics extra
    setLoading(true);
    try {
      await asyncFn(...args);
    } finally {
      setLoading(false);
    }
  }, [loading, asyncFn]);

  /** Útil si querés limpiar el estado al cerrar un modal */
  const reset = useCallback(() => setLoading(false), []);

  return { execute, loading, reset };
}

/* Ejemplo de uso:
const { execute, loading } = multipleClickBlock(async () => {
   await someAsyncFunction();
});
*/