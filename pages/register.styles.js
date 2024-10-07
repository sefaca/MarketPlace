// RegisterPage.styles.js
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const FormBox = styled.div`
  background: #fff;
  padding: 20px 40px 40px 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 400px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  font-size: 16px;
  color: #8c8c8c;
  cursor: pointer;
`;

export const ActiveTab = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #f27a1a;
  border-bottom: 2px solid #f27a1a;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckboxText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  a {
    color: #f27a1a;
    text-decoration: none;
  }
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

export const Separator = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #999;
  font-size: 14px;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const SocialButton = styled.button`
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #1B6392;
    color: white;
  }
`;
