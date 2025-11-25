import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.$isScrolled 
    ? 'rgba(10, 10, 10, 0.95)' 
    : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$isScrolled ? props.theme.shadows.md : 'none'};
  transition: all ${props => props.theme.transitions.normal};
  padding: ${props => props.theme.spacing.lg} 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: color ${props => props.theme.transitions.fast};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    transition: width ${props => props.theme.transitions.fast};
  }

  &:hover {
    color: ${props => props.theme.colors.primary};

    &:after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};

  span {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.text};
    border-radius: ${props => props.theme.borderRadius.sm};
    transition: all ${props => props.theme.transitions.fast};
  }

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  padding: ${props => props.theme.spacing.xl};
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all ${props => props.theme.transitions.normal};
  pointer-events: ${props => props.$isOpen ? 'all' : 'none'};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
  }
`;
