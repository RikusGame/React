// src/components/BotonCompra.jsx
import React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BotonCompra = ({
  children,
  onClick,
  product,
  variant = 'contained',
  color = 'primary', // Usaremos las props de color estándar de MUI
  icon: IconComponent,
  disabled = false, // Controla si el botón está deshabilitado
  ...props // Permite pasar cualquier otra prop de Material UI Button (como size, sx, etc.)
}) => {
  const handleClick = (event) => {
    // Solo ejecuta el onClick si el botón no está deshabilitado
    if (!disabled && onClick) {
      console.log(`Comprando: ${product ? product.nombre : 'Artículo desconocido'}`);
      onClick(event, product);
    }
  };

  return (
    <Button
      variant={variant}
      color={color} // Material UI manejará los colores predefinidos (primary, error, etc.)
      onClick={handleClick}
      startIcon={IconComponent ? <IconComponent /> : <ShoppingCartIcon />}
      disabled={disabled} // Aplica la prop 'disabled' directamente
      {...props}
    >
      {children || 'Comprar'}
    </Button>
  );
};

export default BotonCompra;