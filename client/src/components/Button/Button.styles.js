import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};

  /* Variants */
  ${props => props.variant === 'primary' && `
    background: linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.primaryLight} 100%);
    color: ${props.theme.colors.text};
    border: none;

    &:hover {
      background: linear-gradient(135deg, ${props.theme.colors.primaryDark} 0%, ${props.theme.colors.primary} 100%);
      transform: translateY(-2px);
      box-shadow: ${props.theme.shadows.lg};
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: transparent;
    color: ${props.theme.colors.secondary};
    border: 2px solid ${props.theme.colors.secondary};

    &:hover {
      background: ${props.theme.colors.secondary};
      color: ${props.theme.colors.background};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'outline' && `
    background: transparent;
    color: ${props.theme.colors.text};
    border: 2px solid ${props.theme.colors.border};

    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  /* Sizes */
  ${props => props.size === 'small' && `
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
    font-size: ${props.theme.fontSizes.sm};
  `}

  ${props => props.size === 'medium' && `
    padding: ${props.theme.spacing.md} ${props.theme.spacing.xl};
    font-size: ${props.theme.fontSizes.base};
  `}

  ${props => props.size === 'large' && `
    padding: ${props.theme.spacing.lg} ${props.theme.spacing['2xl']};
    font-size: ${props.theme.fontSizes.lg};
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;
