// components/ProductCard/ProductCard.styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 18rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #E5E5E5

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  height: 320px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const CardBody = styled.div`
  padding: 1rem;
  text-align: left;
`;

export const CardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  color: #414141;
  margin-bottom: 10px;
`;
