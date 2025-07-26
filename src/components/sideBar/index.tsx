import { useState } from "react";
import { FaChartArea, FaCog, FaShoppingCart, FaTasks } from "react-icons/fa";
import {
  SideBarContainer,
  SideBarContent,
  SideBarHeader,
  SideBarItem,
  SideBarLogo,
  CollapsedSidebar,
  ToggleButton,
} from "./styles";
import Icon from "../icons";
import logo from "../../assets/logo.png";
import { useGlobalContext } from "../../context/GlobalCOntext";

export const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { screen, setScreen } = useGlobalContext();

  const toggleSidebar = () => {
    if (!isCollapsed) {
      setIsClosing(true);
      setTimeout(() => {
        setIsCollapsed(true);
        setIsClosing(false);
      }, 480);
    } else {
      setIsCollapsed(false);
    }
  };

  return (
    <>
      {isCollapsed && (
        <CollapsedSidebar>
          <ToggleButton onClick={toggleSidebar}>
            <Icon icon={<FaCog />} color="#000000" />
          </ToggleButton>
        </CollapsedSidebar>
      )}

      {!isCollapsed && (
        <SideBarContainer isClosing={isClosing}>
          <SideBarHeader>
            <SideBarLogo src={logo} alt="Logo" />
          </SideBarHeader>
          <SideBarContent>
            <SideBarItem onClick={() => setScreen("home")}>
              <Icon isSelected={screen === "home"} icon={<FaChartArea />} />
            </SideBarItem>
            <SideBarItem onClick={() => setScreen("shopping")}>
              <Icon
                isSelected={screen === "shopping"}
                icon={<FaShoppingCart />}
              />
            </SideBarItem>
            <SideBarItem onClick={() => setScreen("tasks")}>
              <Icon isSelected={screen === "tasks"} icon={<FaTasks />} />
            </SideBarItem>
          </SideBarContent>
          <SideBarItem onClick={() => setScreen("settings")}>
            <Icon isSelected={screen === "settings"} icon={<FaCog />} />
          </SideBarItem>
        </SideBarContainer>
      )}
    </>
  );
};
