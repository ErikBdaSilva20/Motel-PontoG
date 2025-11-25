import React from 'react';
import { StyledInput, InputWrapper, Label } from './Input.styles';

export function Input({ label, id, ...props }) {
  return (
    <InputWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput id={id} {...props} />
    </InputWrapper>
  );
}
