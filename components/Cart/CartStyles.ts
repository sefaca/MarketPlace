// components/CartStyles.ts
import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-top: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
`;

export const TotalContainer = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;
