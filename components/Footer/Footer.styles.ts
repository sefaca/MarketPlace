// components/Footer/Footer.styles.ts
import styled from 'styled-components';

// Contenedor principal del footer
export const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #6c757d;
  position: relative;
  bottom: 0;
  width: 100%;
`;

// Texto principal del footer (copyright)
export const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

// Estilo para los enlaces dentro del footer
export const FooterLinks = styled.div`
  margin-top: 10px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
