import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Para pantallas más pequeñas, usa una sola columna */
    padding: 1rem;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    border-radius: 8px;
    padding: 2rem;

    @media (max-width: 768px) {
      width: 100%; /* La imagen ocupará el ancho completo en móviles */
      padding: 1rem;
    }
  }
`;

export const ProductDetails = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;  /* Título más pequeño en móviles */
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;  /* Texto ligeramente más pequeño en móviles */
    }
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;

  .price {
    font-size: 2rem;
    color: #28a745;

    @media (max-width: 768px) {
      font-size: 1.5rem;  /* Tamaño de precio reducido para móviles */
    }
  }

  .discount {
    margin-left: 1rem;
    color: #ff4d4f;

    @media (max-width: 768px) {
      font-size: 1rem;  /* Tamaño de descuento ajustado */
    }
  }
`;

export const Selectors = styled.div`
  padding-top: 20px;  
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Selector = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* El selector ocupa todo el ancho en móviles */
  }
`;

export const SelectorOption = styled.input`
  width: 40px;

  @media (max-width: 768px) {
    width: 60px;  /* Botones de selección ligeramente más grandes en móviles */
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;  /* Botones ligeramente más pequeños */
      width: 100%;      /* Botones ocupan el ancho completo en móviles */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;  /* Botones apilados en móviles */
  }
`;

export const TabContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const TabContent = styled.div`
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
