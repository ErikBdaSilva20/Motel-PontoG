import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 400px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

export const CarouselSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity ${props => props.theme.transitions.slow};
  pointer-events: ${props => props.$isActive ? 'all' : 'none'};
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  background-color: rgba(139, 10, 80, 0.8);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  z-index: 10;

  &:hover {
    background-color: rgba(139, 10, 80, 1);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  z-index: 10;
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.$isActive 
    ? props.theme.colors.primary 
    : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: scale(1.2);
  }
`;
