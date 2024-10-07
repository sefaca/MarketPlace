import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const FormBox = styled.div`
  background: #fff;
  padding: 20px 40px 20px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 400px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #f27a1a;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #1B6392;
  }
`;

export const BoxRegister = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;