// components/Button/BuyButton.tsx
import React from 'react';
import { StyledButton } from './BuyButton.styles';

interface BuyButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

const BuyButton: React.FC<BuyButtonProps> = ({ children, primary, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default BuyButton;
