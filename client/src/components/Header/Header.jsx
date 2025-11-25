import React, { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { HeaderWrapper, Logo, Nav, NavLink, MobileMenuButton, MobileMenu, NavLinks } from './Header.styles';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <HeaderWrapper $isScrolled={isScrolled}>
      <Container>
        <Nav>
          <Logo onClick={() => scrollToSection('inicio')}>Ponto G Motel</Logo>
          
          <NavLinks>
            <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
            <NavLink onClick={() => scrollToSection('suites')}>Suítes</NavLink>
            <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
            <NavLink onClick={() => scrollToSection('privacidade')}>Privacidade</NavLink>
            <NavLink onClick={() => scrollToSection('conforto')}>Conforto</NavLink>
            <NavLink onClick={() => scrollToSection('promocoes')}>Promoções</NavLink>
            <NavLink onClick={() => scrollToSection('blog')}>Blog</NavLink>
            <Button size="small" onClick={() => scrollToSection('contato')}>Contato</Button>
          </NavLinks>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
        <NavLink onClick={() => scrollToSection('suites')}>Suítes</NavLink>
        <NavLink onClick={() => scrollToSection('sobre')}>Sobre</NavLink>
        <NavLink onClick={() => scrollToSection('privacidade')}>Privacidade</NavLink>
        <NavLink onClick={() => scrollToSection('conforto')}>Conforto</NavLink>
        <NavLink onClick={() => scrollToSection('promocoes')}>Promoções</NavLink>
        <NavLink onClick={() => scrollToSection('blog')}>Blog</NavLink>
        <Button size="small" onClick={() => scrollToSection('contato')}>Contato</Button>
      </MobileMenu>
    </HeaderWrapper>
  );
}
