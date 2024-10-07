// components/Footer/Footer.styles.ts
import styled from 'styled-components';

// Contenedor principal del footer
export const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #6c757d;
  width: 100%;
  position: relative;
  margin-top: 140px;
`;

// Texto principal del footer (copyright)
export const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

// Estilo para los enlaces dentro del footer
export const FooterLinks = styled.div`
  margin-top: 10px;



  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
