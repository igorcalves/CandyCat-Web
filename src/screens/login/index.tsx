import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import {
  LoginContainer,
  LoginCard,
  LoginHeader,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  InputGroup,
  InputContainer,
  InputIcon,
  Input,
  PasswordToggle,
  ForgotPassword,
  LoginButton,
  Divider,
  SocialButtons,
  SocialButton,
  SignupText,
  SignupLink,
} from "./styles";
import { useGlobalContext } from "../../context/GlobalCOntext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setScreen } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    setScreen("home");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <LoginTitle>Welcome Back</LoginTitle>
          <LoginSubtitle>Sign in to your account</LoginSubtitle>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <InputContainer>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <InputContainer>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
              <PasswordToggle onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </PasswordToggle>
            </InputContainer>
          </InputGroup>

          <ForgotPassword href="#">Forgot your password?</ForgotPassword>

          <LoginButton type="submit">Sign In</LoginButton>

          <Divider>
            <span>or continue with</span>
          </Divider>

          <SocialButtons>
            <SocialButton type="button">Google</SocialButton>
            <SocialButton type="button">GitHub</SocialButton>
          </SocialButtons>

          <SignupText>
            Don't have an account? <SignupLink href="#">Sign up</SignupLink>
          </SignupText>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};
