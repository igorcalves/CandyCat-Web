import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const LoginCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 300px;
    border-radius: 12px;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
`;

export const LoginSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 12px;
  color: #666;
  font-size: 16px;
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;

  &:hover {
    color: #333;
  }
`;

export const ForgotPassword = styled.a`
  text-align: right;
  font-size: 14px;
  color: #667eea;
  text-decoration: none;
  margin-top: -8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 24px 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    background: #ffffff;
    color: #666;
    padding: 0 16px;
    font-size: 14px;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    background: #f8f9ff;
  }
`;

export const SignupText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin: 24px 0 0 0;
`;

export const SignupLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
