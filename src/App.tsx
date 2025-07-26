import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "./assets/logo.png";
import { Home } from "./screens/home";
import { Login } from "./screens/login";
import { Shopping } from "./screens/shopping";
import { Tasks } from "./screens/tasks";
import { Settings } from "./screens/settings";
import { SideBar } from "./components/sideBar";
import { useGlobalContext } from "./context/GlobalCOntext";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const AppContainer = styled.div<{ $showContent: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${(props) =>
    props.$showContent
      ? "white"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  transition: background 0.5s ease-in-out;
`;

const MainLayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? "none" : fadeOut)} 0.5s ease-out;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  animation: ${pulse} 1s ease-in-out infinite;
  animation-duration: 2s;
  animation-iteration-count: 2;
`;

function App() {
  const [showConent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const { screen } = useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const switchScreen = () => {
    if (screen === "home") {
      return <Home />;
    }
    if (screen === "login") {
      return <Login />;
    }
    if (screen === "shopping") {
      return <Shopping />;
    }
    if (screen === "tasks") {
      return <Tasks />;
    }
    if (screen === "settings") {
      return <Settings />;
    }
    // Default para home se screen não for reconhecido
    return <Home />;
  };

  return (
    <AppContainer $showContent={showConent}>
      {showLogo && (
        <LogoContainer $isVisible={showLogo}>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>
      )}
      {showConent && (
        <>
          {screen === "login" ? (
            <Login />
          ) : (
            <MainLayoutContainer>
              <SideBar />
              {switchScreen()}
            </MainLayoutContainer>
          )}
        </>
      )}
    </AppContainer>
  );
}

export default App;
