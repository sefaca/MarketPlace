// components/Footer/Footer.tsx
import React from 'react';
import { FooterContainer, FooterText, FooterLinks } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 MarketPlace. Todos los derechos reservados.</FooterText>
      <FooterLinks>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Política de Privacidad</a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
