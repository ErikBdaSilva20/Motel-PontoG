import React from 'react';
import { StyledTextarea, TextareaWrapper, Label } from './Textarea.styles';

export function Textarea({ label, id, ...props }) {
  return (
    <TextareaWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea id={id} {...props} />
    </TextareaWrapper>
  );
}
