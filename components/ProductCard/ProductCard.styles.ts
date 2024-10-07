// components/ProductCard/ProductCard.styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 18rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #E5E5E5;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  height: 320px;
  width: 100%;
  padding: 30px;  
`;

export const CardBody = styled.div`
  padding: 1rem;
  text-align: left;
  background-color: #f5f7fa;
  color: #414141;
  maxLine: 4
`;

export const CardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* Limita a 2 líneas */
  line-height: 1.5;
  max-height: calc(1.5em * 2); /* Calcula el máximo en función de las líneas y el line-height */
  margin-bottom: 0.5rem;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  color: #414141;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  line-height: 1.5;
  max-height: calc(1.5em * 4);
  margin-bottom: 1rem;
`;