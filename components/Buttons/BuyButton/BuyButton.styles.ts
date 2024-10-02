// components/Button/BuyButton.styles.ts
import styled from 'styled-components';

export const StyledButton = styled.button<{ primary?: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${(props) => (props.primary ? '#03045E' : '#6c757d')};
  color: white;
  border: none;
  border-radius: 99px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#5a6268')};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
