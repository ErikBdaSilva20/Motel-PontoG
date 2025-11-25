import React from 'react';
import { StyledButton } from './Button.styles';

export function Button({ children, variant = 'primary', size = 'medium', ...props }) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
