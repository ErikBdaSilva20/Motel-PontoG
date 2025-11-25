import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing['3xl']} 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing['2xl']} 0;
  }
`;
