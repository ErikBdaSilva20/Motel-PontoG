import React from 'react';
import { StyledSection } from './Section.styles';

export function Section({ children, id, ...props }) {
  return (
    <StyledSection id={id} {...props}>
      {children}
    </StyledSection>
  );
}
